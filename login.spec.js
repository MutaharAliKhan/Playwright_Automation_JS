import { test } from '../hooks.js';
import { pageManager } from '../pageManager';

test('Login test', async ({ page }) => {
  const pages = pageManager(page);
  await pages.LoginPage.login('user', 'pass');
});
