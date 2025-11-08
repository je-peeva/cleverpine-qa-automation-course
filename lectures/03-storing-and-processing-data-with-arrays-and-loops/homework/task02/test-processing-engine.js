/**
 * Task 2: Loop-Based Test Processing Engine
 *
 * Objective: Build a comprehensive test processing engine using for and while loops
 * to automate repetitive testing tasks and process test data collections efficiently.
 */

// --- Step 2.1: For Loop Test Data Processors ---

/**
 * Processes and displays each user from a given array using a for loop.
 * A for loop is ideal here because we know the exact number of items to process (the array length).
 * @param {string[]} testUsers - An array of user emails.
 * @returns {number} The number of users processed.
 */
function processAllTestUsers(testUsers) {
  console.log("\n--- Processing All Test Users (for loop) ---");
  // The for loop is structured as: for (initializer; condition; incrementer)
  for (let i = 0; i < testUsers.length; i++) {
    // Access the user at the current index 'i'.
    const user = testUsers[i];
    console.log(`Processing user ${i + 1}: ${user}`);
  }
  console.log(`Total users processed: ${testUsers.length}`);
  return testUsers.length;
}

/**
 * Validates a list of emails, categorizing them into valid and invalid arrays.
 * This demonstrates using a for loop with conditional logic (if/else).
 * @param {string[]} emailArray - An array of email strings to validate.
 * @returns {Array[]} [validEmails, invalidEmails]
 */
function validateAllEmails(emailArray) {
  console.log("\n--- Validating All Emails (for loop) ---");
  const validEmails = [];
  const invalidEmails = [];

  for (let i = 0; i < emailArray.length; i++) {
    const email = emailArray[i];
    // A simple validation check: does the email contain the '@' symbol?
    if (email.includes("@")) {
      validEmails.push(email);
      console.log(`Email ${i + 1}: "${email}" - VALID`);
    } else {
      invalidEmails.push(email);
      console.log(`Email ${i + 1}: "${email}" - INVALID`);
    }
  }

  console.log(
    `Validation complete. Valid: ${validEmails.length}, Invalid: ${invalidEmails.length}`
  );
  return [validEmails, invalidEmails];
}

/**
 * Calculates total, average, and slowest response times from an array of numbers.
 * This shows how a for loop can be used for mathematical calculations on a dataset.
 * @param {number[]} responseTimesArray - An array of response times in milliseconds.
 * @returns {number[]} [totalTime, averageTime, slowestTime]
 */
function calculateResponseTimes(responseTimesArray) {
  console.log("\n--- Calculating Response Times (for loop) ---");
  let totalTime = 0;
  let slowestTime = 0; // Start with 0, any response time will be greater

  for (let i = 0; i < responseTimesArray.length; i++) {
    const time = responseTimesArray[i];
    totalTime += time; // Add current time to the total

    // Check if the current time is slower than the recorded slowest time
    if (time > slowestTime) {
      slowestTime = time;
    }
  }

  // Calculate the average time. Avoid division by zero if the array is empty.
  const averageTime =
    responseTimesArray.length > 0 ? totalTime / responseTimesArray.length : 0;

  console.log(`Total response time: ${totalTime}ms`);
  console.log(`Average response time: ${averageTime}ms`);
  console.log(`Slowest response time: ${slowestTime}ms`);

  return [totalTime, averageTime, slowestTime];
}

/**
 * Simulates the execution of test cases and records their results.
 * This demonstrates creating a new array based on processing an existing one.
 * @param {string[]} testCases - An array of test case names.
 * @returns {string[]} An array of execution results (e.g., "login_test:PASS").
 */
function simulateTestExecution(testCases) {
  console.log("\n--- Simulating Test Execution (for loop) ---");
  const executionResults = [];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    // FAIL every 3rd index, PASS otherwise
    const result = i % 3 === 0 ? "FAIL" : "PASS";
    const resultString = `${testCase}:${result}`;
    executionResults.push(resultString);
    console.log(`Executing ${i + 1}/${testCases.length}: ${resultString}`);
  }

  let passCount = 0;
  let failCount = 0;
  for (let i = 0; i < executionResults.length; i++) {
    if (executionResults[i].includes(":PASS")) passCount++;
    else if (executionResults[i].includes(":FAIL")) failCount++;
  }
  console.log(
    `Simulation complete. Passed: ${passCount}, Failed: ${failCount}`
  );
  return executionResults;
}

// --- Step 2.2: While Loop Processing Systems ---

/**
 * Simulates retrying a failed test until it passes or max retries are reached.
 * A while loop is perfect here because the number of iterations is not known beforehand.
 * @param {string} testName - The name of the test to retry.
 * @returns {Array} [testPassed, totalAttempts]
 */
function retryFailedTest(testName) {
  console.log(`\n--- Retrying Failed Test: "${testName}" (while loop) ---`);
  let attempts = 0;
  const maxRetries = 3;
  let testPassed = false;

  // The loop continues as long as the test has not passed AND we haven't exceeded max retries.
  while (!testPassed && attempts < maxRetries) {
    attempts++;
    // Simulate success on the final attempt
    const successNow = attempts === maxRetries;
    console.log(
      `Retry attempt ${attempts} for ${testName}: ${successNow ? "PASS" : "FAIL"}`
    );
    if (successNow) {
      testPassed = true;
    }
  }

  // Final result log
  if (testPassed) {
    console.log(`Final result: ${testName} PASSED after ${attempts} attempts.`);
  } else {
    console.log(`Final result: ${testName} FAILED after ${attempts} attempts.`);
  }
  return [testPassed, attempts];
}

/**
 * Monitors a test queue, processing one test at a time until the queue is empty.
 * A while loop is ideal for processing a queue until it's depleted.
 * @param {string[]} testQueue - An array representing the test queue.
 * @returns {number[]} [processedCount, remainingTests]
 */
function monitorTestQueue(testQueue) {
  console.log("\n--- Monitoring Test Queue (while loop) ---");
  let processedCount = 0;
  const maxProcessingTime = 10;
  // The loop runs as long as the queue has items and we haven't hit time limit.
  while (testQueue.length > 0 && processedCount < maxProcessingTime) {
    // Remove last test from the queue
    testQueue.pop();
    processedCount++;
    console.log(
      `Processed test ${processedCount}, Queue remaining: ${testQueue.length}`
    );
  }
  if (testQueue.length === 0) {
    console.log("All tests processed, queue is empty or finished within time.");
  } else if (processedCount >= maxProcessingTime) {
    console.log("Stopped due to time limit reached.");
  }
  return [processedCount, testQueue.length];
}

/**
 * Simulates waiting for a long-running test to complete.
 * @param {number} expectedDuration - The number of "checks" to simulate.
 * @returns {Array} [testComplete, elapsedTime]
 */
function waitForTestCompletion(expectedDuration) {
  console.log("\n--- Waiting for Test Completion (while loop) ---");
  let elapsedTime = 0;
  let testComplete = false;

  while (!testComplete && elapsedTime < expectedDuration * 2) {
    elapsedTime++;
    if (elapsedTime % 2 === 0) {
      console.log(`Waiting... Elapsed time: ${elapsedTime}`);
    }
    if (elapsedTime >= expectedDuration) {
      testComplete = true;
    }
  }
  if (testComplete) {
    console.log(`Test completed in ${elapsedTime} iterations.`);
  } else {
    console.log(`Timed out after ${elapsedTime} iterations.`);
  }
  return [testComplete, elapsedTime];
}

/**
 * Processes a stream of test results, counting passes and fails.
 * @param {string[]} testResults - An array of test results ("PASS" or "FAIL").
 * @returns {number[]} [passCount, failCount, successRate]
 */
function processTestResultsStream(testResults) {
  console.log("\n--- Processing Test Results Stream (while loop) ---");
  let passCount = 0;
  let failCount = 0;
  let index = 0;

  while (index < testResults.length) {
    const result = testResults[index];
    if (result === "PASS") {
      passCount++;
    } else {
      failCount++;
    }
    console.log(`Processing result ${index + 1}: ${result}`);
    index++;
  }

  const totalResults = testResults.length;
  const successRate = totalResults > 0 ? (passCount / totalResults) * 100 : 0;

  console.log(
    `Processing complete. Passed: ${passCount}, Failed: ${failCount}`
  );

  console.log(`Success Rate: ${successRate}%`);

  return [passCount, failCount, successRate];
}

// --- Step 2.3: Loop Pattern Comparisons ---

/**
 * Demonstrates processing the same data with both a for loop and a while loop.
 * This highlights the syntactical differences and when one might be preferred over the other.
 * @param {any[]} dataArray - The array of data to process.
 * @returns {number[]} [forLoopProcessingCount, whileLoopProcessingCount]
 */
function compareLoopApproaches(dataArray) {
  console.log("\n--- Comparing For vs. While Loops ---");

  // For loop approach (best for known length)
  let forLoopCount = 0;
  console.log("Processing with for loop:");
  for (let i = 0; i < dataArray.length; i++) {
    forLoopCount++;
    console.log(`  Item ${i}: ${dataArray[i]}`);
  }

  // While loop approach (more verbose for simple array iteration)
  let whileLoopCount = 0;
  let index = 0;
  console.log("Processing with while loop:");
  while (index < dataArray.length) {
    whileLoopCount++;
    console.log(`  Item ${index}: ${dataArray[index]}`);
    index++;
  }

  console.log(`For loop processed ${forLoopCount} items.`);
  console.log(`While loop processed ${whileLoopCount} items.`);

  return [forLoopCount, whileLoopCount];
}

// --- Demonstration ---
function runTask2Demo() {
  console.log("************************************************");
  console.log("** Running Task 2: Loop-Based Processing Engine Demo **");
  console.log("************************************************\n");

  const users = ["user1@test.com", "user2@test.com", "user3@test.com"];
  const emails = [
    "valid@test.com",
    "invalid-email",
    "another@valid.com",
    "test@",
  ];
  const times = [245, 312, 189, 445, 300];
  const tests = ["login", "logout", "registration", "password_reset"];

  // Step 2.1 Demo
  processAllTestUsers(users);
  validateAllEmails(emails);
  calculateResponseTimes(times);
  simulateTestExecution(tests);

  // Step 2.2 Demo
  retryFailedTest("api_authentication");
  const queueForMonitoring = ["test-A", "test-B", "test-C"];
  monitorTestQueue(queueForMonitoring);
  waitForTestCompletion(5);
  processTestResultsStream(["PASS", "FAIL", "PASS", "PASS", "FAIL"]);

  // Step 2.3 Demo
  const comparisonData = ["A", "B", "C"];
  compareLoopApproaches(comparisonData);

  console.log("\n** Task 2 Demo Complete **\n");
}

// Export all functions for the integration task (ESM)
export {
  processAllTestUsers,
  validateAllEmails,
  calculateResponseTimes,
  simulateTestExecution,
  retryFailedTest,
  monitorTestQueue,
  waitForTestCompletion,
  processTestResultsStream,
  compareLoopApproaches,
  runTask2Demo,
};
