import { chromium } from 'playwright';
import { exec } from 'child_process';

async function run() {
  // Start server
  exec('cd /home/tichapm/dev/baatb/big-al-towing-astro && bunx serve dist -l 4321');
  
  await new Promise(r => setTimeout(r, 3000));
  
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle', timeout: 30000 });
  
  // Check nav display
  const navDisplay = await page.$eval('nav', el => getComputedStyle(el).display);
  console.log('Nav display:', navDisplay);
  
  // Check desktop nav class
  const navClass = await page.$eval('nav', el => el.className);
  console.log('Nav class:', navClass);
  
  await page.screenshot({ path: '/tmp/navbar-fixed.png' });
  console.log('Screenshot saved');
  
  await browser.close();
  process.exit(0);
}

run();