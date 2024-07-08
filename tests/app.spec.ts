import { test, expect } from '@playwright/test';

test('increment count', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle('Vite + Svelte + TS');

  const counter = page.getByRole('button', { name: /count is / });

  await expect(counter).toHaveText(/ is 0/);
  await counter.click();
  await expect(counter).toHaveText(/ is 1/);
});
