// This file demonstrates how multiple arrays and loop concepts are integrated in JavaScript
// by iterating through arrays, applying conditions and evaluating test results.

import {
  initializeTestData,
  buildTestQueue,
} from "./task01/test-data-managers.js";

import {
  simulateTestExecution,
  retryFailedTests,
  processAllTestUsers,
} from "./task02/test-processing-engine.js";

import { analyzeTestResults } from "./task03/advanced-test-processor.js";

//
function executeFullTestSuite() {
  console.log("===== EXECUTING FULL TEST SUITE =====");

  let [testUsers, testEnvironments, browserTypes] = initializeTestData();
  testUsers.push("user1", "user2", "user3");

  let testQueue = buildTestQueue();
  processAllTestUsers(testUsers);

  let testNames = ["case1_sign_up", "case2_login", "case3_logout"];
  let testResults = ["PASS", "FAIL", "PASS"];
  let executionTimes = [200, 150, 2100];
  let [criticalFailures, slowTests, quickPasses] = analyzeTestResults(
    testNames,
    testResults,
    executionTimes
  );

  console.log("===== FULL TEST SUITE COMPLETED =====");

  return [
    {
      "Total users": testUsers.length,
      "Total test environments": testEnvironments.length,
      "Total browser types": browserTypes.length,
      "Total tests": testQueue.length,
      "Total critical failures": criticalFailures.length,
      "Total slow tests": slowTests.length,
      "Total quick passes": quickPasses.length,
    },
  ];
}

//executeFullTestSuite();

//?
function runTestSuiteDemo() {
  console.log("===== RUNNING TEST DEMO SUITE =====");

  let [testUsers, ,] = initializeTestData();
  testUsers.push("user1", "user2", "user3");

  let testQueue = buildTestQueue();
  processAllTestUsers(testUsers);

  retryFailedTests("critical_login_test");

  let executionResults = simulateTestExecution(testQueue);

  let summary = executeFullTestSuite();

  console.log(executionResults, summary);

  console.log("===== DEMO EXECUTION COMPLETED =====");
}

runTestSuiteDemo();
