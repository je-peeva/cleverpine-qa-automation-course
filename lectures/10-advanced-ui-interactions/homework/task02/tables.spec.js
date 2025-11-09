import { test, expect } from "@playwright/test";
import { getLocalUrl } from "../task01/getLocalUrl.js";

const formUrl = getLocalUrl("../pages/table-page.html", import.meta.url);

test("Test A: Count and headers", async ({ page }) => {
  await page.goto(formUrl);
  const rowsCount = await page.locator("#submissions-table tbody > tr").count();
  expect(rowsCount).toBe(5);

  const headers = page.locator("#submissions-table thead > tr > th");
  const headerTexts = (await headers.allTextContents()).map((text) =>
    text.trim()
  );

  expect(headerTexts).toEqual([
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ]);

  const totalSubmissionsValue = await page
    .locator("#total-count")
    .textContent();
  expect(Number(totalSubmissionsValue)).toBe(5);
});

test("Test B: Approve Session - alert dialog + status update", async ({
  page,
}) => {
  await page.goto(formUrl);

  const initialTotalSubmissionsCount = Number(
    await page.locator("#total-count").textContent()
  );
  expect(initialTotalSubmissionsCount).toBe(5);

  const johnRow = page.locator("#submissions-table tbody tr", {
    hasText: "John Doe",
  });

  const johnRowSummary = {
    Speaker: await johnRow.locator("td:nth-child(1)").textContent(),
    SessionFormat: await johnRow.locator("td:nth-child(2)").textContent(),
    Topics: await johnRow.locator("td:nth-child(3) .topic").allTextContents(),
    AudienceLevel: await johnRow.locator("td:nth-child(4) .pill").textContent(),
    Files: await johnRow.locator("td:nth-child(5)").textContent(),
    Status: await johnRow.locator("td:nth-child(6) > span.pill").textContent(),
    Actions: (await johnRow.locator("td:nth-child(7) .btn").allTextContents())
      //remove new rows
      .map((action) => action.trim()),
  };

  console.log(johnRowSummary);

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Approved submission for John Doe.");
    await dialog.accept();
  });

  await johnRow.locator(".btn-approve").click();

  await expect(page).toHaveURL(/table-page.html/);
  await expect(page.locator("h1")).toHaveText("Submitted Sessions");
  await expect(johnRow).toBeVisible();

  const newStatusJohn = johnRow.locator("td:nth-child(6) > span.pill");
  await expect(newStatusJohn).toHaveText("Approved");

  const currentTotalSubmissionsCount = Number(
    await page.locator("#total-count").textContent()
  );
  expect(currentTotalSubmissionsCount).toBe(initialTotalSubmissionsCount);
});

test("Test C: Decline Session - confirm dialog + row removal", async ({
  page,
}) => {
  await page.goto(formUrl);

  const initialTotalSubmissionsCount = Number(
    await page.locator("#total-count").textContent()
  );
  expect(initialTotalSubmissionsCount).toBe(5);

  const janeRow = page.locator("#submissions-table tbody tr", {
    hasText: "Jane Smith",
  });

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain(
      "Are you sure you want to decline the submission for Jane Smith?"
    );
    await dialog.accept();
  });

  await janeRow.locator(".btn-decline").click();
  await expect(janeRow).not.toBeVisible();

  const currentTotalSubmissionsCount = Number(
    await page.locator("#total-count").textContent()
  );
  expect(currentTotalSubmissionsCount).toBe(initialTotalSubmissionsCount - 1);
});
