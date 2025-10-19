// Advanced Test Analytics Dashboard Exercise

// 1. TEST DATA SETUP
// We have complex test data in arrays that need processing
let rawTestData = [
  ["login_functionality", "PASS", 245, "HIGH"],
  ["user_registration", "FAIL", 1200, "HIGH"],
  ["password_reset", "PASS", 800, "MEDIUM"],
  ["profile_update", "PASS", 450, "MEDIUM"],
  ["admin_dashboard", "FAIL", 2100, "LOW"],
  ["logout_process", "PASS", 180, "LOW"],
  ["payment_gateway", "FAIL", 1800, "HIGH"],
  ["data_export", "SKIP", 0, "MEDIUM"],
];

console.log("=== RAW TEST DATA LOADED ===");
console.log(`Total test cases: ${rawTestData.length}`);

// 2. DESTRUCTURING PRACTICE
// TODO: Use destructuring to extract the first test's information
// Extract name, status, time, and priority from rawTestData[0]
// Use destructuring assignment: let [name, status, time, priority] = ...
let [testName, testStatus, time, priority] = rawTestData[0];
console.log(
  `Name: ${testName}, Status: ${testStatus}, Time: ${time}, Priority: ${[priority]}`
);

console.log("\n=== DESTRUCTURING DEMO ===");
// Your destructuring code here
// Display the extracted values

console.log({
  Name: testName,
  Status: testStatus,
  Time: time + " ms",
  Priority: priority,
});

// 3. TRANSFORM DATA WITH MAP
// TODO: Use map() to create formatted test reports
// Transform each test array into a readable string format
// Format: "✅ login_functionality (245ms) - HIGH priority" or "❌ user_registration (1200ms) - HIGH priority"

console.log("\n=== FORMATTED TEST REPORTS ===");
let formattedReports = rawTestData.map(function (test) {
  // Your transformation logic here
  // Use destructuring to get values: let [name, status, time, priority] = test;
  let [name, testStatus, time, priority] = test;

  // Use conditional logic to add appropriate icons
  let icon = testStatus === "PASS" ? "✔" : testStatus === "FAIL" ? "❌" : "⚠";
  // Return formatted string

  return `${icon} ${name} (${time}ms) - ${priority} priority`;
});

// Display all formatted reports

formattedReports.forEach(function (report) {
  console.log(report);
});

// 4. FILTER DATA BY CRITERIA
// TODO: Use filter() to create different views of the data

console.log("\n=== FILTERED VIEWS ===");

// Filter 1: Get only failed tests
// Your filtering logic here
let failedTests = rawTestData.filter(
  ([, testStatus, ,]) => testStatus === "FAIL"
);

// Filter 2: Get high priority tests only
let highPriorityTests = rawTestData.filter(function ([, , , priority]) {
  // Your filtering logic here
  return priority === "HIGH";
});

// Filter 3: Get slow tests (execution time > 1000ms)
let slowTests = rawTestData.filter(function ([, , time]) {
  // Your filtering logic here
  return time > 1000;
});

console.log(`Failed tests: ${failedTests.length}`);
console.log(`High priority tests: ${highPriorityTests.length}`);
console.log(`Slow tests: ${slowTests.length}`);

// 5. AGGREGATE DATA WITH REDUCE
// TODO: Use reduce() to calculate comprehensive statistics

console.log("\n=== ANALYTICS DASHBOARD ===");

// Reduce 1: Count tests by status
let statusCounts = rawTestData.reduce(
  function (counts, currentTest) {
    // Your reduce logic here
    // Use destructuring to get status
    let [, testStatus, ,] = currentTest;

    // Increment appropriate counter
    // Return updated counts object

    if (!counts[testStatus]) {
      counts[testStatus] = 1;
    } else {
      counts[testStatus]++;
    }

    return counts;
  },
  { PASS: 0, FAIL: 0, SKIP: 0 }
);

console.log("Status counts:", statusCounts);

// Reduce 2: Calculate average execution time for passed tests only
let passedTestsStats = rawTestData.reduce(
  function (stats, currentTest) {
    // Your reduce logic here
    // Only include PASS tests in calculations
    // Track totalTime and count

    let [, testStatus, time] = currentTest;

    if (testStatus === "PASS") {
      stats.totalTime += time;
      stats.count++;
    }

    return stats;
  },
  { totalTime: 0, count: 0 }
);

let averagePassTime =
  passedTestsStats.count > 0
    ? passedTestsStats.totalTime / passedTestsStats.count
    : 0;

// Reduce 3: Find the slowest test
let slowestTest = rawTestData.reduce(function (slowest, currentTest) {
  // Your reduce logic here
  // Compare execution times and return the slower one

  let [, , time] = currentTest;
  let [, , slowestTime] = slowest;

  return time > slowestTime ? currentTest : slowest;
});

console.log("Status breakdown:", statusCounts);
console.log(
  `Average execution time for passed tests: ${averagePassTime.toFixed(1)}ms`
);
// Use destructuring to display slowest test info

let [slowestName, slowestStatus, slowestTime, slowestPriority] = slowestTest;

console.log(
  `Slowest test: ${slowestName}, ${slowestStatus}, (${slowestTime}ms) - ${slowestPriority} priority`
);

// 6. SORT DATA FOR REPORTS
// TODO: Use sort() to create ordered views

console.log("\n=== SORTED REPORTS ===");

// Sort 1: Sort all tests by execution time (fastest first)
let testsBySpeed = rawTestData.slice().sort(function (testA, testB) {
  // Your sorting logic here
  // Use destructuring to get execution times
  let [, , timeA] = testA;
  let [, , timeB] = testB;

  // Return comparison result
  return timeA - timeB;
});

let top3Elements = testsBySpeed.slice(0, 3);
console.log("Tests sorted by speed (fastest first):", top3Elements);
// Display first 3 tests using destructuring

// Sort 2: Sort failed tests by priority (HIGH first)
let priorityOrder = { HIGH: 1, MEDIUM: 2, LOW: 3 };
let failedByPriority = failedTests.slice().sort(function (testA, testB) {
  // Your sorting logic here
  // Use destructuring to get priorities
  // Use priorityOrder object for comparison

  let [, , , priorityA] = testA;
  let [, , , priorityB] = testB;

  return priorityOrder[priorityA] - priorityOrder[priorityB];
});

console.log("Failed tests by priority:", failedByPriority);
// Display sorted failed tests

// 7. CHAINING METHODS CHALLENGE
// TODO: Combine multiple array methods in one chain
// Goal: Get names of passed tests that took less than 500ms, sorted alphabetically

console.log("\n=== METHOD CHAINING CHALLENGE ===");
let quickPassedTests = rawTestData
  // Step 1: Filter for passed tests with time < 500ms
  .filter(function (test) {
    // Your filter logic
    let [, testStatus, time] = test;
    return testStatus === "PASS" && time < 500;
  })

  // Step 2: Map to get just the names
  .map(function (test) {
    // Your map logic
    let [name, , ,] = test;
    return name;
  })

  // Step 3: Sort alphabetically
  .sort();

console.log("Quick passed tests (alphabetical):", quickPassedTests);

// 8. BONUS: COMPLEX ANALYSIS
// TODO: Create a comprehensive dashboard summary
console.log("\n=== EXECUTIVE DASHBOARD ===");

// Calculate and display:
// - Overall success rate percentage
let totalTests = rawTestData.length;
let successRate = (statusCounts.PASS / totalTests).toFixed(2) * 100;

// - Number of critical issues (failed HIGH priority tests)
let criticalFails = failedTests.filter(
  ([, , , priority]) => priority === "HIGH"
).length;

// - Performance score (percentage of tests under 1000ms)
let fastTest = rawTestData.filter(
  ([, , time]) => time > 0 && time < 1000
).length;
let performanceScore = (fastTest / totalTests) * 100;

console.log("Success rate:", successRate);
console.log("Critical issues with high priority:", criticalFails);
console.log("Performace score(tests < 1000ms):", performanceScore);
// - Recommendations based on the data
// Your analysis code here
