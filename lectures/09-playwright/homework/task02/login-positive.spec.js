import { test, expect } from "@playwright/test";
import { constants } from "../../../constants.js";
import { selectors } from "../../../selectors.js";

test("Verify successful profile navigation", async ({ page }) => {
  await page.goto(constants.actualBaseUrl);

  await page.click(selectors.loginLink);
  await expect(page).toHaveURL(constants.expectedLoginUrl);
  await expect(page.locator(selectors.signInButton)).toBeVisible();

  await page.locator(selectors.usernameEmailInput).fill(constants.userEmail);
  await page.locator(selectors.passwordInput).fill(constants.userPassword);
  await page.locator(selectors.signInButton).click();

  await expect(page.locator(selectors.profileLink)).toBeVisible();
  await page.locator(selectors.profileLink).click();

  await expect(page.locator(selectors.toastContainer)).toHaveText(
    constants.toastLoginSuccessfulMessage
  );
  await expect(page).toHaveURL(/\/users\/\d+$/);
  await expect(page.locator(selectors.profileHeading)).toBeVisible();
  await expect(page.locator(selectors.profileHeading)).toHaveText(
    constants.username
  );
});
