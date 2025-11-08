/**
 * Task 3: Advanced Array & Loop Integration with Conditionals
 *
 * Objective: Integrate arrays, loops, and conditional logic to build sophisticated
 * test processing systems that handle complex scenarios.
 */

// --- Step 3.1: Conditionals Inside Loops for Complex Processing ---

/**
 * Analyzes test results by categorizing them based on status and performance.
 * This demonstrates using a single loop to process multiple related arrays and
 * applying complex conditional logic (if/else if/else).
 * @param {string[]} testNames - Array of test case names.
 * @param {string[]} testResults - Array of test results ('PASS', 'FAIL', 'SKIP').
 * @param {number[]} executionTimes - Array of execution times in ms.
 * @returns {Array[]} [criticalIssues, slowTests, successfulTests]
 */
function analyzeTestResults(testNames, testResults, executionTimes) {
  console.log("\n--- Analyzing Test Results (Complex Conditionals) ---");
  const criticalFailures = [];
  const slowTests = [];
  const quickPasses = [];

  for (let i = 0; i < testNames.length; i++) {
    const name = testNames[i];
    const result = testResults[i];
    const time = executionTimes[i];

    console.log(`Analyzing test ${i + 1}: "${name}" - ${result}, ${time}ms`);

    if (result === "FAIL" && name.toLowerCase().includes("login")) {
      criticalFailures.push(name);
      console.log(`  categorized as CRITICAL FAILURE`);
    } else if (result === "PASS" && time > 2000) {
      slowTests.push(name);
      console.log(`  categorized as SLOW TEST`);
    } else if (result === "PASS" && time < 500) {
      quickPasses.push(name);
      console.log(`  categorized as QUICK PASS`);
    }
  }

  console.log(
    `Analysis Complete: ${criticalFailures.length} critical, ${slowTests.length} slow, ${quickPasses.length} quick passes.`
  );
  return [criticalFailures, slowTests, quickPasses];
}

/**
 * Simulates running a set of test cases across multiple environments.
 * This demonstrates nested loops, where an outer loop iterates through
 * environments and an inner loop runs all test cases for each environment.
 * @param {string[]} testCases - Array of test case names.
 * @param {string[]} environments - Array of environment names.
 * @returns {string[]} An array of strings describing each test run.
 */
function processTestEnvironments(testCases, environments) {
  console.log("\n--- Processing Test Environments (Nested Loops) ---");
  const environmentResults = [];

  // Outer loop: iterates through each environment.
  for (let i = 0; i < environments.length; i++) {
    const env = environments[i];
    console.log(
      `\n--- Starting tests in [${env.toUpperCase()}] environment ---`
    );

    // Inner loop: iterates through each test case for the current environment.
    for (let j = 0; j < testCases.length; j++) {
      const testCase = testCases[j];
      const baseFailRate = env.toLowerCase() === "production" ? 0.4 : 0.2;
      const status = Math.random() < baseFailRate ? "FAIL" : "PASS";
      const resultString = `${testCase}|${env}|${status}`;
      console.log(resultString);
      environmentResults.push(resultString);
    }
  }

  return environmentResults;
}

/**
 * Validates the quality of user data based on multiple criteria.
 * @param {string[]} emails
 * @param {string[]} passwords
 * @param {number[]} ages
 * @returns {Array[]} [validUsers, invalidUsers, incompleteData]
 */
function validateTestDataQuality(emails, passwords, ages) {
  console.log("\n--- Validating Test Data Quality ---");
  const validUsers = [];
  const invalidUsers = [];
  const fixableUsers = [];

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const password = passwords[i];
    const age = ages[i];

    const emailValid =
      typeof email === "string" && email.includes("@") && email.includes(".");
    const passwordValid = typeof password === "string" && password.length >= 8;
    const ageValid = typeof age === "number" && age >= 18 && age <= 100;

    if (emailValid && passwordValid && ageValid) {
      validUsers.push(email);
      console.log(`Valid user: ${email}`);
    } else if (
      // fixable if exactly one of the validations fails
      (emailValid ? 1 : 0) + (passwordValid ? 1 : 0) + (ageValid ? 1 : 0) ===
      2
    ) {
      fixableUsers.push(email || "<missing email>");
      console.log(`Fixable user: ${email}`);
    } else {
      invalidUsers.push(email || "<missing email>");
      console.log(`Invalid user: ${email}`);
    }
  }

  console.log(
    `Validation Complete: ${validUsers.length} valid, ${invalidUsers.length} invalid, ${fixableUsers.length} fixable.`
  );
  return [validUsers, invalidUsers, fixableUsers];
}

// --- Step 3.2: Loop Control with Break and Continue ---

/**
 * Finds the first critical error among test results using aligned error messages.
 * Demonstrates using 'break' to exit once the first critical failure is found.
 * @param {string[]} testResults - Test results aligned by index (e.g., 'PASS', 'FAIL').
 * @param {string[]} errorMessages - Error messages aligned by index.
 * @returns {number} The index of the first critical error or -1 if none found.
 */
function findFirstCriticalError(testResults, errorMessages) {
  console.log("\n--- Finding First Critical Error (break) ---");
  let firstErrorIndex = -1;

  for (let i = 0; i < testResults.length; i++) {
    const result = testResults[i];
    const message = errorMessages[i] || "";
    const isCritical = message.toLowerCase().includes("critical");
    console.log(`Checking result ${i + 1}: ${result} - ${message}`);

    if (result === "FAIL" && isCritical) {
      firstErrorIndex = i;
      console.log(
        `Critical error found at index ${i}: result=FAIL, message="${message}". Stopping search.`
      );
      break;
    }
  }

  if (firstErrorIndex === -1) {
    console.log("No critical errors found.");
  }

  return firstErrorIndex;
}

/**
 * Processes only the tests that have a 'valid' status.
 * This demonstrates the 'continue' statement to skip the current iteration
 * of a loop and proceed to the next one.
 * @param {string[]} testNames
 * @param {string[]} testStatuses ("valid", "invalid", "skipped")
 * @returns {string[]} An array of the names of processed tests.
 */
function processValidTestsOnly(testNames, testStatuses) {
  console.log("\n--- Processing Valid Tests Only (continue) ---");
  const processedTests = [];

  for (let i = 0; i < testNames.length; i++) {
    const name = testNames[i];
    const status = testStatuses[i];

    // If the test status is not 'valid', skip the rest of the code in this iteration.
    if (status !== "valid") {
      console.log(`Skipping test "${name}" with status "${status}".`);
      // 'continue' jumps to the next iteration of the loop.
      continue;
    }

    // This part of the code only runs for tests with 'valid' status.
    console.log(`Processing valid test: "${name}"`);
    processedTests.push(name);
  }

  console.log(`Total tests processed: ${processedTests.length}`);
  return processedTests;
}

/**
 * Monitors test execution and stops if the number of failures exceeds a limit.
 * @param {string[]} testQueue - A queue of tests to execute.
 * @param {number} maxFailures - The maximum number of failures allowed before stopping.
 * @returns {Array} [processedCount, failureCount, testsRemaining]
 */
function monitorTestExecutionWithLimits(testQueue, maxFailures) {
  console.log("\n--- Monitoring Test Execution with Failure Limits ---");
  let processedCount = 0;
  let failureCount = 0;

  while (testQueue.length > 0) {
    const test = testQueue.pop();
    const result = Math.random() < 0.7 ? "PASS" : "FAIL"; // 70% pass rate

    if (result === "FAIL") {
      failureCount++;
      console.log(`Test "${test}" FAILED. Total failures: ${failureCount}`);
    } else {
      console.log(`Test "${test}" PASSED.`);
    }
    processedCount++;

    if (failureCount >= maxFailures) {
      console.log(
        `Stopping execution: Failure limit of ${maxFailures} reached.`
      );
      break;
    }
  }

  return [processedCount, failureCount, testQueue.length];
}

// --- Step 3.3: Comprehensive Test Scenario Processing ---

/**
 * Executes a full test suite across different environments and user roles.
 * @param {string[]} testCases
 * @param {string[]} environments
 * @param {string[]} userRoles
 * @returns {Array[]} [passedResults, failedResults, skippedResults, criticalResults]
 */
function executeComprehensiveTestSuite(testCases, environments, userRoles) {
  console.log("\n--- Executing Comprehensive Test Suite ---");
  const passedResults = [];
  const failedResults = [];
  const skippedResults = [];
  const criticalResults = [];

  for (let i = 0; i < environments.length; i++) {
    const env = environments[i];
    for (let j = 0; j < userRoles.length; j++) {
      const role = userRoles[j];
      for (let k = 0; k < testCases.length; k++) {
        const testCase = testCases[k];
        // - Skip certain combinations
        if (
          role.toLowerCase() === "guest" &&
          env.toLowerCase() === "production"
        ) {
          console.log(`Skipping ${testCase}|${env}|${role}|SKIP`);
          skippedResults.push(`${testCase}|${env}|${role}|SKIP`);
          continue; // skip processing
        }

        // Different success rates based on environment and role
        let passRate = 0.8;
        if (env.toLowerCase() === "production") passRate -= 0.1;
        if (role.toLowerCase() === "admin") passRate -= 0.05; // admin paths more complex

        const result = Math.random() < passRate ? "PASS" : "FAIL";
        const detail = `${testCase}|${env}|${role}|${result}`;
        if (result === "PASS") {
          passedResults.push(detail);
        } else {
          failedResults.push(detail);
          if (testCase.toLowerCase().includes("critical")) {
            criticalResults.push(detail);
          }
        }
        console.log(detail);

        // Stop early if too many failures accumulate
        if (failedResults.length >= 5) {
          console.log("Failure ceiling reached, breaking out of execution.");
          break; // break innermost loop
        }
      }
      if (failedResults.length >= 5) break; // break middle loop
    }
    if (failedResults.length >= 5) break; // break outer loop
  }
  return [passedResults, failedResults, skippedResults, criticalResults];
}

/**
 * Generates a detailed report from a set of execution results.
 * @param {string[]} resultNames
 * @param {string[]} resultStatuses
 * @param {number[]} resultTimes
 * @param {string[]} resultEnvironments
 * @returns {number[]} [totalCount, passCount, failCount, slowCount]
 */
function generateDetailedTestReport(
  resultNames,
  resultStatuses,
  resultTimes,
  resultEnvironments
) {
  console.log("\n--- Generating Detailed Test Report ---");
  let totalCount = resultNames.length;
  let passCount = 0;
  let failCount = 0;
  let slowCount = 0;

  for (let i = 0; i < resultNames.length; i++) {
    const status = resultStatuses[i];
    const time = resultTimes[i];
    const env = resultEnvironments[i];
    if (status === "PASS") passCount++;
    else if (status === "FAIL") failCount++;
    if (time > 1000) slowCount++;
    // Optionally log environment to demonstrate parallel arrays usage
    console.log(
      `Result: ${resultNames[i]} | ${status} | ${time}ms | env=${env}`
    );
  }

  console.log("--- Test Report ---");
  console.log(`Total Tests Run: ${totalCount}`);
  console.log(`Passed: ${passCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Slow (>1000ms): ${slowCount}`);
  console.log("-------------------");

  return [totalCount, passCount, failCount, slowCount];
}

// --- Demonstration ---
function runTask3Demo() {
  console.log("*****************************************************");
  console.log("** Running Task 3: Advanced Integration Demo **");
  console.log("*****************************************************\n");

  // Step 3.1 Demo
  const names = [
    "login_test",
    "logout_test",
    "register_test",
    "password_test",
    "profile_update",
  ];
  const results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
  const times = [1200, 800, 2500, 0, 900];
  analyzeTestResults(names, results, times);

  const tests = ["Login", "Logout"];
  const envs = ["DEV", "STAGING", "PROD"];
  processTestEnvironments(tests, envs);

  const emails = ["test@test.com", "invalid", "another@test.com"];
  const passwords = ["password123", "short", "goodpassword"];
  const ages = [25, 17, undefined];
  validateTestDataQuality(emails, passwords, ages);

  // Step 3.2 Demo
  const demoTestResults = ["PASS", "FAIL", "FAIL", "PASS", "FAIL"];
  const demoErrorMessages = [
    "",
    "validation error",
    "CRITICAL: database unavailable",
    "",
    "minor warning",
  ];
  findFirstCriticalError(demoTestResults, demoErrorMessages);

  const testNames = ["Test A", "Test B", "Test C", "Test D"];
  const testStatuses = ["valid", "invalid", "valid", "skipped"];
  processValidTestsOnly(testNames, testStatuses);

  const testQueueForLimits = [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
  ];
  monitorTestExecutionWithLimits(testQueueForLimits, 2);

  // Step 3.3 Demo
  const suiteCases = ["HomePage", "ProductPage"];
  const suiteEnvs = ["Chrome", "Firefox"];
  const suiteRoles = ["Admin", "User"];
  executeComprehensiveTestSuite(suiteCases, suiteEnvs, suiteRoles);

  const resultNames = ["Login", "AddToCart", "Logout", "CheckFooter"];
  const resultStatuses = ["PASS", "FAIL", "PASS", "FAIL"];
  const resultTimes = [150, 300, 50, 200];
  const resultEnvironments = ["DEV", "DEV", "DEV", "DEV"];
  generateDetailedTestReport(
    resultNames,
    resultStatuses,
    resultTimes,
    resultEnvironments
  );

  console.log("\n** Task 3 Demo Complete **\n");
}

// Export all functions for the integration task (ESM)
export {
  analyzeTestResults,
  processTestEnvironments,
  validateTestDataQuality,
  findFirstCriticalError,
  processValidTestsOnly,
  monitorTestExecutionWithLimits,
  executeComprehensiveTestSuite,
  generateDetailedTestReport,
  runTask3Demo,
};
