import { test, expect } from '@playwright/test';

test.describe('Check Character Page', () => {
  test('page exists and has a title', async ({ page }) => {
    await page.goto('/character/batman');

    const title = page.locator('#character-heading span');

    await expect(title).toHaveText('Batman');

    await expect(page).toHaveTitle(/Batman | Superhero/);
  });

  test('should display Batman with a score of 8.3', async ({ page }) => {
    await page.goto('/character/batman');

    const scoreLocator = page.locator('#character-score strong');

    await expect(scoreLocator).toHaveText('8.3');
  });

  test('check is Batman most weakness oponent is Joker', async ({ page }) => {
    await page.goto('/character/batman');

    const weaknessLocator = page.locator('#character-weakness strong');

    await expect(weaknessLocator).toHaveText(/Joker/);
  });

  test('check favourite feature', async ({ page }) => {
    await page.goto('/character/batman');

    await page.click('button#favourite-button');

    await page.waitForTimeout(500);

    const favouriteButton = page.locator('#favourite-button');

    const childDiv = favouriteButton.locator('div');

    const className = await childDiv.getAttribute('class');

    // check button is visible
    await expect(favouriteButton).toBeVisible();

    // check button has class `filled` is added
    await expect(className).toContain('filled');
  });
});
