// Complete solution
let testCases = [
  "login_functionality",
  "user_registration", 
  "password_reset",
  "payment_processing",
  "profile_update",
  "logout_functionality"
];

let testResults = ["PASS", "FAIL", "PASS", "FAIL", "SKIP", "PASS"];
let executionTimes = [1200, 850, 2100, 1800, 0, 600];

let passedTests = [];
let failedTests = [];
let skippedTests = [];
let slowTests = [];

console.log("=== INITIAL TEST DATA ===");
console.log(`Total tests: ${testCases.length}`);

testCases.push("cleanup_test");
testResults.push("PASS");
executionTimes.push(300);

console.log(`Updated total: ${testCases.length}`);

console.log("\n=== PROCESSING TEST RESULTS ===");
for (let i = 0; i < testCases.length; i++) {
  let testName = testCases[i];
  let result = testResults[i];
  let time = executionTimes[i];
  
  console.log(`${testName}: ${result} (${time}ms)`);
  
  if (result === "PASS") {
    passedTests.push(testName);
  } else if (result === "FAIL") {
    failedTests.push(testName);
  } else if (result === "SKIP") {
    skippedTests.push(testName);
  }
  
  if (time > 2000) {
    slowTests.push(testName);
  }
}

console.log("\n=== TEST EXECUTION SUMMARY ===");
console.log(`Passed: ${passedTests.length}`);
console.log(`Failed: ${failedTests.length}`);
console.log(`Skipped: ${skippedTests.length}`);
console.log(`Slow tests: ${slowTests.length}`);

let successRate = (passedTests.length / testCases.length * 100).toFixed(1);
console.log(`Success rate: ${successRate}%`);

console.log("\n=== FAILED TEST ANALYSIS ===");
let failedTestsCopy = [];
for (let i = 0; i < failedTests.length; i++) {
  failedTestsCopy.push(failedTests[i]);
}

while (failedTestsCopy.length > 0) {
  let failedTest = failedTestsCopy.pop();
  let priority = "Normal";
  if (failedTest.includes("login")) {
    priority = "Critical";
  } else if (failedTest.includes("payment")) {
    priority = "High";
  }
  console.log(`- Analyzing: ${failedTest} | Priority: ${priority}`);
}

console.log("\n=== PERFORMANCE ANALYSIS ===");
for (let i = 0; i < testCases.length; i++) {
  let testName = testCases[i];
  let time = executionTimes[i];
  let performance;
  
  if (time < 500) {
    performance = "Fast";
  } else if (time <= 1500) {
    performance = "Normal";
  } else if (time <= 3000) {
    performance = "Slow";
  } else {
    performance = "Very Slow";
  }
  
  console.log(`${testName}: ${performance} (${time}ms)`);
}