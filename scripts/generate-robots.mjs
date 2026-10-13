import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://allhourstowingmaconga.com/sitemap.xml
`;

const outputPath = path.join(__dirname, '..', 'dist', 'robots.txt');
fs.writeFileSync(outputPath, robotsTxt);
console.log('robots.txt generated');