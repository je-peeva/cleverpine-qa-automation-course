import { test, expect } from "@playwright/test";
import { constants } from "../../../constants.js";
import { selectors } from "../../../selectors.js";

test("Verify login navigation", async ({ page }) => {
  await page.goto(constants.actualBaseUrl);
  await expect(page).toHaveURL(constants.expectedBaseUrl);

  await page.click(selectors.loginLink);
  await expect(page).toHaveURL(constants.expectedLoginUrl);
});
