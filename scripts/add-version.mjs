import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Simple ULID implementation (timestamp + random)
function generateULID() {
  const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  const now = Date.now();
  let ulid = '';
  
  // First 10 characters: timestamp in base32
  let timestamp = now;
  for (let i = 0; i < 10; i++) {
    ulid = ENCODING[timestamp % 32] + ulid;
    timestamp = Math.floor(timestamp / 32);
  }
  
  // Last 10 characters: random
  let random = now * Math.random();
  for (let i = 0; i < 10; i++) {
    ulid += ENCODING[Math.floor(random * 32) % 32];
    random = random * 32 - Math.floor(random * 32);
  }
  
  return ulid;
}

const ULID = generateULID();
const buildTime = new Date().toISOString();

// Do NOT modify sitemap.xml (must start with XML declaration)
// const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
// let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
// sitemap = `<!-- Build ID: ${ULID} | ${buildTime} -->\n` + sitemap;
// fs.writeFileSync(sitemapPath, sitemap);
// console.log(` sitemap.xml updated with build ID: ${ULID}`);

// Update robots.txt with ULID comment
const robotsPath = path.join(__dirname, '..', 'dist', 'robots.txt');
let robots = fs.readFileSync(robotsPath, 'utf-8');
robots = `# Build ID: ${ULID} | ${buildTime}\n` + robots;
fs.writeFileSync(robotsPath, robots);
console.log(` robots.txt updated with build ID: ${ULID}`);

// Write version.json for reference
const versionPath = path.join(__dirname, '..', 'dist', 'version.json');
const version = {
  buildId: ULID,
  buildTime: buildTime,
  commit: process.env.GIT_COMMIT || 'local'
};
fs.writeFileSync(versionPath, JSON.stringify(version, null, 2));
console.log(` version.json created`);

console.log(`\n✅ Build Version: ${ULID}`);
console.log(`   Time: ${buildTime}`);