import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  console.log("Navigating to http://localhost:8082/contact...");
  await page.goto('http://localhost:8082/contact', { waitUntil: 'networkidle0' });

  console.log("Typing into the name field...");
  const startTime = Date.now();
  try {
    await page.type('input[name="name"]', 'Hello World', { delay: 100 });
    console.log("Typing name completed in", Date.now() - startTime, "ms");
  } catch (err) {
    console.error("Error typing name:", err);
  }

  console.log("Typing into the message field...");
  const msgStartTime = Date.now();
  try {
    await page.type('textarea[name="message"]', 'This is a test message to see if it hangs. We are typing quite a few characters.', { delay: 100 });
    console.log("Typing message completed in", Date.now() - msgStartTime, "ms");
  } catch (err) {
    console.error("Error typing message:", err);
  }

  await browser.close();
  console.log("Test finished.");
})();
