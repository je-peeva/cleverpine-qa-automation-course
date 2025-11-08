// Comprehensive test result processor
let testNames = ["login_test", "logout_test", "register_test", "password_test"];
let testStatuses = ["PASS", "FAIL", "PASS", "SKIP"];
let executionTimes = [1200, 800, 2500, 0];

let criticalIssues = [];
let slowTests = [];
let successfulTests = [];

for (let i = 0; i < testNames.length; i++) {
  let name = testNames[i];
  let status = testStatuses[i];
  let time = executionTimes[i];

  console.log(`Processing: ${name} (${status}, ${time}ms)`);

  // Use a switch statement for status
  switch (status) {
    case "PASS":
      successfulTests.push(name);
      break;
    case "FAIL":
      criticalIssues.push(`${name} - FAILED`);
      break;
    case "SKIP":
      // Do nothing for skipped tests
      break;
  }

  // Use an if statement for performance
  if (time > 2000) {
    slowTests.push(`${name} (${time}ms)`);
  }
}

console.log("\n=== SUMMARY ===");
console.log("Critical issues:", criticalIssues);
console.log("Slow tests:", slowTests);
console.log("Successful tests:", successfulTests);
