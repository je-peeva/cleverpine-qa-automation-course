export {
  generateTestUserName,
  buildTestURL,
  calculateResponseTime,
  createTestMessage,
  calculateSuccessRate,
  incrementTestCounter,
  processTestEnvironment,
  extractTestInfo,
  buildTestSummary,
};

//Generate new username, print and return the result
function generateTestUserName(basePrefix) {
  let currentDatestamp = Date.now();

  let username = basePrefix + "_" + currentDatestamp;

  console.log(`Newly generated username is ${username}`);

  return username;
}

//Built URL using parametar values. Print and return the URL
function buildTestURL(environment, endpoint, userId) {
  let testURL = `https://${environment}.testsite.com/${endpoint}?user=${userId}`;

  console.log(`Newly built URL is: ${testURL}`);

  return testURL;
}

//Create message using parametar values. Print and return the message
function createTestMessage(testName, status, duration) {
  let testMessage = `${testName}:${status}:${duration}`;

  console.log(`Newly created message is: ${testMessage}`);

  return testMessage;
}

//Calculates, print and return the duration between start and end time
function calculateResponseTime(startTime, endTime) {
  let durationTime = endTime - startTime;

  console.log(`Response time: ${durationTime} ms`);

  return durationTime;
}

//Print statistic of test cases in different state and their successful rate
function calculateSuccessRate(totalTests, passedTests) {
  let failedTests = totalTests - passedTests;
  let successPercentageRate = (passedTests / totalTests) * 100;

  let testSummary = {
    Passed: passedTests,
    Failed: failedTests,
    Total: totalTests,
    "Success Rate": `${successPercentageRate.toFixed(0)}%`,
  };

  console.log(`===== TEST SUMMARY: =====`);
  console.table(testSummary);

  return testSummary;
}

//Calculates an adjusted timeout by multiplying base and multiplier values
function adjustTimeout(baseTimeout, multiplier) {
  let originalTimeout = baseTimeout * multiplier;
  let adjustedTimeout = originalTimeout % 30000;

  if (originalTimeout > 30000) {
    console.log(`Original timeout: ${originalTimeout}ms`);
    console.log(`Adjusted timeout: ${adjustedTimeout}ms`);
    return adjustedTimeout;
  } else {
    console.log(`Original timeout: ${originalTimeout}ms`);
    console.log(`Adjusted timeout: ${adjustedTimeout}ms`);
    return originalTimeout;
  }
}

//Print the progression of incrementing a value
function incrementTestCounter(currentCount) {
  let originalValue = currentCount;
  currentCount++;
  currentCount += 5;

  console.log(`Progression: ${originalValue} -> +1 -> +5 -> ${currentCount}`);

  return currentCount;
}

//Print original value with lower and uppercases and build URL
function processTestEnvironment(environmentName) {
  let normalizedName = environmentName.toLowerCase();
  let baseURL = `https://${normalizedName}.example.com`;
  let displayName = environmentName.toUpperCase();

  let transformationNames = {
    originalName: environmentName,
    normalizedName: normalizedName,
    baseURL: baseURL,
    displayName: displayName,
  };

  console.table(transformationNames);

  return transformationNames;
}

//Print and return original and splitted values of a string
function extractTestInfo(testResultString) {
  let arrayParts = testResultString.split(":");
  let testName = arrayParts[0];
  let status = arrayParts[1];
  let durationString = arrayParts[2].replace("ms", "");
  let duration = Number(durationString);

  let testInfo = {
    testName: testName,
    status: status,
    duration: duration,
  };

  console.log("===== EXTRACTING TEST INFO =====");
  console.log(`Initial string: ${testResultString}
Test name: ${testName}
Status: ${status}
Duration: ${duration} ms`);

  return testInfo;
}

//let initialString = "TestName:PASSED:250ms";
//extractTestInfo(initialString);

//Build a formatted test summary
function buildTestSummary(testName, environment, userCount, avgResponseTime) {
  let totalExecutionTime = userCount * avgResponseTime;

  let summary = `
  ===== TEST SUMMARY =====
  Test Name: ${testName}
  Environment: ${environment}
  User Count: ${userCount}
  Average Response Time: ${avgResponseTime} ms
  Total Execution Time: ${totalExecutionTime} ms
  `;

  console.log(summary);

  return summary;
}
