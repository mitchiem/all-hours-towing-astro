import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const STRICT = process.env.AUDIT_STRICT === '1';

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.isFile()) out.push(p);
  }
  return out;
}

function read(fp) { return fs.readFileSync(fp, 'utf8'); }

function textOnly(html) {
  let s = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
              .replace(/<style[\s\S]*?<\/style>/gi, ' ')
              .replace(/<[^>]+>/g, ' ')
              .replace(/&nbsp;/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();
  return s;
}

function minWordsFor(rel) {
  if (/^locations\/[^/]+\/.+\/?$/.test(rel)) return 500; // city+service
  if (/^locations\//.test(rel) || /^services\//.test(rel)) return 300; // city root or service root
  return 150; // general
}

if (!fs.existsSync(DIST)) {
  console.error('ERROR: dist/ not found. Run build first.');
  process.exit(1);
}

const files = walk(DIST).filter(f => f.endsWith('.html') && !f.endsWith('/404.html'));
let issues = 0;
for (const f of files) {
  const rel = path.relative(DIST, f).replace(/\\/g, '/');
  const html = read(f);
  const body = html; // simple checks on full html
  const words = textOnly(body).split(/\s+/).filter(Boolean).length;
  const h1 = (body.match(/<h1\b/gi) || []).length;
  const hasTitle = /<title>[^<]{3,}<\/title>/i.test(body);
  const hasDesc = /<meta[^>]+name=["']description["'][^>]*>/i.test(body);
  const hasCanon = /<link[^>]+rel=["']canonical["'][^>]*>/i.test(body);
  const hasJsonLd = /type=["']application\/ld\+json["']/i.test(body);
  const minW = minWordsFor(rel.replace(/index\.html$/, ''));
  const errs = [];
  if (h1 !== 1) errs.push(`H1 count=${h1}`);
  if (!hasTitle) errs.push('missing <title>');
  if (!hasDesc) errs.push('missing meta description');
  if (!hasCanon) errs.push('missing canonical');
  if (!hasJsonLd) errs.push('missing JSON-LD');
  if (words < minW) errs.push(`thin content: ${words}/${minW} words`);
  if (errs.length) {
    issues++;
    console.warn(`[WARN] ${rel}: ${errs.join('; ')}`);
  } else {
    console.log(`[OK] ${rel}: words=${words}`);
  }
}

if (issues) {
  const msg = `Audit completed: ${issues} file(s) with issues.`;
  if (STRICT) {
    console.error(msg);
    process.exit(1);
  } else {
    console.warn(msg);
  }
} else {
  console.log('Audit passed: no issues.');
}
