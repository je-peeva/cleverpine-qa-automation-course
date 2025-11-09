import { test, expect } from "@playwright/test";
import { constants } from "../../../constants.js";
import { selectors } from "../../../selectors.js";

test("Test A - Verify user cannot log in with invalid credentials", async ({
  page,
}) => {
  await page.goto(constants.actualLoginUrl);
  await page
    .locator(selectors.usernameEmailInput)
    .fill(constants.invalidUserEmail);
  await page
    .locator(selectors.passwordInput)
    .fill(constants.invalidUserPassword);
  await page.locator(selectors.signInButton).click();

  await expect(page).toHaveURL(constants.expectedLoginUrl);
  await expect(page.locator(selectors.signInButton)).toBeVisible();
  await expect(page.locator(selectors.profileLink)).toBeHidden();
  await expect(page.locator(selectors.toastContainer)).toHaveText(
    constants.toastLoginErrorMessage
  );
});

test("Test B - Verify user cannot log in with missing or partial credentials", async ({
  page,
}) => {
  await page.goto(constants.actualLoginUrl);

  let credentailsList = [
    { username: "", password: "" },
    { username: constants.userEmail, password: "" },
    { username: "", password: constants.userPassword },
  ];

  for (let i = 0; i < credentailsList.length; i++) {
    let currentUsername = credentailsList[i].username;
    let currentpassword = credentailsList[i].password;

    await page.locator(selectors.usernameEmailInput).fill(currentUsername);
    await page.locator(selectors.passwordInput).fill(currentpassword);

    try {
      await page.locator(selectors.signInButton).click({ timeout: 5000 });
    } catch (error) {
      console.log("Sign in button is not available - ", error.message);
    }

    expect(page).toHaveURL(constants.expectedLoginUrl);
    expect(page.locator(selectors.signInButton)).toBeDisabled();
    expect(page.locator(selectors.profileLink)).toBeHidden();
  }
});
