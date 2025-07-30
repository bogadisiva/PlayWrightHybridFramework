import {test} from '@playwright/test';
import loginData  from '../config/config.json';
// import { LoginPage } from '../pages/login.page';

// let loginPage!: LoginPage;
  test.beforeEach(async () => {

    // await loginPage.navigateToLoginPage(loginData.baseUrl);
  });

test.afterEach(async ({ page }) => {
  page.close();

  console.log('Test completed');
})


test('01-Login Tests',async ({page}) => {
        // await loginPage.clickAltimetrikSSO();
        let username = loginData.auth.username;
        let password = loginData.auth.password; 
        // await loginPage.fillUsername(username);
        // await loginPage.clickNext();
        page.waitForTimeout(2000); // Wait for the password field to appear
        // await loginPage.fillPassword(password);
        // await loginPage.clickSignIn();
        console.log('First login attempt completed');

      //   await page.fill('input[name="loginfmt"]', loginData.auth.username);
      //   await page.click('text=Next');
        
      //   await page.fill('input[name="UserName"]', loginData.auth.username);
      // await page.fill('input[name="Password"]', loginData.auth.password);
      // await page.click('text=Sign in');
      // console.log('First login attempt completed');
  
});

// test('02-Login Tests',async ({page}) => {
//       await page.click('text=Altimetrik SSO');
//         await page.fill('input[name="loginfmt"]', loginData.auth.username);
//         await page.click('text=Next');
//         await page.waitForTimeout(2000); // Wait for the password field to appear
//         await page.fill('input[name="UserName"]', loginData.auth.username);
//       await page.fill('input[name="Password"]', loginData.auth.password);
//       await page.click('text=Sign in');
//       console.log('Second login attempt completed');
// });