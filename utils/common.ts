import config from '../config/config.json';
console.log('Base URL:', config.baseUrl);
console.log('user name:', config.auth.username);
console.log('Password:', config.auth.password);
import { Page } from 'playwright';

export class Util {
page: Page;
constructor(page: Page) {
    this.page = page;
}
     async waitAndCheckVisible(selector: string, timeout = 60000): Promise<boolean> {
    try {
        await this.page.locator(selector).waitFor({ state: 'visible', timeout });
        return await this.page.locator(selector).isVisible();
    } catch (error) {
        console.error(`Element ${selector} not visible within ${timeout}ms`);
        return false;
    }
}
}
