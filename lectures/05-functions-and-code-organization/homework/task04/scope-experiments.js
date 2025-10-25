export { runTest };

let testEnvironment = "staging";
let maxRetries = 3;

//Return env, result and atttempts count for executing of a single test
function runTest(testName) {
  let attempts = Math.floor(Math.random() * 5) + 1;
  let testResult;

  if (attempts <= maxRetries) {
    testResult = "PASS";
  } else {
    testResult = "FAIL";
  }

  // Uncommenting this line causes an error because the variable is function-scoped
  // console.log(attempts);

  return {
    TestName: testName,
    Environment: testEnvironment,
    Attempts: attempts,
    Result: testResult,
  };
}

//Assign global parameter value to a function parameter
function configureRetries(newMaxRetries) {
  maxRetries = newMaxRetries;

  return maxRetries;
}

console.log(`Initial values of global variables:
Test environemnt: ${testEnvironment}
Max retries: ${maxRetries}`);

configureRetries(7);
console.log(`Updated values of global variables:
Test environemnt: ${testEnvironment}
Max retries: ${maxRetries}`);

console.log(runTest("jeTest1"));
console.log(runTest("jeTest2"));
console.log(runTest("jeTest3"));

// Uncommenting this line causes an error because the variable is function-scoped
// console.log(attempts);
