import { displayEnvironmentInfo } from "./task01/verify-setup.js";
import { loadEnvironmentConfig } from "./task02/environment-config.js";
import {
  testUserEmail,
  testUserPassword,
  validateEmail,
  validatePassword,
  generateUniqueEmail,
  logTestConfiguration,
} from "./task02/test-data-config.js";
import {
  startTestSuite,
  endTestSuite,
  logTestStep,
  generateTestReport,
  debugVariable,
  compareExpectedActual,
  logSystemInfo,
} from "./task03/test-execution-helpers.js";

// This script demonstrates a full foundation-level test workflow.
// It includes environment verification, test data setup and validation,
// and a simulated login test suite using helper functions from previous tasks.

function runFoundationDemo() {
  console.log("===== RUNNING FOUNDATION DEMO =====");

  displayEnvironmentInfo();
  loadEnvironmentConfig();
  logTestConfiguration();

  validateEmail(testUserEmail);
  validatePassword(testUserPassword);

  debugVariable("jeVariable", testUserEmail);
  compareExpectedActual("SecurePassword123", testUserPassword);
  logSystemInfo(testUserEmail, testUserPassword);
}

function simulateLoginTest() {
  console.log("===== SIMMULATING LOGIN TEST =====");

  let demoSuiteName = "Login Test Suite";
  let startDemoSuiteTime = startTestSuite(demoSuiteName);

  let demoEmail = generateUniqueEmail("jeLoginDemo");
  let isEmailValid = validateEmail(demoEmail);

  logTestStep(1, "Go to Login page", "passed");
  logTestStep(
    2,
    "Populate valid credentials",
    isEmailValid ? "passed" : "failed"
  );
  logTestStep(3, "Click on Show password icon", "skipped");
  logTestStep(4, "Select Remember me chekcbox", "failed");
  logTestStep(5, "Click on Login button", "passed");

  let duration = endTestSuite(demoSuiteName, startDemoSuiteTime);

  let testDemoResults = {
    passed: 3,
    failed: isEmailValid ? 0 : 1,
    skipped: 1,
  };

  generateTestReport(testDemoResults);
  console.log(`Test duite ${demoSuiteName} completed in ${duration}ms.`);
}

runFoundationDemo();
simulateLoginTest();
