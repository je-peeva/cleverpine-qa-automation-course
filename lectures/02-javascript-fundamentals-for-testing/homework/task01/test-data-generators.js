/**
 * This file contains functions for generating dynamic test data for various testing scenarios.
 * It includes functions for creating user names, building URLs, and generating test messages.
 * These helpers are essential for creating realistic and varied test inputs.
 */

// Step 1.1: String-Based Test Data Generators

/**
 * Generates a test user name with a unique timestamp to ensure uniqueness.
 * @param {string} basePrefix - The base prefix for the user name (e.g., "testuser").
 * @returns {string} The generated unique user name.
 */
export function generateTestUserName(basePrefix) {
  // Using Date.now() to get a unique number based on the current time
  const timestamp = Date.now();
  const userName = `${basePrefix}_${timestamp}`;
  console.log(`Generated User Name: ${userName}`);
  return userName;
}

/**
 * Builds a test URL for a specific environment, endpoint, and user ID.
 * @param {string} environment - The test environment (e.g., "staging", "prod").
 * @param {string} endpoint - The API endpoint (e.g., "users", "products").
 * @param {string|number} userId - The user ID to include in the URL.
 * @returns {string} The fully constructed URL.
 */
export function buildTestURL(environment, endpoint, userId) {
  const baseURL = `https://${environment}.example.com`;
  const fullURL = `${baseURL}/${endpoint}?user=${userId}`;
  console.log(`Constructed URL for ${environment}: ${fullURL}`);
  return fullURL;
}

/**
 * Creates a formatted test message containing test name, status, and duration.
 * @param {string} testName - The name of the test.
 * @param {string} status - The status of the test (e.g., "PASSED", "FAILED").
 * @param {number} duration - The duration of the test in milliseconds.
 * @returns {string} The formatted test message.
 */
export function createTestMessage(testName, status, duration) {
  const message = `Test: '${testName}' | Status: ${status} | Duration: ${duration}ms`;
  console.log(message);
  return message;
}

// Step 1.2: Arithmetic Operations for Test Metrics

/**
 * Calculates the response time given a start and end time.
 * @param {number} startTime - The start time in milliseconds.
 * @param {number} endTime - The end time in milliseconds.
 * @returns {number} The calculated duration in milliseconds.
 */
export function calculateResponseTime(startTime, endTime) {
  const duration = endTime - startTime;
  console.log(`Response time: ${duration}ms`);
  return duration;
}

/**
 * Calculates the success rate of tests and logs a detailed metrics report.
 * @param {number} totalTests - The total number of tests executed.
 * @param {number} passedTests - The number of tests that passed.
 * @returns {object} An object containing successRate, passedTests, and failedTests.
 */
export function calculateSuccessRate(totalTests, passedTests) {
  if (totalTests === 0) {
    console.log("Cannot calculate success rate with zero total tests.");
    return { successRate: 0, passedTests: 0, failedTests: 0 };
  }
  const failedTests = totalTests - passedTests;
  const successRate = (passedTests / totalTests) * 100;
  console.log(`Test Metrics:
    - Total Tests: ${totalTests}
    - Passed: ${passedTests}
    - Failed: ${failedTests}
    - Success Rate: ${successRate.toFixed(2)}%`);
  return { totalTests, passedTests, failedTests, successRate };
}

/**
 * Adjusts a base timeout value by a given multiplier.
 * @param {number} baseTimeout - The base timeout in milliseconds.
 * @param {number} multiplier - The multiplier to apply.
 * @returns {number} The adjusted timeout value.
 */
export function adjustTimeout(baseTimeout, multiplier) {
  let adjustedTimeout = baseTimeout * multiplier;
  // The modulus ensures the timeout wraps around and does not exceed 30000.
  // If it's 0, we default to the max, otherwise we use the remainder.
  adjustedTimeout = adjustedTimeout % 30000;
  if (adjustedTimeout === 0) {
    adjustedTimeout = 30000;
  }
  console.log(
    `Original Timeout: ${baseTimeout}ms | Adjusted Timeout: ${adjustedTimeout}ms`
  );
  return adjustedTimeout;
}

/**
 * Demonstrates incrementing a test counter using different operators.
 * @param {number} currentCount - The starting count.
 * @returns {number} The final count after all increments.
 */
export function incrementTestCounter(currentCount) {
  console.log(`Initial count: ${currentCount}`);
  let count = currentCount;
  count++; // Increment by 1
  console.log(`After incrementing by 1: ${count}`);
  count += 5; // Increment by 5
  console.log(`After adding 5: ${count}`);
  console.log(
    `Progression: ${currentCount} -> +1 -> +5 -> final state is ${count}`
  );
  return count;
}

// Step 1.3: Advanced String Manipulation for Test Data

/**
 * Processes an environment name by trimming, converting to uppercase, and checking for production.
 * @param {string} environmentName - The name of the environment (e.g., "  Staging-US-West  ").
 * @returns {object} An object with the processed environment details.
 */
export function processTestEnvironment(environmentName) {
  const originalName = environmentName;
  const normalizedName = environmentName.trim().toLowerCase();
  const baseURL = `https://${normalizedName}.example.com`;
  const displayName = normalizedName.toUpperCase();

  console.log(`Processing Environment: '${environmentName}'
    - Original: '${originalName}'
    - Normalized: '${normalizedName}'
    - Base URL: '${baseURL}'
    - Display Name: '${displayName}'`);

  return { originalName, normalizedName, baseURL, displayName };
}

/**
 * Extracts structured information from a formatted test result string.
 * @param {string} testResultString - The test result string (e.g., "TestName:PASSED:250ms").
 * @returns {object} An object containing the testName, status, and duration.
 */
export function extractTestInfo(testResultString) {
  const parts = testResultString.split(":");
  const testName = parts[0];
  const status = parts[1];
  // parseInt is used to convert the string part "250ms" into a number 250
  const duration = parseInt(parts[2].replace("ms", ""));

  console.log(`Extracting from: "${testResultString}"
    - Test Name: ${testName}
    - Status: ${status}
    - Duration: ${duration}ms`);

  return { testName, status, duration };
}

/**
 * Builds a multi-line, formatted test summary report.
 * @param {string} testName - The name of the test.
 * @param {string} environment - The environment where the test was run.
 * @param {number} userCount - The number of virtual users.
 * @param {number} avgResponseTime - The average response time.
 * @returns {string} The formatted summary string.
 */
export function buildTestSummary(
  testName,
  environment,
  userCount,
  avgResponseTime
) {
  const totalExecutionTime = userCount * avgResponseTime;
  const summary = `
  ================================
  Test Summary: ${testName}
  --------------------------------
  Environment:     ${environment.toUpperCase()}
  User Load:       ${userCount} users
  Avg. Response:   ${avgResponseTime.toFixed(2)}ms
  Total Time:      ${totalExecutionTime.toFixed(2)}ms
  ================================
  `;
  console.log(summary);
  return summary;
}
