import configData from './config';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.defaultTimeout = configData.timeout;
  }

  async navigateTo(url) {
    try {
      console.log(`Navigating to: ${url}`);
      await this.page.goto(url, { waitUntil: 'load', timeout: this.defaultTimeout });
    } catch (error) {
      await this.captureScreenshot('navigation_error');
      throw new Error(`Failed to navigate to ${url}: ${error.message}`);
    }
  }

  async click(locator, options = {}) {
    try {
      console.log(`Clicking on locator: ${locator}`);
      const element = this.page.locator(locator);
      await element.waitFor({ timeout: this.defaultTimeout });
      await element.click(options);
    } catch (error) {
      await this.captureScreenshot('click_error');
      throw new Error(`Click failed on ${locator}: ${error.message}`);
    }
  }

  async type(locator, value, options = {}) {
    try {
      console.log(`Typing into locator: ${locator} value: ${value}`);
      const element = this.page.locator(locator);
      await element.waitFor({ timeout: this.defaultTimeout });
      await element.fill('');
      await element.type(value, options);
    } catch (error) {
      await this.captureScreenshot('type_error');
      throw new Error(`Type failed on ${locator}: ${error.message}`);
    }
  }

  async isVisible(locator) {
    try {
      return await this.page.locator(locator).isVisible();
    } catch (error) {
      return false;
    }
  }

  async getText(locator) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ timeout: this.defaultTimeout });
      return await element.innerText();
    } catch (error) {
      await this.captureScreenshot('gettext_error');
      throw new Error(`Unable to get text from ${locator}: ${error.message}`);
    }
  }

  async hover(locator) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ timeout: this.defaultTimeout });
      await element.hover();
    } catch (error) {
      await this.captureScreenshot('hover_error');
      throw new Error(`Hover failed on ${locator}: ${error.message}`);
    }
  }

  async doubleClick(locator) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ timeout: this.defaultTimeout });
      await element.dblclick();
    } catch (error) {
      await this.captureScreenshot('dblclick_error');
      throw new Error(`Double click failed on ${locator}: ${error.message}`);
    }
  }

  async pressKey(locator, key) {
    try {
      const element = this.page.locator(locator);
      await element.waitFor({ timeout: this.defaultTimeout });
      await element.press(key);
    } catch (error) {
      await this.captureScreenshot('keypress_error');
      throw new Error(`Key press failed on ${locator} with key ${key}: ${error.message}`);
    }
  }

  async waitForSelector(locator, timeout = this.defaultTimeout) {
    try {
      await this.page.locator(locator).waitFor({ timeout });
    } catch (error) {
      await this.captureScreenshot('waitforselector_error');
      throw new Error(`Wait for selector failed: ${locator}: ${error.message}`);
    }
  }

  async captureScreenshot(name = 'error') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const path = `screenshots/${name}-${timestamp}.png`;
    await this.page.screenshot({ path, fullPage: true });
    console.log(`Screenshot saved: ${path}`);
  }
}


// class BasePage {
//     constructor(page) {
//       this.page = page;
//     }
  
//     async visit(url) {
//       await this.page.goto(url);
//     }
  
//     async click(selector) {
//       await this.page.click(selector);
//     }
  
//     async type(selector, value) {
//       await this.page.fill(selector, value);
//     }
  
//     async isVisible(selector) {
//       return await this.page.isVisible(selector);
//     }
  
//     async getText(selector) {
//       return await this.page.textContent(selector);
//     }
//   }
  
//   module.exports = BasePage;
  


// class BasePage {
//   #page;

//   constructor(page) {
//     this.#page = page;
//   }

//   async #goto(url) {
//     await this.#page.goto(url);
//   }

//   async #click(selector) {
//     await this.#page.click(selector);
//   }

//   async #fill(selector, value) {
//     await this.#page.fill(selector, value);
//   }

//   async #isVisible(selector) {
//     return await this.#page.isVisible(selector);
//   }

//   async #textContent(selector) {
//     return await this.#page.textContent(selector);
//   }

//   // Public wrapper methods (optional)
//   async visit(url) {
//     await this.#goto(url);
//   }

//   async click(selector) {
//     await this.#click(selector);
//   }

//   async type(selector, value) {
//     await this.#fill(selector, value);
//   }

//   async isVisible(selector) {
//     return await this.#isVisible(selector);
//   }

//   async getText(selector) {
//     return await this.#textContent(selector);
//   }
// }

// export default BasePage;
