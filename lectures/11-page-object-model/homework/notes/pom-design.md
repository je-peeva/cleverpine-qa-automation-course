## 1. Repeated Locators (IDs or selectors)

| Locator / Selector   | Count | Where It Appears                                  |
| -------------------- | :---: | ------------------------------------------------- |
| `#session-format`    |   2   | Both tests in `task01-session-submission.spec.js` |
| `#code-of-conduct`   |   2   | Both tests                                        |
| `#submit-proposal`   |   2   | Both tests                                        |
| `#submissions-table` |   3   | All tests in `task02-tables.spec.js`              |
| `#total-count`       |   3   | All tests in `task02-tables.spec.js`              |
| `.pill`              |   3   | Tests B and C                                     |
| `h1`                 |   2   | Tests B and C                                     |

## 2. Repeated Action Sequences

| **Action Sequence**           |
| ----------------------------- |
| Fill and submit session form  |
| Accept code of conduct        |
| Find table row                |
| Handle dialog interactions    |
| Verify total submission count |

## 3. Test Intent in Business Language

| **Test case**                                                              | **Business Intent**                                   |
| -------------------------------------------------------------------------- | ----------------------------------------------------- |
| Happy path – successful submission and confirmation                        | Verify user is registered successfully                |
| Negative path – validation blocks submission when required data is missing | Verify alert appears when required data is missing    |
| Test A: Count and headers                                                  | Verify table structure and number of submissions      |
| Test B: Approve Session - alert dialog + status update                     | Verify table row is updated after approved submission |
| Test C: Decline Session - confirm dialog + row removal                     | Verify table row is removed after declined submission |

## 4. Proposed APIs

### SessionFormPage:

- navigate(),
- selectFormatByValue(formatValue),
- selectFormatByLabel(formatLabel),
- selectFormat(valueOrLabel),
- setTopics(items, shouldCheck = true),
- selectAudience(level),
- uploadFiles(paths),
- acceptCodeOfConduct(),
- clickSubmit(),
- completeSubmission(data),
- getSelectedSessionFormat(),
- getSelectedTopics(),
- getSelectedAudienceLevel(),
- getUploadedFiles()

### SessionConfirmationPage:

- getSuccessMessage(),
- getSessionFormat(),
- getTopics(),
- getAudienceLevel(),
- getUploadedFiles(),
- getSummaryFields()

### SubmissionsTablePage:

- navigate(),
- getRowsCount(),
- getHeaders(),
- getTotalSubmissionsCount(),
- getRowBySpeaker(speakerName),
- readRowDetails(speakerName),
- approveSubmission(speakerName),
- declineSubmission(speakerName),
- getStatus(speakerName),
- getHeading()
