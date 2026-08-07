import { chromium } from 'playwright';

const baseUrl = 'https://allhourstowingmaconga.com';

async function checkPageLinks(page, path, name) {
  await page.goto(baseUrl + path, { waitUntil: 'domcontentloaded', timeout: 15000 });
  const links = await page.locator('a[href^="/"]').evaluateAll(els => 
    els.map(el => el.getAttribute('href')).filter(h => h && !h.startsWith('//') && !h.startsWith('http') && !h.startsWith('tel:') && !h.startsWith('mailto:'))
  );
  
  const errors = [];
  const checked = new Set();
  
  for (const link of links) {
    if (checked.has(link)) continue;
    checked.add(link);
    
    try {
      const response = await page.goto(baseUrl + link, { waitUntil: 'domcontentloaded', timeout: 15000 });
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
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const allErrors = [];
  
  // Check homepage
  console.log('Checking ' + baseUrl);
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
  
  // Check about
  const aboutErrors = await checkPageLinks(page, '/about', 'About');
  allErrors.push(...aboutErrors);
  
  await browser.close();
  
  console.log('\n=== Total broken: ' + allErrors.length + ' ===');
  if (allErrors.length > 0) {
    console.log('All broken links:');
    [...new Set(allErrors)].forEach(e => console.log(e));
  } else {
    console.log('All links working!');
  }
}

checkAll();