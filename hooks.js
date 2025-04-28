import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    console.log('beforeEach - setup');
    await use(page);
    console.log('afterEach - teardown');
  },
});

test.beforeAll(async () => {
  console.log('>>> Global Setup - beforeAll');
  // Do any global setup like DB connection, report dir cleanup etc.
});

test.afterAll(async () => {
  console.log('>>> Global Teardown - afterAll');
  // Cleanup resources, DB disconnect, etc.
});
