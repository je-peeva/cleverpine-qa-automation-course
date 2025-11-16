import { test, expect } from "@playwright/test";
import { validUsers, invalidUsers } from "../support/userData.js";

const loginUrl = new URL("../../pages/login.html", import.meta.url).href;

validUsers.forEach((userData) =>
  test(`login succeeds: ${userData.username}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(userData.username);
    await page.locator("#password").fill(userData.password);
    await page.locator("#login-button").click();

    await expect(page.locator("#success-message")).toBeVisible();
    await expect(page.locator("#success-message")).toHaveText(
      `Welcome ${userData.username}`
    );
  })
);

invalidUsers.forEach((userData) =>
  test(`login fails: ${userData.description}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(userData.username);
    await page.locator("#password").fill(userData.password);
    await page.locator("#login-button").click();

    const errorMessage = page.locator("#error-message");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(
      new RegExp(
        /Please enter both username and password|Invalid username or password/
      )
    );
  })
);
