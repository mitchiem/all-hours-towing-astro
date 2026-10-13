import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, '..', 'dist', 'sitemap.xml');
if (!fs.existsSync(p)) {
  console.error('ERROR: dist/sitemap.xml not found');
  process.exit(1);
}
let buf = fs.readFileSync(p);
// Strip UTF-8 BOM if present
if (buf.length >= 3 && buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
  buf = buf.slice(3);
}
let s = buf.toString('utf8');
// Find first occurrence of XML declaration
const idx = s.indexOf('<?xml');
if (idx === -1) {
  console.error('ERROR: No XML declaration found in sitemap.xml');
  process.exit(1);
}
// Auto-fix: trim everything before first XML declaration
if (idx !== 0) {
  console.warn(`WARN: Removing ${idx} leading characters before XML declaration (comments/whitespace)`);
  s = s.slice(idx);
}
// Ensure trailing newline
if (!s.endsWith('\n')) s += '\n';
fs.writeFileSync(p, s, { encoding: 'utf8' });
// Verify again
const ok = s.startsWith('<?xml');
if (!ok) {
  console.error('ERROR: sitemap.xml still invalid after fix');
  process.exit(1);
}
console.log('OK: sitemap.xml starts at byte 0 with XML declaration.');
