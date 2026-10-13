import { chromium } from 'playwright';

async function diagnoseNavbar() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Get exact computed style
  const navStyles = await page.$eval('nav', el => {
    const cs = getComputedStyle(el);
    return {
      display: cs.display,
      visibility: cs.visibility,
      opacity: cs.opacity,
      position: cs.position,
      width: cs.width,
      height: cs.height,
    };
  });
  console.log('Nav computed styles:', navStyles);
  
  // Check which classes have their CSS rules applied
  const hasHiddenClass = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    return nav.classList.contains('hidden');
  });
  console.log('Has .hidden class:', hasHiddenClass);
  
  // Test: Remove hidden class via JS and see if nav appears
  await page.evaluate(() => {
    const nav = document.querySelector('nav');
    nav.classList.remove('hidden');
  });
  
  const navAfterRemove = await page.$eval('nav', el => getComputedStyle(el).display);
  console.log('Nav display after removing .hidden:', navAfterRemove);
  
  await page.screenshot({ path: '/tmp/navbar-no-hidden.png' });
  console.log('Screenshot saved');
  
  await browser.close();
}

diagnoseNavbar().catch(console.error);