/**
 * =================================================================
 * |                    QA Test Helper Functions                     |
 * =================================================================
 *
 * This file contains reusable helper functions for common QA tasks,
 * designed to be used in various testing scenarios. These functions
 * cover test execution management, debugging, and system information logging.
 *
 * -----------------------------------------------------------------
 * |                        Table of Contents                        |
 * -----------------------------------------------------------------
 *
 * 1. Test Execution Helpers
 *    - startTestSuite
 *    - endTestSuite
 *    - logTestStep
 *    - generateTestReport
 *
 * 2. Debugging Utilities
 *    - debugVariable
 *    - compareExpectedActual
 *    - logSystemInfo
 *
 * =================================================================
 */

// -----------------------------------------------------------------
// |                  1. Test Execution Helpers                    |
// -----------------------------------------------------------------

/**
 * Marks the beginning of a test suite execution.
 * Logs a formatted header and the start time.
 * @param {string} suiteName - The name of the test suite.
 * @returns {string} The ISO string of the start time.
 */
function startTestSuite(suiteName) {
  console.log("========================================");
  console.log("   Starting Test Suite: " + suiteName);
  console.log("========================================");

  const startTime = new Date().toISOString();
  console.log("Start Time: " + startTime);
  return startTime;
}

/**
 * Marks the end of a test suite execution.
 * Logs the completion message and calculates the duration.
 * @param {string} suiteName - The name of the test suite.
 * @param {string} startTime - The ISO string of the start time from startTestSuite.
 * @returns {number} The duration of the test suite in milliseconds.
 */
function endTestSuite(suiteName, startTime) {
  const endTime = new Date();
  const startTimeDate = new Date(startTime);
  const duration = endTime.getTime() - startTimeDate.getTime();

  console.log("========================================");
  console.log("   Completed Test Suite: " + suiteName);
  console.log("========================================");
  console.log("End Time: " + endTime.toISOString());
  console.log("Duration: " + duration + " ms");

  return duration;
}

/**
 * Logs a single step within a test case.
 * Includes a timestamp, step number, description, and status.
 * Uses console.error for 'fail' status to make it stand out.
 * @param {number} stepNumber - The number of the test step.
 * @param {string} description - A brief description of the test step.
 * @param {string} status - The result of the step (e.g., 'pass', 'fail').
 */
function logTestStep(stepNumber, description, status) {
  const timestamp = new Date().toISOString();
  const statusMessage = status.toUpperCase();
  const logMessage =
    "[" +
    timestamp +
    "] Step " +
    stepNumber +
    ": " +
    description +
    " - " +
    statusMessage;

  if (status.toLowerCase() === "fail") {
    console.error(logMessage);
  } else {
    console.log(logMessage);
  }
}

/**
 * Generates and displays a summary report for a test execution.
 * @param {object} testResults - An object containing test counts.
 * @param {number} testResults.passed - The number of passed tests.
 * @param {number} testResults.failed - The number of failed tests.
 * @param {number} testResults.skipped - The number of skipped tests.
 * @returns {object} A summary object with total tests and pass percentage.
 */
function generateTestReport(testResults) {
  const totalTests =
    testResults.passed + testResults.failed + testResults.skipped;
  const passPercentage = (testResults.passed / totalTests) * 100;

  console.log("\n--- Test Execution Report ---");
  console.log("Total Tests: " + totalTests);
  console.log("  - Passed:  " + testResults.passed);
  console.log("  - Failed:  " + testResults.failed);
  console.log("  - Skipped: " + testResults.skipped);
  console.log("Pass Percentage: " + passPercentage + "%");
  console.log("---------------------------\n");

  const summary = {
    totalTests: totalTests,
    passed: testResults.passed,
    failed: testResults.failed,
    skipped: testResults.skipped,
    passPercentage: passPercentage,
  };
  return summary;
}

// -----------------------------------------------------------------
// |                    2. Debugging Utilities                     |
// -----------------------------------------------------------------

/**
 * Logs the name, value, and type of a variable for debugging.
 * @param {string} variableName - The name of the variable.
 * @param {*} variableValue - The value of the variable.
 */
function debugVariable(variableName, variableValue) {
  console.log("--- Debugging Variable ---");
  console.log("Name:  " + variableName);
  console.log("Value: " + variableValue);
  console.log("Type:  " + typeof variableValue);
  console.log("------------------------");
}

/**
 * Compares an expected value with an actual value and logs the result.
 * Uses strict equality (===) for comparison.
 * @param {*} expected - The expected value.
 * @param {*} actual - The actual value.
 * @returns {boolean} True if the values match, false otherwise.
 */
function compareExpectedActual(expected, actual) {
  const result = expected === actual;
  console.log("--- Comparing Values ---");
  console.log("Expected: " + expected);
  console.log("Actual:   " + actual);
  console.log("Match:    " + result);
  console.log("------------------------");
  return result;
}

/**
 * Logs basic system and environment information for debugging.
 * @returns {object} An object containing the logged system information.
 */
function logSystemInfo() {
  const timestamp = Date.now();
  const testString = "Sample test data";
  const testNumber = 42;
  const testBoolean = false;

  console.log("--- System Info ---");
  console.log("Current Timestamp: " + timestamp);
  console.log("Type of a test string: " + typeof testString);
  console.log("Type of a test number: " + typeof testNumber);
  console.log("Type of a test boolean: " + typeof testBoolean);
  console.log("-------------------");

  const info = {
    timestamp: timestamp,
    stringTypeExample: typeof testString,
    numberTypeExample: typeof testNumber,
    booleanTypeExample: typeof testBoolean,
  };

  return info;
}
// -----------------------------------------------------------------
// |                Example Usage / ESLint Demo Calls               |
// -----------------------------------------------------------------
/*
// Example usage of all helper functions to avoid unused warnings
const suiteName = "Sample Suite";
const startTime = startTestSuite(suiteName);
logTestStep(1, "Open homepage", "pass");
logTestStep(2, "Login with valid credentials", "pass");
logTestStep(3, "Check dashboard loads", "fail");
const duration = endTestSuite(suiteName, startTime);

const testResults = { passed: 2, failed: 1, skipped: 0 };
generateTestReport(testResults);

debugVariable("duration", duration);
compareExpectedActual(3, testResults.failed);
logSystemInfo();
*/

export {
    startTestSuite,
    endTestSuite,
    logTestStep,
    generateTestReport,
};
