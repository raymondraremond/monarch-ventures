const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log("Navigating to contact page...");
  await page.goto('http://localhost:8082/contact');

  console.log("Taking initial screenshot...");
  await page.screenshot({ path: 'screenshot-before.png' });

  console.log("Typing into name field...");
  try {
    await page.fill('input[name="name"]', 'John Doe');
    console.log("Name filled.");
  } catch (err) {
    console.error("Error on name:", err.message);
  }

  console.log("Taking screenshot after name...");
  await page.screenshot({ path: 'screenshot-after-name.png' });

  console.log("Typing into message field...");
  try {
    const startTime = Date.now();
    await page.type('textarea[name="message"]', 'This is a test message.', { delay: 50 });
    console.log("Message typed in", Date.now() - startTime, "ms");
  } catch (err) {
    console.error("Error on message:", err.message);
  }

  await browser.close();
})();
