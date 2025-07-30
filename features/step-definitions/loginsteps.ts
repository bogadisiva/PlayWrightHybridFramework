import { Given, When } from '@cucumber/cucumber';
import loginCreden from '../../config/config.json';
import { CustomWorld } from '../support/world';
import { Page } from 'playwright';

Given('I open the login page', async function (this: CustomWorld) {
  const page: Page = this.page;
  await page.goto(loginCreden.baseUrl, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
});

When('Enter the username and password', { timeout: 60000 }, async function (this: CustomWorld) {
  const page: Page = this.page;
  const username = loginCreden.auth.username;
  const password = loginCreden.auth.password;

  console.log('Clicking Altimetrik SSO');
  await page.click('text=Altimetrik SSO');
  console.log('Waiting for login input field to be visible');
  // await page.locator('input[name="loginfmt"]').waitFor({ state: 'visible', timeout: 60000 });
  console.log('Filling in username:', username);
  await page.fill('input[name="loginfmt"]', username);

  await page.click('text=Next');
  await page.locator('input[placeholder="Login ID"]').waitFor({ state: 'visible' });
   // Wait for the password field to appear
  await page.fill('input[placeholder="Login ID"]', username);
  await page.fill('input[name="Password"]', password);
  await page.locator('span[id="submitButton"]').click();
  await page.waitForTimeout(5000);
});
