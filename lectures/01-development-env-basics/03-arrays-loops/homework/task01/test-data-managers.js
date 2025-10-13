export { initializeTestData, buildTestQueue };

//Print length of created arrayes and return combined array of all of them
function initializeTestData() {
  let testUsers = [];
  let testEnvironments = ["development", "staging", "production"];
  let browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

  console.log(`Array lengths: 
Test Users: ${testUsers.length}
Test Environemnts: ${testEnvironments.length}
Browser types: ${browserTypes.length}`);

  return [testUsers, testEnvironments, browserTypes];
}

//Print the first and last element of each array and return the sum of elements in all arrays
function displayTestDataInfo(testUsers, testEnvironments, browserTypes) {
  let firstTestUser = testUsers[0];
  let lastTestUser = testUsers[testUsers.length - 1];

  let firstTestEnvironment = testEnvironments[0];
  let lastTestEnvironment = testEnvironments[testEnvironments.length - 1];

  let firstBrowserType = browserTypes[0];
  let lastBrowserType = browserTypes[browserTypes.length - 1];

  console.log(
    `First user: ${firstTestUser} | First environment: ${firstTestEnvironment} | First browser: ${firstBrowserType}`
  );
  console.log(
    `Last user: ${lastTestUser} | Last environment: ${lastTestEnvironment} | Last browser: ${lastBrowserType}`
  );

  let countAllArrayElements =
    testUsers.length + testEnvironments.length + browserTypes.length;

  return countAllArrayElements;
}

//displayTestDataInfo(testUsers, testEnvironments, browserTypes);

//Create arrays and print their initial and updated length and values and return their updated length
function addTestUsers(userArray, newUserEmail) {
  let userArrayLength = userArray.length;

  console.log(`Initial length of user array: ${userArrayLength}`);

  userArray.push(newUserEmail);
  userArrayLength = userArray.length;

  console.log(`New array length: ${userArrayLength}
Updated values of array: ${userArray}`);

  return userArrayLength;
}

// let userArray = ["user1"];
// let newUserEmail = "email";
// addTestUsers(userArray, newUserEmail);

//Create an array, print each added value and the updated array length and return the completed array
function buildTestQueue() {
  let testQueue = [];

  const testValues = [
    "login_test",
    "logout_test",
    "registration_test",
    "password_reset",
    "profile_update",
  ];

  for (let i = 0; i < testValues.length; i++) {
    testQueue.push(testValues[i]);
    console.log(`Added ${testValues[i]}, Queue length: ${testQueue.length}`);
  }

  return testQueue;
}

//buildTestQueue();

//Process test queue till it is empty
function processTestQueue(testQueue) {
  let totalTests = testQueue.length;

  while (testQueue.length > 0) {
    let currentTest = testQueue.pop();
    console.log(`Processing: ${currentTest}, Remaining: ${testQueue.length}`);
  }
  console.log("All tests proceeded, queue is empty.");

  return totalTests;
}

//processTestQueue(buildTestQueue());

//Print length of created arrayes and return combined array of all of them
function manageTestResults() {
  let passedTests = [];
  let failedTests = [];
  let skippedTests = [];

  passedTests.push("login_functionality", "user_registration");
  failedTests.push("payment_processing");
  skippedTests.push("email_notifications");

  console.log(`Array lengths:
Passed Tests: ${passedTests.length}
Failed Tests: ${failedTests.length}
Skipped Tests: ${skippedTests.length}`);

  return [passedTests, failedTests, skippedTests];
}

//manageTestResults();

//Replace first and last array elements, print initial and updated arrays and return the rotated array value
function rotateTestEnvironments(environmentsArray) {
  console.log("Before rotation:", environmentsArray);

  let firstEnvironmentElement = environmentsArray[0];
  let lastEnvironmentElement = environmentsArray.pop();

  environmentsArray.push(firstEnvironmentElement);
  environmentsArray[0] = lastEnvironmentElement;

  console.log("After rotation:", environmentsArray);

  return environmentsArray;
}

//rotateTestEnvironments([1, 2, 5]);

//Validate parameter arrays and return new array with values matching to the conditions
function validateTestDataIntegrity(testUsers, testEnvironments, browserTypes) {
  let validationIssues = [];

  if (testUsers.length === 0) {
    validationIssues.push("No test users defined.");
  }
  if (testEnvironments.length < 2) {
    validationIssues.push("Insufficient environments.");
  }
  if (browserTypes.length < 3) {
    validationIssues.push("Not enough browsers for testing.");
  }

  if (validationIssues.length >= 0) {
    console.log("Validation issues found:", validationIssues);
  } else {
    console.log("No validation issues found.");
  }
  return validationIssues;
}

// let environments = ["development"];
// let environments = ["development", "staging", "production"];
// let users = [];
// let browsers = ["Chrome", "Firefox"];
// validateTtestDataIntegrity(users, environments, browsers);

//Print count of all tests and their total as well as the 1st failed test
function generateTestReport(passedTests, failedTests, skippedTests) {
  let passedCount = passedTests.length;
  let failedCount = failedTests.length;
  let skippedCount = skippedTests.length;
  let totalTests = passedCount + failedCount + skippedCount;

  let firstFailedTest =
    failedCount !== 0
      ? `First failed tests is: ${failedTests[0]}`
      : "There are no failed tests.";

  console.log(`Total tests count: ${totalTests}
${firstFailedTest}}`);

  return [totalTests, passedCount, failedCount, skippedCount];
}

//generateTestReport([1, 2], [], [3, 4]);
