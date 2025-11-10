import { test, expect } from "@playwright/test";
import { SessionFormPage } from "../page-objects/SessionFormPage.js";
import { SessionConfirmationPage } from "../page-objects/SessionConfirmationPage.js";
import path from "node:path";

test("Happy path - successful submission and confirmation with POM", async ({
  page,
}) => {
  const sessionFormPage = new SessionFormPage(page);
  const sessionConfirmationPage = new SessionConfirmationPage(page);

  const filesToAttach = [
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file1.txt"),
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file2.txt"),
  ];
  const submissionData = {
    format: "lightning",
    topics: ["scaling", "integrations"],
    audience: "intermediate",
    files: filesToAttach,
  };

  await sessionFormPage.completeSubmission(submissionData);
  await expect(page).toHaveURL(/session-confirmation.html/);
  await expect(sessionConfirmationPage.successMessage).toHaveText(
    "Thank you for your submission!"
  );

  const summary = await sessionConfirmationPage.getSummaryFields();
  expect(summary.format).toBe("Lightning Talk (15 mins)");
  expect(summary.topics).toBe("Scaling Across Teams, Ecosystem Integrations");
  expect(summary.audience).toBe("Intermediate");
  expect(summary.files).toEqual(["file1.txt, file2.txt"]);
});

test("Negative - validation blocks submission when required data is missing with POM", async ({
  page,
}) => {
  const sessionFormPage = new SessionFormPage(page);

  const submissionData = {
    format: "deep-dive",
    topics: ["visual"],
  };

  await sessionFormPage.navigate();

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("Please select the intended audience level.");
    await dialog.accept();
  });

  await sessionFormPage.selectFormat(submissionData.format);
  await sessionFormPage.setTopics(submissionData.topics);
  await sessionFormPage.acceptCodeOfConduct();
  await sessionFormPage.clickSubmit();

  await expect(page).toHaveURL(/registration-form.html/);
  const heading = await sessionFormPage.getHeadingMessage();
  expect(heading).toBe("Submit Your Playwright Summit Session");
});
