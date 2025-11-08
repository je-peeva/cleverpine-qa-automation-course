/**
 * This file contains functions for validating test results using comparison operators,
 * logical operators, and various string methods. These validators are crucial for
 * verifying that test outputs meet the expected criteria.
 */

// Step 2.1: Comparison Operator Validation Functions

/**
 * Validates if the actual status code matches the expected one using both strict and loose equality.
 * @param {number|string} expectedCode - The expected HTTP status code.
 * @param {number|string} actualCode - The actual HTTP status code received.
 * @returns {boolean} True if the codes match strictly, false otherwise.
 */
export function validateStatusCode(expectedCode, actualCode) {
  console.log(
    `Validating Status Code: Expected: ${expectedCode}, Actual: ${actualCode}`
  );

  // Strict equality (===) check (recommended)
  const isStrictMatch = expectedCode === actualCode;
  console.log(`- Strict Equality (===): ${isStrictMatch}`);

  // Loose equality (==) check (for demonstration)
  const isLooseMatch = expectedCode == actualCode;
  console.log(`- Loose Equality (==): ${isLooseMatch}`);

  if (isStrictMatch !== isLooseMatch) {
    console.log(
      "Note: Strict and loose equality produced different results due to type differences."
    );
  }

  return isStrictMatch;
}

/**
 * Validates if the actual response time is within the maximum allowed limit.
 * @param {number} actualTime - The actual response time in milliseconds.
 * @param {number} maxAllowedTime - The maximum allowed response time in milliseconds.
 * @returns {boolean} True if response time is within the limit, false otherwise.
 */
export function validateResponseTime(actualTime, maxAllowedTime) {
  const isWithinLimit = actualTime <= maxAllowedTime;
  console.log(
    `Validating Response Time: Actual: ${actualTime}ms, Max Allowed: ${maxAllowedTime}ms`
  );
  console.log(`- Is within limit? ${isWithinLimit}`);
  return isWithinLimit;
}

/**
 * Validates if a response time falls within a specified minimum and maximum range.
 * @param {number} responseTime - The response time to validate.
 * @param {number} minTime - The minimum acceptable time.
 * @param {number} maxTime - The maximum acceptable time.
 * @returns {boolean} True if the response time is within the range, false otherwise.
 */
export function validatePerformanceRange(responseTime, minTime, maxTime) {
  const isInRange = responseTime >= minTime && responseTime <= maxTime;
  console.log(
    `Validating Performance Range: Time: ${responseTime}ms, Range: [${minTime}ms, ${maxTime}ms]`
  );
  console.log(`- Is in range? ${isInRange}`);
  return isInRange;
}

/**
 * Compares two version strings to check if they are different.
 * @param {string} currentVersion - The current version string (e.g., "1.2.3").
 * @param {string} requiredVersion - The required version string (e.g., "1.2.4").
 * @returns {boolean} True if versions are different, false if they are the same.
 */
export function compareVersions(currentVersion, requiredVersion) {
  const areDifferent = currentVersion !== requiredVersion;
  console.log(
    `Comparing Versions: Current: ${currentVersion}, Required: ${requiredVersion}`
  );
  console.log(`- Are they different? ${areDifferent}`);
  return areDifferent;
}

// Step 2.2: String Methods for Text Validation

/**
 * Validates if an error message contains keywords like "error", "failed", or "invalid".
 * @param {string} errorMessage - The error message to validate.
 * @returns {boolean} True if any of the keywords are found, false otherwise.
 */
export function validateErrorMessage(errorMessage) {
  const lowerCaseMessage = errorMessage.toLowerCase();
  const errorPos = lowerCaseMessage.indexOf("error");
  const hasError =
    lowerCaseMessage.includes("error") ||
    lowerCaseMessage.includes("failed") ||
    lowerCaseMessage.includes("invalid");

  console.log(`Validating Error Message: "${errorMessage}"`);
  console.log(`- Position of 'error': ${errorPos}`);
  console.log(`- Contains 'error', 'failed', or 'invalid'? ${hasError}`);
  return hasError;
}

/**
 * Extracts a user ID from a response text string.
 * @param {string} responseText - The response text, e.g., "User created successfully with ID: 12345".
 * @returns {string|null} The extracted user ID or null if not found.
 */
export function extractUserIdFromResponse(responseText) {
  console.log(`Extracting User ID from: "${responseText}"`);
  const keyword = "ID: ";
  const keywordIndex = responseText.indexOf(keyword);

  if (keywordIndex === -1) {
    console.log("- Keyword 'ID: ' not found.");
    return null;
  }

  let userId = responseText.slice(keywordIndex + keyword.length).trim();
  console.log(`- Extracted User ID: ${userId}`);
  return userId;
}

/**
 * Validates an email format based on common rules.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email format is valid, false otherwise.
 */
export function validateEmailFormat(email) {
  console.log(`Validating Email Format: "${email}"`);
  const hasAtSign = email.includes("@");
  const hasDot = email.includes(".");
  const atIndex = email.indexOf("@");
  const lastDotIndex = email.lastIndexOf(".");
  const isTrimmed = email.trim() === email;
  const atBeforeDot = atIndex > -1 && lastDotIndex > atIndex;

  const isValid = hasAtSign && hasDot && atBeforeDot && isTrimmed;
  console.log(`- Has '@'? ${hasAtSign}`);
  console.log(`- Has '.'? ${hasDot}`);
  console.log(`- '@' before last '.'? ${atBeforeDot}`);
  console.log(`- Is trimmed? ${isTrimmed}`);
  console.log(`- Final Validation: ${isValid}`);
  return isValid;
}

/**
 * Processes a CSV string into an array of test data.
 * @param {string} csvString - A string of comma-separated values.
 */
export function processTestDataCSV(csvString) {
  console.log(`Processing CSV String: "${csvString}"`);
  const dataArray = csvString.split(",");
  console.log(`- Original String: "${csvString}"`);
  console.log(`- Resulting Array:`, dataArray);
  return dataArray;
}

/**
 * Normalizes a test name by trimming whitespace and converting it to lowercase.
 * @param {string} testName - The test name to normalize.
 * @returns {string} The normalized test name.
 */
export function normalizeTestName(testName) {
  console.log(`Normalizing Test Name: "${testName}"`);
  const trimmedName = testName.trim();
  const lowerCaseName = trimmedName.toLowerCase();
  const underscoredName = lowerCaseName.replace(/\s+/g, "_");
  const limitedName = underscoredName.slice(0, 20);
  console.log(
    `- Transformation Steps: "${testName}" -> "${trimmedName}" -> "${lowerCaseName}" -> "${underscoredName}" -> "${limitedName}"`
  );
  return limitedName;
}

// Step 2.3: Logical Operators for Complex Validation

/**
 * Validates a complete API response based on multiple criteria.
 * @param {number} statusCode - The HTTP status code.
 * @param {number} responseTime - The response time in ms.
 * @param {boolean} hasData - Whether the response contains data.
 * @param {number} errorCount - The number of errors reported.
 * @returns {boolean} True if all conditions for a successful response are met.
 */
export function validateCompleteAPIResponse(
  statusCode,
  responseTime,
  hasData,
  errorCount
) {
  const isSuccess =
    statusCode === 200 && responseTime < 1000 && hasData && errorCount === 0;
  console.log(`Complex API Validation:
    - Status: ${statusCode} (Expected: 200)
    - Time: ${responseTime}ms (Expected: < 1000ms)
    - Has Data: ${hasData} (Expected: true)
    - Errors: ${errorCount} (Expected: 0)
    - Overall Result: ${isSuccess}`);
  return isSuccess;
}

/**
 * Checks if a user has access to a specific test environment.
 * @param {string} userRole - The role of the user (e.g., "admin", "viewer").
 * @param {boolean} isAuthenticated - Whether the user is authenticated.
 * @param {string} environment - The environment being accessed (e.g., "prod", "staging").
 * @returns {boolean} True if access should be granted.
 */
export function checkTestEnvironmentAccess(
  userRole,
  isAuthenticated,
  environment
) {
  const isAdminOrTester = userRole === "admin" || userRole === "tester";
  const isDevOrStaging = environment === "dev" || environment === "staging";
  const hasAccess = isAuthenticated && isAdminOrTester && isDevOrStaging;
  console.log(`Environment Access Check:
    - Role: ${userRole}, Auth: ${isAuthenticated}, Env: ${environment}
    - Access Granted? ${hasAccess}`);
  return hasAccess;
}

/**
 * Validates that a test has not failed due to errors, cancellation, or timeout.
 * @param {boolean} hasErrors - True if there were errors.
 * @param {boolean} isCancelled - True if the test was cancelled.
 * @param {boolean} isTimeout - True if the test timed out.
 * @returns {boolean} True if the test did not fail.
 */
export function validateTestNotFailed(hasErrors, isCancelled, isTimeout) {
  const didNotFail = !(hasErrors || isCancelled || isTimeout);
  console.log(`Test Failure Check:
    - Has Errors: ${hasErrors}, Cancelled: ${isCancelled}, Timeout: ${isTimeout}
    - Did Not Fail? ${didNotFail}`);
  return didNotFail;
}

/**
 * A complex validation scenario combining multiple conditions.
 * @param {number} statusCode - HTTP status code.
 * @param {number} responseTime - Response time in ms.
 * @param {string} userRole - User's role.
 * @param {number} dataCount - Number of data items returned.
 * @param {string} environment - The test environment.
 * @returns {boolean} The final validation result.
 */
export function complexValidationScenario(
  statusCode,
  responseTime,
  userRole,
  dataCount,
  environment
) {
  // Example logic: (statusCode === 200 && responseTime < 500) || (userRole === "admin" && environment === "dev")
  const statusAndPerf = statusCode === 200 && responseTime < 500;
  const adminDev = userRole === "admin" && environment === "dev";
  const finalResult = statusAndPerf || adminDev;
  console.log(`Complex Scenario Validation:
    - Status: ${statusCode} === 200? ${statusCode === 200}
    - ResponseTime: ${responseTime} < 500? ${responseTime < 500}
    - UserRole: ${userRole} === 'admin'? ${userRole === "admin"}
    - Environment: ${environment} === 'dev'? ${environment === "dev"}
    - (statusCode === 200 && responseTime < 500): ${statusAndPerf}
    - (userRole === 'admin' && environment === 'dev'): ${adminDev}
    - Final Result: ${finalResult}`);
  return finalResult;
}
