import { test as base } from '@playwright/test';
import PageManager from '../pages/pageManager';
import { baseURL } from '../configs/config';
import fs from 'fs';


// test.beforeEach(async ({ page }) => {
//   await page.goto(baseURL);
// });

// test.afterEach(async ({ page }, testInfo) => {
//   if (testInfo.status !== testInfo.expectedStatus) {
//     // const screenshotPath = `${config.screenshotPath}${testInfo.title}.png`;
//     // const tracePath = `${config.tracePath}${testInfo.title}.zip`;

//     // fs.mkdirSync(config.screenshotPath, { recursive: true });
//     // fs.mkdirSync(config.tracePath, { recursive: true });

//     // await page.screenshot({ path: screenshotPath, fullPage: true });
//     // await page.tracing.stop({ path: tracePath });
//   }
// });


const { test, expect } = require('@playwright/test');

// Define a fixture for browser, context, and page
test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Store the context and page in a global object if needed across tests
  global.context = context;
  global.page = page;
});

test.afterAll(async () => {
  // Cleanup
  await global.context.close();
});




export default page;
