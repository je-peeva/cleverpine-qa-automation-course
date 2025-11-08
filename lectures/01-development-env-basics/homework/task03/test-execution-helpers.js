export {
  startTestSuite,
  endTestSuite,
  logTestStep,
  generateTestReport,
  debugVariable,
  compareExpectedActual,
  logSystemInfo,
};

let startTime = null;

//Print suite name and print and return start time of the suite
function startTestSuite(suiteName) {
  console.log(`===== STARTING TEST SUITE: ${suiteName} =====`);

  startTime = new Date().toISOString();
  console.log(`Start time: ${startTime}`);

  return startTime;
}

//Print and return the time of suite durration
function endTestSuite(suiteName, startTime) {
  let currentTime = new Date();
  let suiteDurration = currentTime - new Date(startTime);

  // const endTime = new Date();
  // const startTimeDate = new Date(startTime);
  // const duration = endTime.getTime() - startTimeDate.getTime();

  console.log(`===== Duration of ${suiteName} is: ${suiteDurration} ms =====`);
  return suiteDurration;
}

//Print each step number with their description and timestamp
function logTestStep(stepNumber, description, status) {
  let stepExecutionTime = new Date().toISOString();
  let finalResult = `Step ${stepNumber} - ${description} has ${status.toUpperCase()} at ${stepExecutionTime}`;

  if (status.toLowerCase() === "passed") {
    console.log(finalResult);
  } else if (status.toLowerCase() === "failed") {
    console.error(finalResult);
  } else {
    console.warn(finalResult);
  }
}

//Print statistic of test cases in different state and successful rate for passed cases
function generateTestReport(testResults) {
  let passedTestsCount = testResults.passed || 0;
  let failedTestsCount = testResults.failed || 0;
  let skippedTestsCount = testResults.skipped || 0;

  let totalTestsCount = passedTestsCount + failedTestsCount + skippedTestsCount;
  let executedTestsCount = totalTestsCount - skippedTestsCount;
  let passPercentage = (passedTestsCount / executedTestsCount) * 100;

  let testSummary = {
    Passed: passedTestsCount,
    Failed: failedTestsCount,
    Skipped: skippedTestsCount,
    Total: totalTestsCount,
    "Pass %": `${passPercentage}%`,
  };

  console.log(`===== TEST SUMMARY: =====`);
  console.table(testSummary);

  return testSummary;
}

//Print the name, value and type of a variable
function debugVariable(variableName, variableValue) {
  console.log(
    `Debugging variable: ${variableName}.
Value: ${variableValue}.
Type: ${typeof variableValue}.`
  );
}

//Print if two parameters have same values and return boolean result of comparison
function compareExpectedActual(expected, actual) {
  let areValuesTheSame = expected === actual;

  if (areValuesTheSame) {
    console.log(`Values are the same: ${expected}, ${actual}.`);
  } else {
    console.log(`Values are different: ${expected}, ${actual}.`);
  }
  return areValuesTheSame;
}

//Print and return variables, their values and current time
function logSystemInfo(testVariable1, testVariable2) {
  let currentTime = new Date().toISOString();

  let variables = {
    variable1: {
      value: testVariable1,
      type: typeof testVariable1,
    },
    variable2: {
      value: testVariable2,
      type: typeof testVariable2,
    },
  };

  console.log("===== SYSTEM INFO: =====");
  console.table(variables);
  console.log("Current time:", currentTime);

  return {
    currentTime: currentTime,
    variables,
  };
}
