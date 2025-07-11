import {test, expect} from '@playwright/test';
import loginData  from '../config/config.json';

test.beforeEach(async ({ page }) => {
  await page.goto(loginData.baseUrl);
});

test('01-Login Tests',async ({page}) => {
      await page.click('text=Altimetrik SSO');
        await page.fill('input[name="loginfmt"]', loginData.auth.username);
        await page.click('text=Next');
        await page.waitForTimeout(2000); // Wait for the password field to appear
        await page.fill('input[name="UserName"]', loginData.auth.username);
      await page.fill('input[name="Password"]', loginData.auth.password);
      await page.click('text=Sign in');
      console.log('First login attempt completed');
});

test('02-Login Tests',async ({page}) => {
      await page.click('text=Altimetrik SSO');
        await page.fill('input[name="loginfmt"]', loginData.auth.username);
        await page.click('text=Next');
        await page.waitForTimeout(2000); // Wait for the password field to appear
        await page.fill('input[name="UserName"]', loginData.auth.username);
      await page.fill('input[name="Password"]', loginData.auth.password);
      await page.click('text=Sign in');
      console.log('Second login attempt completed');
});