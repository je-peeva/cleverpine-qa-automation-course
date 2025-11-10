import { test, expect } from "@playwright/test";
import { SubmissionsTablePage } from "../page-objects/SubmissionsTablePage.js";

test("Test A: Count and headers with POM", async ({ page }) => {
  const tablePage = new SubmissionsTablePage(page);

  await tablePage.navigate();
  const rowsCount = await tablePage.getRowsCount();
  expect(rowsCount).toBe(5);

  const tableHeaders = await tablePage.getHeaders();
  expect(tableHeaders).toEqual([
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ]);

  const totalSubmissionCount = await tablePage.getTotalSubmissionsCount();
  expect(totalSubmissionCount).toBe(5);
});

test("Test B: Approve Session - alert dialog + status update with POM", async ({
  page,
}) => {
  const tablePage = new SubmissionsTablePage(page);

  await tablePage.navigate();

  const initialTotalSubmissionsCount =
    await tablePage.getTotalSubmissionsCount();
  expect(initialTotalSubmissionsCount).toBe(5);

  const johnRow = await tablePage.getRowBySpeaker("John Doe");
  const johnRowSummary = await tablePage.readRowDetails("John Doe");

  console.log(johnRowSummary);

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Approved submission for John Doe.");
    await dialog.accept();
  });

  await tablePage.approveSubmission("John Doe");
  await expect(page).toHaveURL(/table-page.html/);
  expect(await tablePage.getHeading()).toBe("Submitted Sessions");
  await expect(johnRow).toBeVisible();

  const newStatusJohn = await tablePage.getStatus("John Doe");
  expect(newStatusJohn).toBe("Approved");

  const currentTotalSubmissionsCount =
    await tablePage.getTotalSubmissionsCount();
  expect(currentTotalSubmissionsCount).toBe(initialTotalSubmissionsCount);
});

test("Test C: Decline Session - confirm dialog + row removal with POM", async ({
  page,
}) => {
  const tablePage = new SubmissionsTablePage(page);

  await tablePage.navigate();

  const initialTotalSubmissionsCount =
    await tablePage.getTotalSubmissionsCount();
  expect(initialTotalSubmissionsCount).toBe(5);

  const janeRow = await tablePage.getRowBySpeaker("Jane Smith");

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain(
      "Are you sure you want to decline the submission for Jane Smith?"
    );
    await dialog.accept();
  });

  await tablePage.declineSubmission("Jane Smith");
  await expect(janeRow).not.toBeVisible();

  const currentTotalSubmissionsCount =
    await tablePage.getTotalSubmissionsCount();
  expect(currentTotalSubmissionsCount).toBe(initialTotalSubmissionsCount - 1);
});
