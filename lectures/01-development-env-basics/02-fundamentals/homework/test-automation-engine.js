import {
  generateTestUserName,
  buildTestURL,
  createTestMessage,
  calculateSuccessRate,
  incrementTestCounter,
  processTestEnvironment,
  extractTestInfo,
  buildTestSummary,
} from "./task01/test-data-generators.js";

import {
  validateCompleteAPIResponse,
  normalizeTestName,
} from "./task02/test-validators.js";

import {
  handleTestEnvironment,
  determineTestAction,
  processTestResults,
  formatTestDuration,
  getTestStatus,
} from "./task03/test-decision-engine.js";

// This file integrates previously implemented functions from homework 2 - task01,task02 and task03, providing a complete solution that brings together environment handling, test status processing, data selection, and complex decision logic.

function executeTestScenario(
  scenarioName,
  environment,
  userRole,
  expectedResults
) {
  console.log(`===== EXECUTING TEST SCENARIO ${scenarioName} =====`);

  let testUserName = generateTestUserName(userRole);
  let endpoint = scenarioName.toLowerCase().replace(/ /g, "_");
  let testURL = buildTestURL(environment, endpoint, testUserName);

  let { statusCode, responseTime, hasData, errorCount } = expectedResults;

  let isValidResponse = validateCompleteAPIResponse(
    statusCode,
    responseTime,
    hasData,
    errorCount
  );

  let configSettings = handleTestEnvironment(environment);

  let testResult = isValidResponse ? "pass" : "fail";
  let retryCount = expectedResults.retryCount || 0;
  let nextAction = determineTestAction(testResult, retryCount);

  const result = {
    scenarioName,
    environment,
    userRole,
    testUserName,
    testURL,
    validationSummary: {
      statusCode,
      responseTime,
      hasData,
      errorCount,
      isValidResponse,
    },
    configSettings,
    testResult,
    retryCount,
    nextAction,
  };

  console.log(`===== SCENARIO ${scenarioName} COMPLETED =====\n`);
  console.log(result);

  return result;
}

// let jeExpectedResults = {
//   statusCode: 200,
//   responseTime: 850,
//   hasData: true,
//   errorCount: 0,
//   retryCount: 1,
// };

// executeTestScenario("User Login", "staging", "admin", jeExpectedResults);

function runTestAutomationDemo() {
  console.log("====== RUNNING TEST AUTOMATION DEMO ======\n");

  const scenarios = [
    {
      scenarioName: "Login",
      environment: "development",
      userRole: "admin",
      expectedResults: {
        statusCode: 200,
        responseTime: 850,
        hasData: true,
        errorCount: 0,
        retryCount: 0,
      },
    },
    {
      scenarioName: "API",
      environment: "staging",
      userRole: "tester",
      expectedResults: {
        statusCode: 500,
        responseTime: 1200,
        hasData: false,
        errorCount: 2,
        retryCount: 1,
      },
    },
    {
      scenarioName: "Performance",
      environment: "production",
      userRole: "guest",
      expectedResults: {
        statusCode: 200,
        responseTime: 700,
        hasData: true,
        errorCount: 0,
        retryCount: 0,
      },
    },
  ];

  let passedTests = 0;
  let totalTests = 0;

  for (let scenario of scenarios) {
    totalTests++;

    let normalizedScenarioName = normalizeTestName(scenario.scenarioName);

    // Execute the main test
    const result = executeTestScenario(
      normalizedScenarioName,
      scenario.environment,
      scenario.userRole,
      scenario.expectedResults
    );

    // Log result message
    const testStatus = getTestStatus(result.validationSummary.isValidResponse);
    const testMessage = createTestMessage(
      normalizedScenarioName,
      testStatus,
      scenario.expectedResults.responseTime
    );
    console.log(testMessage);

    // Extract and reprocess message
    extractTestInfo(testMessage);

    if (result.validationSummary.isValidResponse) passedTests++;

    // Environment string manipulation demo
    processTestEnvironment(scenario.environment);

    // Arithmetic demo
    incrementTestCounter(passedTests);
    formatTestDuration(scenario.expectedResults.responseTime);
  }

  // Final metrics
  const summary = calculateSuccessRate(totalTests, passedTests);

  // Build and print final summary string
  buildTestSummary(
    "AutomationDemo",
    "multi-env",
    totalTests,
    Math.round((summary["Success Rate"].replace("%", "") / 100) * 1000)
  );

  // Grade test results
  processTestResults(totalTests, passedTests, "production");

  console.log("\n====== DEMO COMPLETED ======\n");
}

runTestAutomationDemo();
