export class SessionFormPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../10-advanced-ui-interactions/homework/pages/registration-form.html",
      import.meta.url
    ).href;

    //Locators
    this.headingMessage = this.page.locator(".card h1");
    this.sessionDropdown = this.page.locator("#session-format");
    this.topicsCheckboxes = this.page.locator(
      "#topic-options input[type='checkbox']"
    );
    this.audienceRadioGroup = this.page.locator('[role = "radiogroup"]');
    this.codeOfConductCheckbox = this.page.locator("#code-of-conduct");
    this.attachmentInput = this.page.locator("#materials");
    this.submitButton = this.page.locator("#submit-proposal");
  }

  //Methods
  async navigate() {
    await this.page.goto(this.url);
  }

  async getHeadingMessage() {
    return await this.headingMessage.textContent();
  }

  async selectFormatByValue(formatValue) {
    await this.sessionDropdown.selectOption({ value: formatValue });
  }

  async selectFormatByLabel(formatLabel) {
    await this.sessionDropdown.selectOption({ label: formatLabel });
  }

  async selectFormat(valueOrLabel) {
    const valueOption = await this.sessionDropdown.locator(
      `option[value='${valueOrLabel}']`
    );
    if ((await valueOption.count()) > 0) {
      await this.sessionDropdown.selectOption({ value: valueOrLabel });
    } else {
      const labelOption = await this.sessionDropdown.locator(
        `option:has-text("${valueOrLabel}")`
      );
      if ((await labelOption.count()) > 0) {
        await this.sessionDropdown.selectOption({ label: valueOrLabel });
      } else {
        throw new Error(`No option found with: "${valueOrLabel}"`);
      }
    }
  }

  // async selectTopics(topicsArray) {
  //   for (const topic of topicsArray) {
  //     const checkbox = this.topicsCheckboxes.locator(`[value='${topic}']`);
  //     await checkbox.check();
  //   }
  // }

  async setTopics(items, shouldCheck = true) {
    for (const item of items) {
      //const checkbox = this.topicsCheckboxes.locator(`[value='${item}']`);
      const checkbox = this.page.locator(
        `#topic-options input[type='checkbox'][value='${item}']`
      );
      const isChecked = await checkbox.isChecked();

      if (shouldCheck && !isChecked) {
        await checkbox.check();
      } else if (!shouldCheck && isChecked) {
        await checkbox.uncheck();
      }
    }
  }

  async selectAudience(level) {
    const audienceLevel = this.audienceRadioGroup.locator(
      `input[value='${level}']`
    );
    await audienceLevel.check();
  }

  async uploadFiles(paths) {
    this.attachmentInput.setInputFiles(paths);
  }

  async acceptCodeOfConduct() {
    await this.codeOfConductCheckbox.check();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async completeSubmission(data) {
    await this.navigate();
    await this.selectFormat(data.format);
    await this.setTopics(data.topics, true);
    await this.selectAudience(data.audience);

    if (data.files) {
      await this.uploadFiles(data.files);
    }

    await this.acceptCodeOfConduct();
    await this.clickSubmit();
  }

  // Unused methods
  // async getSelectedSessionFormat() {}
  // async getSelectedTopics() {}
  // async getSelectedAudienceLevel() {}
  // async getUploadedFiles() {}
}
