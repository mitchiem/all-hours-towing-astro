import { chromium } from 'playwright';
import { spawn } from 'child_process';

async function checkPageLinks(page, path, name) {
  await page.goto('http://localhost:3456' + path, { waitUntil: 'domcontentloaded', timeout: 10000 });
  const links = await page.locator('a[href^="/"]').evaluateAll(els => 
    els.map(el => el.getAttribute('href')).filter(h => h && !h.startsWith('//') && !h.startsWith('http') && !h.startsWith('tel:') && !h.startsWith('mailto:'))
  );
  
  const errors = [];
  const checked = new Set();
  
  for (const link of links) {
    if (checked.has(link)) continue;
    checked.add(link);
    
    try {
      const response = await page.goto('http://localhost:3456' + link, { waitUntil: 'domcontentloaded', timeout: 10000 });
      const status = response?.status() || 0;
      if (status >= 400) {
        errors.push(`${link} - ${status}`);
      }
    } catch (e) {
      errors.push(`${link} - ${e.message}`);
    }
  }
  
  console.log(`${name}: ${links.length} links, ${errors.length} broken`);
  if (errors.length > 0) {
    errors.forEach(e => console.log('  ' + e));
  }
  
  return errors;
}

async function checkAll() {
  const server = spawn('bunx', ['serve', 'dist', '-l', '3456'], { 
    cwd: '/home/tichapm/dev/baatb/big-al-towing-astro',
    stdio: 'ignore'
  });
  
  await new Promise(r => setTimeout(r, 2000));
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const allErrors = [];
  
  // Check homepage
  const homeErrors = await checkPageLinks(page, '/', 'Homepage');
  allErrors.push(...homeErrors);
  
  // Check services page
  const servicesErrors = await checkPageLinks(page, '/services', 'Services');
  allErrors.push(...servicesErrors);
  
  // Check locations page
  const locationsErrors = await checkPageLinks(page, '/locations', 'Locations');
  allErrors.push(...locationsErrors);
  
  // Check reviews
  const reviewsErrors = await checkPageLinks(page, '/reviews', 'Reviews');
  allErrors.push(...reviewsErrors);
  
  await browser.close();
  server.kill();
  
  console.log('\n=== Total broken: ' + allErrors.length + ' ===');
  if (allErrors.length > 0) {
    console.log('All broken links:');
    allErrors.forEach(e => console.log(e));
  }
}

checkAll();