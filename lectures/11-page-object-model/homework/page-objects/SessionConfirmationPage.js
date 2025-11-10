export class SessionConfirmationPage {
  constructor(page) {
    this.page = page;

    //Locators
    this.successMessage = this.page.locator(".panel h1");
    this.selectedFormat = this.page.locator("#confirm-format");
    this.selectedTopics = this.page.locator("#confirm-topics");
    this.selectedAudience = this.page.locator("#confirm-level");
    this.filesSummary = this.page.locator("#confirm-files");
  }

  //Methods
  async getSuccessMessage() {
    return await this.successMessage.textContent();
  }

  async getSessionFormat() {
    return await this.selectedFormat.textContent();
  }

  async getTopics() {
    return await this.selectedTopics.textContent();
  }

  async getAudienceLevel() {
    return await this.selectedAudience.textContent();
  }

  async getUploadedFiles() {
    return await this.filesSummary.allTextContents();
  }

  async getSummaryFields() {
    return {
      format: await this.getSessionFormat(),
      topics: await this.getTopics(),
      audience: await this.getAudienceLevel(),
      files: await this.getUploadedFiles(),
    };
  }
}
