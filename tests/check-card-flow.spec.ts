import { test, expect } from '@playwright/test';

test.describe('Check card flow E2E', () => {

  test('load dishes → render → open dish → close to dishes → error on invalid id', async ({ page }) => {
    // 1. Load dishes page
    await page.goto('http://localhost:4200/dishes');

    const cards = page.locator('app-card');
    await expect(cards.first()).toBeVisible();

    // 2. Check first card title
    const firstCardTitle = await cards.nth(0).locator('.title').textContent();
    expect(firstCardTitle).not.toBeNull();

    // 3. Open dish details
    await cards.nth(0).locator('.view-recipe-button').click();

    const detailsTitle = page.locator('.card-details .title').first();
    await expect(detailsTitle).toBeVisible();
    await expect(detailsTitle).toContainText(firstCardTitle!.trim());

    // 4. Close dish details and return to dishes list
    await page.locator('.close-button').click();
    await expect(page).toHaveURL(/\/dishes$/);

    // 5. Visit invalid dish id
    await page.goto('http://localhost:4200/dishes/not-existing-id');
    await expect(page.locator('.message')).toHaveText('Could not find');
    await expect(page).toHaveURL(/\/dishes\/not-existing-id$/);
  });
});
