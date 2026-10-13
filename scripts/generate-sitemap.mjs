import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const SITE = 'https://allhourstowingmaconga.com';

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip build internals
      if (e.name === '_astro' || e.name === 'lovable-uploads') continue;
      out.push(...walk(p));
    } else if (e.isFile()) {
      out.push(p);
    }
  }
  return out;
}

function toUrl(filePath) {
  const rel = path.relative(DIST, filePath).replace(/\\/g, '/');
  if (!rel.endsWith('.html')) return null;
  if (rel === '404.html') return null;
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return `/${rel}`;
}

function lastmodISO(fp) {
  try { return new Date(fs.statSync(fp).mtimeMs).toISOString(); } catch { return undefined; }
}

if (!fs.existsSync(DIST)) {
  console.error('ERROR: dist/ not found. Run build first.');
  process.exit(1);
}

const BLOCK_LIST = [
  '/project-checklist',
  '/macon-area-build-status',
  '/macon-service-page-tracker',
  '/missing-service-pages',
  '/internal-linking-audit'
];

const files = walk(DIST);
const urls = [];
for (const f of files) {
  const u = toUrl(f);
  if (!u) continue;
  if (BLOCK_LIST.includes(u)) continue;
  urls.push({ loc: `${SITE}${u}`, lastmod: lastmodISO(f) });
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const { loc, lastmod } of urls.sort((a,b)=>a.loc.localeCompare(b.loc))) {
  xml += '  <url>\n';
  xml += `    <loc>${loc}</loc>\n`;
  if (lastmod) xml += `    <lastmod>${lastmod}</lastmod>\n`;
  if (loc === `${SITE}/`) xml += '    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n';
  else if (/\/locations(\/|$)/.test(loc) || /\/services(\/|$)/.test(loc)) xml += '    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n';
  else xml += '    <changefreq>monthly</changefreq>\n    <priority>0.5</priority>\n';
  xml += '  </url>\n';
}
xml += '</urlset>\n';

const outPath = path.join(DIST, 'sitemap.xml');
fs.writeFileSync(outPath, xml, { encoding: 'utf8' });
console.log(`sitemap.xml generated from dist: ${urls.length} URLs`);
