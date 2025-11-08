// Scenario 1: API Response Validation
let responseStatuses = [200, 400, 200, 500];
let responseData = [
  "user created",
  "invalid input",
  "user updated",
  "server error",
];
let responseTimes = [250, 100, 180, 1000];

let passedTests = 0;
let failedTests = 0;
let performanceIssues = [];

for (let i = 0; i < responseStatuses.length; i++) {
  let status = responseStatuses[i];
  let data = responseData[i];
  let time = responseTimes[i];

  console.log(`\nValidating Response #${i + 1}`);
  console.log(`Status: ${status}, Time: ${time}ms, Data: "${data}"`);

  // Check status
  if (status >= 200 && status < 300) {
    console.log("Result: ✅ PASS");
    passedTests++;
  } else {
    console.log("Result: ❌ FAIL");
    failedTests++;
  }

  // Check performance
  if (time > 500) {
    performanceIssues.push(`Response #${i + 1} was too slow: ${time}ms`);
  }
}

console.log(`\n=== FINAL RESULTS ===`);
console.log(`Passed: ${passedTests}, Failed: ${failedTests}`);
console.log(`Performance issues found: ${performanceIssues.length}`);
if (performanceIssues.length > 0) {
  console.log("Details:", performanceIssues);
}
