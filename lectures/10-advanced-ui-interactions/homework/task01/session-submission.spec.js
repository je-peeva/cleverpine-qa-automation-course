import { test, expect } from "@playwright/test";
import { getLocalUrl } from "./getLocalUrl.js";
import path from "node:path";

const formUrl = getLocalUrl("../pages/registration-form.html", import.meta.url);

test("Happy path - successful submission and confirmation", async ({
  page,
}) => {
  await page.goto(formUrl);
  await page.locator("#session-format").selectOption("lightning");

  const checkboxes = ["#topic-scaling", "#topic-integrations"];

  for (const checkbox of checkboxes) {
    await page.locator(checkbox).check();
  }

  await page.locator("#level-intermediate").check();
  await page.locator("#code-of-conduct").check();

  const filestoAttach = [
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file1.txt"),
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file2.txt"),
  ];
  await page.locator("#materials").setInputFiles(filestoAttach);

  await page.locator("#submit-proposal").click();
  await expect(page).toHaveURL(/session-confirmation.html/);
  await expect(page.locator(".panel h1")).toHaveText(
    "Thank you for your submission!"
  );
  await expect(page.locator("#confirm-format")).toHaveText(
    "Lightning Talk (15 mins)"
  );
  await expect(page.locator("#confirm-topics")).toHaveText(
    "Scaling Across Teams, Ecosystem Integrations"
  );
  await expect(page.locator("#confirm-level")).toHaveText("Intermediate");
  await expect(page.locator("#confirm-files")).toHaveText(
    "file1.txt, file2.txt"
  );
});

test("Negative - validation blocks submission when required data is missing", async ({
  page,
}) => {
  await page.goto(formUrl);

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("Please select the intended audience level.");
    await dialog.accept();
  });

  await page.locator("#session-format").selectOption("deep-dive");
  await page.locator("#topic-visual").check();
  await page.locator("#code-of-conduct").click();
  await page.locator("#submit-proposal").click();

  await expect(page).toHaveURL(/registration-form.html/);
  await expect(page.locator(".card h1")).toHaveText(
    "Submit Your Playwright Summit Session"
  );
});
