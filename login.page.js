import { BasePage } from './base.page';
import configData from './config';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username, password) {
    await this.page.goto(configData.baseURL)
    // await this.usernameInput.fill(username);
    // await this.passwordInput.fill(password);
    // await this.loginButton.click();
  }
}
