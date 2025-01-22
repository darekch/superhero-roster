import { test, expect } from '@playwright/test';

test.describe('Check Characters List', () => {
  test('check wether all superheroes exist after filtering', async ({
    page,
  }) => {
    await page.goto('/characters');

    await page.click('input#filter-type-heroes');

    await page.waitForTimeout(500);

    const filteredByTypeList = page.locator('#characters-list ul');

    const filteredByTypeListItems = page.locator('#characters-list ul li');

    // check list is visible
    await expect(filteredByTypeList).toBeVisible();

    // check is it 7 heroes items
    await expect(filteredByTypeListItems).toHaveCount(7);
  });

  test('check wether all villains exist after filtering', async ({ page }) => {
    await page.goto('/characters');

    await page.click('input#filter-type-villains');

    await page.waitForTimeout(500);

    const filteredByTypeList = page.locator('#characters-list ul');

    const filteredByTypeListItems = page.locator('#characters-list ul li');

    // check list is visible
    await expect(filteredByTypeList).toBeVisible();

    // check is it 4 villains items
    await expect(filteredByTypeListItems).toHaveCount(4);
  });
});
