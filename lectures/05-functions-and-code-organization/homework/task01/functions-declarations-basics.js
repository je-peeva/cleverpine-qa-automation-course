export { countPassedTests, formatExecutionTime, findFailedTests };

//Return a count of all passed tests in array
function countPassedTests(results) {
  let passedTestsCount = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === "PASS") {
      passedTestsCount++;
    }
  }
  return passedTestsCount;
}

//Return execution time in ms or seconds
function formatExecutionTime(miliseconds) {
  if (miliseconds < 1000) {
    return miliseconds + "ms";
  } else {
    return (miliseconds / 1000).toFixed(1) + "s";
  }
}

//Return new array including the names of all failed tests
function findFailedTests(testNames, testResults) {
  let failedTestsNames = [];

  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failedTestsNames.push(testNames[i]);
    }
  }
  return failedTestsNames;
}

let testResults = ["PASS", "FAIL", "SKIP"];
let testNames = ["login", "logout", "register"];

console.log(countPassedTests(testResults));
console.log(formatExecutionTime(107));
console.log(formatExecutionTime(1057));
console.log(findFailedTests(testNames, testResults));
