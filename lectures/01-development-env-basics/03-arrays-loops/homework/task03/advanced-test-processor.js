export { analyzeTestResults };

//Separate test cases based on their final state and execution time
function analyzeTestResults(testNames, testResults, executionTimes) {
  let criticalFailures = [];
  let slowTests = [];
  let quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    if (
      testResults[i] === "FAIL" &&
      testNames[i].toLowerCase().includes("login")
    ) {
      criticalFailures.push(testNames[i]);
    } else if (testResults[i] === "PASS" && executionTimes[i] > 2000) {
      slowTests.push(testNames[i]);
    } else if (testResults[i] === "PASS" && executionTimes[i] < 500) {
      quickPasses.push(testNames[i]);
    }

    console.log(
      `Test case: ${testNames[i]} | Result: ${testResults[i]} | Execution time: ${executionTimes[i]}`
    );
  }

  console.log({
    "Critical failures": criticalFailures.length,
    "Slow tests": slowTests.length,
    "Quick passes": quickPasses.length,
  });

  return [criticalFailures, slowTests, quickPasses];
}

// analyzeTestResults(
//   ["case1_sign_up", "case2_login", "case3_logout"],
//   ["PASS", "FAIL", "PASS"],
//   [200, 300, 5000]
// );

//Return array of all combination between test cases, environemnts and failure rate
function processTestEnvironments(testCases, environments) {
  let environmentResults = [];

  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < environments.length; j++) {
      let failureRate = 0.1;

      if (environments[j] === "production") {
        failureRate = 0.3;
      }

      // failureRate = status?!
      let result = `${testCases[i]} | ${environments[j]} | ${failureRate}`;
      environmentResults.push(result);

      console.log("Precessing:", result);
    }
  }

  return environmentResults;
}

//processTestEnvironments(["case1", "case2"], ["production", "dev"]);

//Return new arrays for valid, invalid and fixable users based on validation of email, password and age
function validateTestDataQuality(emails, passwords, ages) {
  let validUsers = [];
  let invalidUsers = [];
  let fixableUsers = [];

  for (let i = 0; i < emails.length; i++) {
    let isValidEmail = emails[i].includes("@") && emails[i].includes(".");
    let isValidPassword = passwords[i].length >= 8;
    let isValidAge = ages[i] >= 18 && ages[i] <= 100;

    let failedValidations = 0;

    if (!isValidEmail) failedValidations++;
    if (!isValidPassword) failedValidations++;
    if (!isValidAge) failedValidations++;

    if (failedValidations === 0) {
      validUsers.push(emails[i]);
      console.log(`Valid user: ${emails[i]} `);
    } else if (failedValidations === 1) {
      fixableUsers.push(emails[i]);
      console.log(`Fixable user: ${emails[i]}`);
    } else {
      invalidUsers.push(emails[i]);
      console.log(`Invalid user: ${emails[i]}`);
    }
  }

  return [validUsers, invalidUsers, fixableUsers];
}

// let emails = [
//   "john.doe@example.com",
//   "jane.doe@example",
//   "bob.smith123@example.com",
//   "alice@exampleCom",
// ];
// let passwords = ["password123", "1234", "bobPassword123", "short"];
// let ages = [25, 30, 17, 45];

// validateTestDataQuality(emails, passwords, ages);

//Return the index of first critical test case or -1 if none was found
function findFirstCriticalError(testResults, errorMessages) {
  let criticalErrorIndex = -1;

  for (let i = 0; i < testResults.length; i++) {
    if (
      testResults[i] === "FAIL" &&
      errorMessages[i].toLowerCase().includes("critical")
    ) {
      criticalErrorIndex = i;
      break;
    }
  }

  if (criticalErrorIndex !== -1) {
    console.log(
      `Critical error found at index: ${criticalErrorIndex} - ${errorMessages[criticalErrorIndex]}`
    );
  }

  return criticalErrorIndex;
}

// let testResults = ["PASS", "FAIL", "FAIL", "PASS"];
// let errorMessages = [
//   "No error",
//   "Critical failure: system crash",
//   "Minor issue",
//   "No error",
// ];

// findFirstCriticalError(testResults, errorMessages);

//Return array with tests on passed state
function processValidTestsOnly(testNames, testStatuses) {
  let processedTests = [];

  for (let i = 0; i < testNames.length; i++) {
    if (
      testStatuses[i].toUpperCase() === "SKIP" ||
      testStatuses[i].toUpperCase() === "INVALID"
    ) {
      console.log(
        `Skipped test ${testNames[i]} with status ${testStatuses[i]}.`
      );
      continue;
    }
    processedTests.push(testNames[i]);
    console.log(
      `Processed case ${testNames[i]} with status ${testStatuses[i]}.`
    );
  }

  return processedTests;
}

// let testNames = ["case1", "case2", "case3", "case4", "case5"];
// let testStatuses = ["PASS", "FAIL", "SKIP", "PASS", "invalid"];
// processValidTestsOnly(testNames, testStatuses);

//Return array of counts of all passed and failed test and total number of test cases. Validates if max failure count has been reached
function monitorTestExecutionWithLimits(testQueue, maxFailures) {
  let failureCount = 0;
  let processedCount = 0;

  while (testQueue.length > 0) {
    testQueue.pop();
    let status = Math.random() < 0.5 ? "PASS" : "FAIL";

    if (status.toUpperCase() === "FAIL") {
      failureCount++;

      if (failureCount >= maxFailures) {
        console.log("Max failures reached.");
        break;
      }

      processedCount++;

      console.log(`Processed: ${processedCount} | Failures: ${failureCount}`);
    }
  }
  return [processedCount, failureCount, testQueue.length];
}

// let testNames = ["case1", "case2", "case3", "case4", "case5"];
// let maxFailures = 5;

// monitorTestExecutionWithLimits(testNames, maxFailures);

// ???
function executeComprehensiveTestSuite(testCases, environments, userRoles) {
  let passedResults = [];
  let failedResults = [];
  let skippedResults = [];
  let criticalResults = [];

  for (let i = 0; i < testCases.length; i++) {
    for (let j = 0; j < environments.length; j++) {
      for (let k = 0; k < userRoles.length; k++) {
        let testCase = testCases[i];
        let environment = environments[j];
        let userRole = userRoles[k];

        //complex conditional logic???
      }
    }
  }
  return [passedResults, failedResults, skippedResults, criticalResults];
}

// ???
function generateDetailedTestReport(
  resultNames,
  resultStatuses,
  resultTimes,
  resultEnvironments
) {
  let passedTestsCount = 0;
  let failedTestsCount = 0;
  let skippedTestsCount = 0;

  for (let i = 0; i < resultStatuses.length; i++) {
    if (resultStatuses[i] === "PASS") {
      passedTestsCount++;
    } else if (resultStatuses[i] === "FAIL") {
      failedTestsCount++;
    } else if (resultStatuses[i] === "SKIP") {
      skippedTestsCount++;
    }
  }

  //failure patterns??
  //performance metrics?
  //env issues?
}
