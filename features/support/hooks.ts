import { Before, After,AfterAll, Status } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';
import { CustomWorld } from './world';

let browser: Browser;

Before(async function (this: CustomWorld) {
    if(!browser){
    browser = await chromium.launch({ headless: false });
    }
    const context = await browser.newContext();;
    const page = await context.newPage();

    page.setDefaultTimeout(15000); // ✅ Sets global timeout for actions (like click/fill)
    page.setDefaultNavigationTimeout(30000); // ✅ For navigation-specific waits

    this.context = context;
    this.page = page;   
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    // Optional: take screenshot if scenario failed
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }

  // Cleanup
  await this.page?.close();
  await this.context?.close();
});
AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});