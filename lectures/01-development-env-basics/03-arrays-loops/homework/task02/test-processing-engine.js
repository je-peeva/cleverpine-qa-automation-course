export { simulateTestExecution, retryFailedTests, processAllTestUsers };

//Print total count and each processed user and their email
function processAllTestUsers(testUsers) {
  for (let i = 0; i < testUsers.length; i++) {
    let currentUser = testUsers[i];
    let userEmail = currentUser.toLowerCase() + "@mail.test";

    console.log(`Processing user ${i + 1}: ${userEmail}`);
  }

  console.log("Total processed users:", testUsers.length);
}

//processAllTestUsers(["user1", "user2", "user3"]);

//Validate array of emails and print if they are valid/invalid.
function validateAllemails(emailArray) {
  let validEmails = [];
  let invalidEmails = [];

  for (let i = 0; i < emailArray.length; i++) {
    if (emailArray[i].includes("@")) {
      validEmails.push(emailArray[i]);
      console.log(`Email ${i + 1}: ${emailArray[i]} is VALID.`);
    } else {
      invalidEmails.push(emailArray[i]);
      console.log(`Email ${i + 1}: ${emailArray[i]} is INVALID.`);
    }
  }

  let validEmailsCount = validEmails.length;
  let invalidEmailsCount = invalidEmails.length;

  return [validEmails, invalidEmails];
}

//validateAllemails(["test!test", "test@test.com", "oneMore@test.bg", "smth"]);

//Print responce times from array and calculate their total, avg and slowest values.
function calculateResponseTimes(responseTimeArray) {
  let totalTime = 0;
  let slowestTime = 0;

  for (let i = 0; i < responseTimeArray.length; i++) {
    let currentTime = responseTimeArray[i];
    totalTime += currentTime;

    if (currentTime > slowestTime) {
      slowestTime = currentTime;
    }
    console.log(`Response time ${i + 1} : ${currentTime}ms`);
  }

  let avgTime = Number((totalTime / responseTimeArray.length).toFixed(2));

  let responseTimeSummary = {
    "Total time": `${totalTime}ms`,
    "Avarage time": `${avgTime}ms`,
    "Slowest time": `${slowestTime}ms`,
  };

  console.log(responseTimeSummary);

  return [totalTime, avgTime, slowestTime];
}

//calculateResponseTimes([260, 150, 300]);

function simulateTestExecution(testCases) {
  let executionResults = [];

  for (let i = 0; i < testCases.length; i++) {
    let status = i % 3 === 0 ? "FAIL" : "PASS";
    let testCaseResult = `${testCases[i]} : ${status}`;

    executionResults.push(testCaseResult);

    console.log(`Executed: ${testCaseResult}`);
  }

  let passedTests = 0;
  let failedTests = 0;

  for (let i = 0; i < executionResults.length; i++) {
    if (executionResults[i].includes("PASS")) {
      passedTests++;
    } else if (executionResults[i].includes("FAIL")) {
      failedTests++;
    }
  }

  console.log(`Total Passed Tests: ${passedTests}
Total Failed Tests: ${failedTests}`);

  return executionResults;
}

//simulateTestExecution(["case1", "case2", "case3", "case4", "case5"]);

function retryFailedTests(testName) {
  let attempts = 0;
  let maxRetries = 3;
  let testPassed = false;

  while (attempts < maxRetries && !testPassed) {
    attempts++;

    if (attempts === 3) {
      testPassed = true;
    }

    console.log(
      `Retry attempts ${attempts} for ${testName} : ${testPassed ? "PASS" : "FAIL"} `
    );
  }

  if (testPassed) {
    console.log(`${testName} passed.`);
  } else {
    console.log(`${testName} failed.`);
  }

  return [testPassed, attempts];
}

//retryFailedTests("test1");

function monitorTestQueue(testQueue) {
  let processedCount = 0;
  let maxProcessingTime = 10;

  while (testQueue.length > 0 && processedCount < maxProcessingTime) {
    processedCount++;
    testQueue.pop();

    console.log(
      `Processed test ${processedCount}, Queue remaining: ${testQueue.length}`
    );
  }

  if (testQueue.length === 0) {
    console.log(`All test cases are executed. Queue is empty.`);
  } else if (processedCount === maxProcessingTime) {
    console.log(`Max processing time has been reached. Testing has stopped.`);
  }

  return [processedCount, testQueue.length];
}

//monitorTestQueue(["case1", "case2", "case3", "case4", "case5"]);

//Loop respecting time duration for test cases completion
function waitForTestCompletion(expectedDuration) {
  let elapsedTime = 0;
  let testComplete = false;

  while (!testComplete && elapsedTime < expectedDuration * 2) {
    elapsedTime++;

    if (elapsedTime >= expectedDuration) {
      testComplete = true;
    }

    console.log(`Waiting...Elapsed time: ${elapsedTime}`);
  }

  console.log(
    testComplete ? "Test case is completed." : "Test case timed out."
  );

  return [testComplete, elapsedTime];
}

//waitForTestCompletion(0);

//Returning count of pass, failed cases and success rate
function processTestResultsStream(testResults) {
  let passCount = 0;
  let failCount = 0;
  let currentIndex = 0;

  while (currentIndex < testResults.length) {
    let currentResult = testResults[currentIndex];

    if (currentResult === "PASS") {
      passCount++;
    } else if (currentResult === "FAIL") {
      failCount++;
    }

    currentIndex++;

    console.log(`Processing result ${currentIndex} : ${currentResult}`);
  }

  let successRate = (passCount / (passCount + failCount)) * 100;

  return [passCount, failCount, successRate];
}

//processTestResultsStream(["PASS", "FAIL", "FAIL"]);

//Comparing loop approaches
function compareLoopApproaches(dataArray) {
  console.log("===== Comparing for loop vs while loop approaches =====");

  let forProcessedCount = 0;
  let forStartTime = Date.now();

  for (let i = 0; i < dataArray.length; i++) {
    forProcessedCount++;
  }

  let forEndTime = Date.now();

  console.log(
    `For Loop: ${forProcessedCount} processed items in ${forEndTime - forStartTime}ms`
  );

  let index = 0;
  let whileProcessedCount = 0;
  let whileStartTime = Date.now();

  while (index < dataArray.length) {
    whileProcessedCount++;
    index++;
  }

  let whileEndTime = Date.now();

  console.log(
    `While Loop: ${whileProcessedCount} processed items in ${whileEndTime - whileStartTime}ms`
  );

  return [forProcessedCount, whileProcessedCount];
}

//compareLoopApproaches(["case1", "case2", "case3", "case4", "case5"]);
