import { displayEnvironmentInfo } from "./task01/verify-setup.js";
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

//Runs a complete foundation demo that displays environment info, validates inputs, executes a test suite with steps and results, and logs debugging and system details
function runFoundationDemo() {
  displayEnvironmentInfo();
  validateEmail(testUserEmail);
  validatePassword(testUserPassword);
  generateUniqueEmail("jeTest");
  logTestConfiguration();

  let suiteName = "je test suite";
  let startSuiteTime = startTestSuite(suiteName);

  startTestSuite(suiteName);
  endTestSuite(suiteName, startSuiteTime);
  logTestStep(1, "je test description", "passed");
  logTestStep(2, "je test description", "failed");
  logTestStep(3, "je test description", "blocked");
  logTestStep(4, "je test description", "skipped");

  const testResults = {
    passed: 3,
    failed: 2,
    skipped: 1,
  };

  generateTestReport(testResults);
  debugVariable("jeVariable", "jeString");
  compareExpectedActual("43", 43);
  logSystemInfo("jeTest", 101);
}

function simulateLoginTest() {
  let demoSuiteName = "Login Test Suite";
  let startDemoSuiteTime = startTestSuite(demoSuiteName);
  startTestSuite(demoSuiteName);

  let newEmail = generateUniqueEmail("jeLoginDemo");
  validateEmail(newEmail);

  logTestStep(1, "Go to Login page", "passed");
  logTestStep(2, "Populate valid credentials", "passed");
  logTestStep(3, "Click on Show password icon", "skipped");
  logTestStep(4, "Select Remember me chekcbox", "failed");
  logTestStep(5, "Click on Login button", "passed");

  endTestSuite(demoSuiteName, startDemoSuiteTime);

  const testDemoResults = {
    passed: 3,
    failed: 1,
    skipped: 1,
  };

  generateTestReport(testDemoResults);
}

runFoundationDemo();
