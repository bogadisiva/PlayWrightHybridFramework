import {defineConfig} from '@playwright/test';

export default defineConfig({
  
  timeout: 60000,
  use:{
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
},
retries:1,
reporter: [['html', { open: 'never' }], ['list']], 
});
