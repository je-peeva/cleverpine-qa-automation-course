/**
 * Task 1: Array-Based Test Data Management System
 *
 * Objective: Create a comprehensive test data management system using arrays to store,
 * organize, and manipulate different types of testing data.
 */

// --- Step 1.1: Create Basic Test Data Arrays ---

/**
 * Initializes and returns a set of test data arrays.
 * This function demonstrates the creation of arrays using the [] syntax.
 * @returns {Array[]} An array containing three arrays in order: [testUsers, testEnvironments, browserTypes].
 */
function initializeTestData() {
  // Create an empty array, ready to be filled with test user data.
  const testUsers = [];

  // Create an array with predefined string elements for test environments.
  const testEnvironments = ["development", "staging", "production"];

  // Create an array for browser types that will be used in testing.
  const browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

  console.log("--- Initializing Test Data ---");
  console.log(`'testUsers' array created. Length: ${testUsers.length}`);
  console.log(
    `'testEnvironments' array created. Length: ${testEnvironments.length}`
  );
  console.log(`'browserTypes' array created. Length: ${browserTypes.length}`);

  // Return all created arrays in a single array for simple handling.
  return [testUsers, testEnvironments, browserTypes];
}

/**
 * Displays key information about the test data arrays.
 * This function demonstrates accessing array elements by index and using the .length property.
 * @param {string[]} testUsers
 * @param {string[]} testEnvironments
 * @param {string[]} browserTypes
 * @returns {number} The total count of data elements across all arrays.
 */
function displayTestDataInfo(testUsers, testEnvironments, browserTypes) {
  console.log("\n--- Displaying Test Data Info ---");

  // Access the first element (index 0) and last element (.length - 1) of each array when available.
  if (testUsers.length > 0) {
    console.log(`First user: ${testUsers[0]}`);
    console.log(`Last user: ${testUsers[testUsers.length - 1]}`);
  } else {
    console.log("No users available to display first/last.");
  }

  console.log(`First environment: ${testEnvironments[0]}`);
  console.log(
    `Last environment: ${testEnvironments[testEnvironments.length - 1]}`
  );

  console.log(`First browser: ${browserTypes[0]}`);
  console.log(`Last browser: ${browserTypes[browserTypes.length - 1]}`);

  // Calculate the total number of data elements.
  const totalElements =
    testUsers.length + testEnvironments.length + browserTypes.length;

  console.log(`Total data elements across all arrays: ${totalElements}`);

  return totalElements;
}

// --- Step 1.2: Build Test Data Manipulation Functions ---

/**
 * Adds a new user to the testUsers array.
 * This function demonstrates the use of the push() method to add an element to the end of an array.
 * @param {string[]} userArray - The array of user emails.
 * @param {string} newUserEmail - The new email to add.
 * @returns {number} The new length of the userArray.
 */
function addTestUsers(userArray, newUserEmail) {
  console.log("\n--- Adding New Test User ---");
  console.log(`Current user count: ${userArray.length}`);

  // The push() method adds one or more elements to the end of an array.
  userArray.push(newUserEmail);

  console.log(`Added new user: ${newUserEmail}`);
  console.log(`New user count: ${userArray.length}`);
  console.log("Updated user array:", userArray);

  // push() returns the new length of the array.
  return userArray.length;
}

/**
 * Builds a queue of test cases to be executed.
 * This function demonstrates using push() repeatedly to build up a data set.
 * @returns {string[]} The completed testQueue array.
 */
function buildTestQueue() {
  console.log("\n--- Building Test Queue ---");
  const testQueue = [];

  const testsToAdd = [
    "login_test",
    "logout_test",
    "registration_test",
    "password_reset",
    "profile_update",
  ];

  // Add each test to the queue and log the progress.
  for (let i = 0; i < testsToAdd.length; i++) {
    testQueue.push(testsToAdd[i]);
    console.log(`Added "${testsToAdd[i]}", Queue length: ${testQueue.length}`);
  }

  return testQueue;
}

/**
 * Processes a test queue by removing and logging each test.
 * This function demonstrates the pop() method to remove the last element from an array.
 * @param {string[]} testQueue - The array of test cases to process.
 * @returns {number} The total number of tests processed.
 */
function processTestQueue(testQueue) {
  console.log("\n--- Processing Test Queue ---");
  const initialCount = testQueue.length;

  // The while loop continues as long as there are elements in the array.
  while (testQueue.length > 0) {
    // The pop() method removes the last element from an array and returns that element.
    const currentTest = testQueue.pop();
    console.log(
      `Processing: "${currentTest}", Remaining tests: ${testQueue.length}`
    );
  }

  console.log("All tests processed, queue is empty.");
  return initialCount;
}

/**
 * Manages and categorizes test results into separate arrays.
 * @returns {Array[]} An array containing [passedTests, failedTests, skippedTests].
 */
function manageTestResults() {
  console.log("\n--- Managing Test Results ---");
  const passedTests = [];
  const failedTests = [];
  const skippedTests = [];

  // Add sample data to demonstrate categorization.
  passedTests.push("login_functionality", "user_registration");
  failedTests.push("payment_processing");
  skippedTests.push("email_notifications");

  console.log(`Passed tests count: ${passedTests.length}`);
  console.log(`Failed tests count: ${failedTests.length}`);
  console.log(`Skipped tests count: ${skippedTests.length}`);

  return [passedTests, failedTests, skippedTests];
}

// --- Step 1.3: Advanced Array Operations for Test Scenarios ---

/**
 * Rotates the elements of an array to simulate changing test configurations.
 * This function demonstrates modifying array elements by index and using push/pop.
 * @param {string[]} environmentsArray - The array of environments to rotate.
 * @returns {string[]} The rotated array.
 */
function rotateTestEnvironments(environmentsArray) {
  console.log("\n--- Rotating Test Environments ---");
  console.log("Array before rotation:", environmentsArray);

  // Store the first element.
  const firstElement = environmentsArray[0];
  // Remove the last element.
  const lastElement = environmentsArray.pop();
  // Add the original first element to the end.
  environmentsArray.push(firstElement);
  // Set the first element to be the original last element.
  environmentsArray[0] = lastElement;

  console.log("Array after rotation:", environmentsArray);
  return environmentsArray;
}

/**
 * Validates the integrity of test data arrays based on defined rules.
 * @param {string[]} testUsers
 * @param {string[]} testEnvironments
 * @param {string[]} browserTypes
 * @returns {string[]} An array of validation issue messages.
 */
function validateTestDataIntegrity(testUsers, testEnvironments, browserTypes) {
  console.log("\n--- Validating Test Data Integrity ---");
  const validationIssues = [];

  // Rule 1: Check if there are any test users.
  if (testUsers.length === 0) {
    const issue = "No test users defined";
    validationIssues.push(issue);
    console.log(`Validation Check: FAILED - ${issue}`);
  } else {
    console.log("Validation Check: PASSED - Test users are present.");
  }

  // Rule 2: Check if there are enough environments.
  if (testEnvironments.length < 2) {
    const issue = "Insufficient environments";
    validationIssues.push(issue);
    console.log(`Validation Check: FAILED - ${issue}`);
  } else {
    console.log("Validation Check: PASSED - Sufficient environments exist.");
  }

  // Rule 3: Check if there are enough browsers.
  if (browserTypes.length < 3) {
    const issue = "Not enough browsers for testing";
    validationIssues.push(issue);
    console.log(`Validation Check: FAILED - ${issue}`);
  } else {
    console.log("Validation Check: PASSED - Sufficient browsers exist.");
  }

  return validationIssues;
}

/**
 * Generates a summary report from test result arrays.
 * @param {string[]} passedTests
 * @param {string[]} failedTests
 * @param {string[]} skippedTests
 * @returns {number[]} [totalTests, passedCount, failedCount, skippedCount]
 */
function generateTestReport(passedTests, failedTests, skippedTests) {
  console.log("\n--- Generating Test Report ---");

  const passedCount = passedTests.length;
  const failedCount = failedTests.length;
  const skippedCount = skippedTests.length;
  const totalTests = passedCount + failedCount + skippedCount;

  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${passedCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log(`Skipped: ${skippedCount}`);

  // Display the first failed test if any exist.
  if (failedCount > 0) {
    console.log(`First failed test: "${failedTests[0]}"`);
  }

  return [totalTests, passedCount, failedCount, skippedCount];
}

// --- Demonstration ---
function runTask1Demo() {
  console.log("*************************************");
  console.log("** Running Task 1: Test Data Manager Demo **");
  console.log("*************************************\n");

  // Step 1.1 Demo
  const initData = initializeTestData();
  const testUsers = initData[0];
  const testEnvironments = initData[1];
  const browserTypes = initData[2];
  displayTestDataInfo(testUsers, testEnvironments, browserTypes);

  // Step 1.2 Demo
  addTestUsers(testUsers, "student@example.com");
  addTestUsers(testUsers, "teacher@example.com");
  const queue = buildTestQueue();
  processTestQueue(queue);
  const resultsArrays = manageTestResults();
  const passedTests = resultsArrays[0];
  const failedTests = resultsArrays[1];
  const skippedTests = resultsArrays[2];

  // Step 1.3 Demo
  rotateTestEnvironments(testEnvironments);
  const issues = validateTestDataIntegrity(
    testUsers,
    testEnvironments,
    browserTypes
  );
  console.log("Final validation issues found:", issues);
  generateTestReport(passedTests, failedTests, skippedTests);

  console.log("\n** Task 1 Demo Complete **\n");
}

// Export all functions to be used in the integration task (ESM)
export {
  initializeTestData,
  displayTestDataInfo,
  addTestUsers,
  buildTestQueue,
  processTestQueue,
  manageTestResults,
  rotateTestEnvironments,
  validateTestDataIntegrity,
  generateTestReport,
  runTask1Demo,
};
