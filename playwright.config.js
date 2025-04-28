import { defineConfig } from '@playwright/test';
import configData from './config';

export default defineConfig({
  timeout: configData.timeout,
  use: {
    headless: configData.headless,
    browserName: configData.browser,
    baseURL: configData.baseURL,
    viewport: configData.viewport,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});
