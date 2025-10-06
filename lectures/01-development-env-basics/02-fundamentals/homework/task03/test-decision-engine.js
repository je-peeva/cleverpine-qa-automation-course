export {
  handleTestEnvironment,
  determineTestAction,
  processTestResults,
  formatTestDuration,
  getTestStatus,
};

//Verify taken action based on the test result and retry count
function determineTestAction(testResult, retryCount) {
  if (testResult === "pass") {
    console.log("Test passed.");
    return "complete";
  } else if (testResult === "fail" && retryCount < 3) {
    console.log("Test failed, but retry count is less than 3.");
    return "retry";
  } else if (testResult === "fail" && retryCount >= 3) {
    console.log("Test failed and retry count exceeded.");
    return "abort";
  } else {
    console.log("Unknown test result.");
    return "investigate";
  }
}

//Validates user input: email, password, and age
function validateTestData(email, password, age) {
  if (email && email.includes("@")) {
    console.log("Email is valid.");

    if (password.length >= 8) {
      console.log("Password length is valid.");

      if (age >= 18 && age <= 100) {
        console.log("Age is within valid range.");
        return "valid";
      } else {
        console.log("Age must be between 18 and 100.");
        return "Age must be between 18 and 100";
      }
    } else {
      console.log("Password must be at least 8 characters.");
      return "Password must be at least 8 characters";
    }
  } else {
    console.log("Invalid email.");
    return "Invalid email";
  }
}

//Calculates test performance and assigns a grade
function processTestResults(totalTests, passedTests, environment) {
  let failedTests = totalTests - passedTests;
  let successRate = (passedTests / totalTests) * 100;

  let grade;

  if (successRate >= 95) {
    grade = "excellent";
  } else if (successRate >= 85) {
    grade = "good";
  } else if (successRate >= 70) {
    grade = "acceptable";
  } else {
    grade = "needs improvement";
  }

  if (environment === "production") {
    console.log("Environment is production. Applying +5% to thresholds.");
  }

  let testSummary = {
    Passed: passedTests,
    Failed: failedTests,
    Total: totalTests,
    "Success Rate": `${successRate.toFixed(0)}%`,
    "Final Grade": grade,
  };

  console.log(`===== TEST SUMMARY: =====`);
  console.table(testSummary);

  return testSummary;
}

//Return test status
function getTestStatus(isPassed) {
  let status = isPassed ? "PASSED" : "FAILED";

  console.log("Test Status:", status);

  return status;
}

//Determine timeout
function determineTimeout(environment) {
  let timeout = environment === "production" ? 30000 : 10000;

  console.log(`Environment: ${environment}
Timeout: ${timeout}`);

  return timeout;
}

//Format test duration into ms or s
function formatTestDuration(durationMs) {
  let formattedDuration =
    durationMs < 1000 ? durationMs + "ms" : durationMs / 1000 + "s";

  console.log(`Original duration: ${durationMs}
Formatted Duration: ${formattedDuration}`);

  return formattedDuration;
}

//Determine test priority level
function getTestPriority(errorCount, responseTime) {
  let priorityLevel =
    errorCount > 0 ? "high" : responseTime > 1000 ? "medium" : "low";

  console.log(`Error Count: ${errorCount}
Response Time: ${responseTime}
Priority Level: ${priorityLevel}`);

  return priorityLevel;
}

//Handle different environments with custom configs using switch-case
function handleTestEnvironment(environment) {
  let config;

  switch (environment) {
    case "development":
      console.log("Using dev settings");
      config = { timeout: 5000, debugMode: true };
      break;
    case "staging":
      console.log("Using staging settings");
      config = { timeout: 15000, debugMode: true };
      break;
    case "production":
      console.log("Using production settings");
      config = { timeout: 30000, debugMode: false };
      break;
    default:
      console.log("Unknown environment");
      config = { timeout: 10000, debugMode: false };
  }

  return config;
}

//Process HTTP status codes and return appropriate messages
function processHTTPStatusCode(statusCode) {
  let message;

  switch (statusCode) {
    case 200:
      message = "Success - Request completed";
      break;
    case 201:
      message = "Created - Resource created successfully";
      break;
    case 400:
      message = "Bad Request - Check your data";
      break;
    case 401:
      message = "Unauthorized - Authentication required";
      break;
    case 404:
      message = "Not Found - Resource doesn’t exist";
      break;
    case 500:
      message = "Server Error - Internal server error";
      break;
    default:
      message = "Unexpected status code: " + statusCode;
  }

  console.log("Status code Interpretation:", message);
}

//
function selectTestDataSet(testType) {
  let data;

  switch (testType) {
    case "login":
      data = [
        { username: "jeTest1", password: "pass1" },
        { username: "jeTest2", password: "pass2" },
      ];
      break;
    case "registration":
      data = [
        { email: "jeTest1@example.com", password: "123456" },
        { email: "jeTest2@example.com", password: "abcdef" },
      ];
      break;
    case "api":
      data = [
        { endpoint: "/api/users", method: "GET" },
        { endpoint: "/api/posts", method: "POST" },
      ];
      break;
    case "performance":
      data = [
        { scenario: "loadTest", users: 100 },
        { scenario: "stressTest", users: 1000 },
      ];
      break;
    default:
      data = [];
  }

  console.log(`Selected data set for '${testType}': ${data.length} items`);

  return data;
}

//Verify if a user is allowed based on role, environment, permissions, and test type
function complexTestDecision(userRole, environment, testType, hasPermission) {
  let decision = {
    allowed: false,
    reason: "",
    logLevel: "none",
  };

  if (userRole === "admin") {
    console.log("Role is admin");

    if (environment === "production") {
      console.log("Environment is production");

      if (testType === "critical") {
        console.log("Test type is critical - allow with extra logging");
        decision.allowed = true;
        decision.reason = "Admin running critical test in production";
        decision.logLevel = "extra";
      } else {
        console.log(
          "Standard test in production - allow with standard logging"
        );
        decision.allowed = true;
        decision.reason = "Admin running non-critical test in production";
        decision.logLevel = "standard";
      }
    } else {
      console.log("Non-production - allow all tests");
      decision.allowed = true;
      decision.reason = "Admin in non-production environment";
      decision.logLevel = "standard";
    }
  } else if (userRole === "tester") {
    console.log("Role is tester");

    if (hasPermission === true) {
      console.log("Tester has permission");

      if (environment !== "production") {
        console.log("Environment is not production - allow");
        decision.allowed = true;
        decision.reason = "Tester with permission in non-production";
        decision.logLevel = "minimal";
      } else {
        console.log("Production access denied for tester");
        decision.allowed = false;
        decision.reason = "Tester with permission denied in production";
        decision.logLevel = "none";
      }
    } else {
      console.log("Tester lacks permission - deny access");
      decision.allowed = false;
      decision.reason = "Tester without permission";
      decision.logLevel = "none";
    }
  } else {
    console.log("Unknown or unauthorized role - access denied");
    decision.allowed = false;
    decision.reason = "Access denied for role: " + userRole;
    decision.logLevel = "none";
  }

  return decision;
}
