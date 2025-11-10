export class SubmissionsTablePage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../10-advanced-ui-interactions/homework/pages/table-page.html",
      import.meta.url
    ).href;

    //Locators
    this.heading = this.page.locator("h1");
    this.tableElement = (row, colIndex) =>
      row.locator(`td:nth-child(${colIndex})`);
    this.headerCells = this.page.locator("#submissions-table thead > tr > th");
    this.tbodyRows = this.page.locator("#submissions-table tbody > tr");
    this.rowBySpeakerName = (speakerName) =>
      this.page.locator("#submissions-table tbody tr", {
        hasText: speakerName,
      });
    this.totalCount = this.page.locator("#total-count");
    this.approveButton = (row) => row.locator(".btn-approve");
    this.declineButton = (row) => row.locator(".btn-decline");
    this.statusValue = (row) => row.locator("td:nth-child(6) > span.pill");
  }

  //Methods
  async navigate() {
    await this.page.goto(this.url);
  }

  async getRowsCount() {
    return await this.tbodyRows.count();
  }

  async getHeaders() {
    return (await this.headerCells.allTextContents()).map((text) =>
      text.trim()
    );
  }

  async getTotalSubmissionsCount() {
    return Number(await this.totalCount.textContent());
  }

  async getRowBySpeaker(speakerName) {
    return await this.rowBySpeakerName(speakerName);
  }

  async readRowDetails(speakerName) {
    const speakerNameRow = await this.getRowBySpeaker(speakerName);

    const speakerNameSummary = {
      Speaker: await this.tableElement(speakerNameRow, 1).textContent(),
      SessionFormat: await this.tableElement(speakerNameRow, 2).textContent(),
      Topics: await speakerNameRow
        .locator("td:nth-child(3) .topic")
        .allTextContents(),
      AudienceLevel: await speakerNameRow
        .locator("td:nth-child(4) .pill")
        .textContent(),
      Files: await this.tableElement(speakerNameRow, 5).textContent(),
      Status: await speakerNameRow
        .locator("td:nth-child(6) > span.pill")
        .textContent(),
      Actions: (
        await speakerNameRow.locator("td:nth-child(7) .btn").allTextContents()
      ).map((action) => action.trim()),
    };

    return speakerNameSummary;
  }

  async approveSubmission(speakerName) {
    const speakerNameRow = await this.getRowBySpeaker(speakerName);
    await this.approveButton(speakerNameRow).click();
  }

  async declineSubmission(speakerName) {
    const speakerNameRow = await this.getRowBySpeaker(speakerName);
    await this.declineButton(speakerNameRow).click();
  }

  async getStatus(speakerName) {
    const speakerNameRow = await this.getRowBySpeaker(speakerName);
    return await this.statusValue(speakerNameRow).textContent();
  }

  async getHeading() {
    return await this.heading.textContent();
  }
}
