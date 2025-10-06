export { validateCompleteAPIResponse, normalizeTestName };

// Compares expected and actual status codes using strict and loose equality
function validateStatusCode(expectedCode, actualCode) {
  let strictMatch = expectedCode === actualCode;
  let looseMatch = expectedCode == actualCode;

  console.log(`Expected: ${expectedCode}
Actual: ${actualCode}
Strict match: ${strictMatch}
Loose Match: ${looseMatch}`);

  return strictMatch;
}

//Validate responce time
function validateResponseTime(actualTime, maxAllowedTime) {
  let isActualTimeAllowed = actualTime <= maxAllowedTime;
  console.log(
    `Response time ${actualTime}ms is within limit ${maxAllowedTime}ms: ${isActualTimeAllowed}`
  );

  return isActualTimeAllowed;
}

//Validate performance range
function validatePerformanceRange(responseTime, minTime, maxTime) {
  let isWithinRange = responseTime >= minTime && responseTime <= maxTime;

  console.log(
    `Response time ${responseTime}ms is within allowed range between ${minTime}ms and ${maxTime}ms: ${isWithinRange}.`
  );

  return isWithinRange;
}

//Compare versions
function compareVersions(currentVersion, requiredVersion) {
  let isDifferent = currentVersion != requiredVersion;

  console.log(
    `Current version ${currentVersion} and required one ${requiredVersion} are different: ${isDifferent}.`
  );

  return isDifferent;
}

//Validate error message
function validateErrorMessage(errorMessage) {
  let lowercaseMessage = errorMessage.toLowerCase();
  let containsError = lowercaseMessage.includes("error");
  let errorPosition = -1;

  if (containsError) {
    errorPosition = lowercaseMessage.indexOf("error");
    console.log(`Position of 'error' is: ${errorPosition}`);
  } else {
    console.log(`Error message ${errorMessage} does not contain 'error' text.`);
  }
  return containsError;
}

//Extract user id value, does not handle missing "id" in the parameter
function extractUserIdFromResponse(responseText) {
  let idPosition = responseText.indexOf("ID:");
  let responseId = responseText.slice(idPosition + "ID:".length).trim();

  console.log(`Extracted ID: ${responseId}`);

  return responseId;
}

//Validate email format
function validateEmailFormat(email) {
  let validateEmail = email.includes("@") && email.includes(".");
  let atIndex = email.indexOf("@");
  let lastDotIndex = email.lastIndexOf(".");
  let atBeforeDot = atIndex < lastDotIndex;

  console.log(
    `Email ${email} is valid. 
Has @ at ${atIndex} position.
Has . at ${lastDotIndex} position
and @ is before .: ${atBeforeDot}.`
  );

  return validateEmail && atBeforeDot;
}

//Process test data csv
function processTestDataCSV(csvString) {
  let testNames = csvString.split(",");

  console.log(`Original string: ${csvString}`);
  console.log(`Array of test names: ${testNames}`);

  return testNames;
}

//Slice the parameter formatted value till 20th character
function normalizeTestName(testName) {
  let trimmedValue = testName.trim();
  let lowerCasedValue = trimmedValue.toLowerCase();
  let spacesReplacedValue = lowerCasedValue.replace(/ /g, "_");
  let limitedValue = spacesReplacedValue.slice(0, 20);

  console.log(`Trimmed value: ${trimmedValue}
Lowercased value: ${lowerCasedValue}
Spaces replaced value: ${spacesReplacedValue}
Final name limited to 20 chars: ${limitedValue}`);

  return limitedValue;
}

function validateCompleteAPIResponse(
  statusCode,
  responseTime,
  hasData,
  errorCount
) {
  let basicCheck =
    statusCode === 200 && responseTime < 1000 && hasData === true;
  let noErrors = errorCount === 0;
  let isValidResponse = basicCheck && noErrors;

  let expectedResult = {
    "Status Code == 200": statusCode === 200,
    "Response Time < 1000": responseTime < 1000,
    "Has Data == true": hasData === true,
    "Error Count == 0": noErrors,
    "Final Result": isValidResponse,
  };

  console.table(expectedResult);

  return isValidResponse;
}

//Verify role access based on role, authentication and environemnt values
function checkTestEnvironmentAccess(userRole, isAuthenticated, environment) {
  let roleAllowed = userRole === "admin" || userRole === "tester";
  let isAuth = isAuthenticated === true;
  let envAllowed = environment === "dev" || environment === "staging";

  let accessGranted = roleAllowed && isAuth && envAllowed;

  let summary = {
    "Role is allowed": roleAllowed,
    "Is authenticated": isAuth,
    "Environment is allowed": envAllowed,
    "Access Granted": accessGranted,
  };

  console.table(summary);

  return accessGranted;
}

//Verify test state based on failed, cancelled and timeout cases
function validateTestNotFailed(hasErrors, isCancelled, isTimeout) {
  let noErrors = !hasErrors;
  let notCancelled = !isCancelled;
  let notTimeout = !isTimeout;

  let testPassed = noErrors && notCancelled && notTimeout;

  let summary = {
    "Has no errors": noErrors,
    "Is not cancelled": notCancelled,
    "Is not timeout": notTimeout,
    "Test Passed": testPassed,
  };

  console.table(summary);

  return testPassed;
}

function complexValidationScenario(
  statusCode,
  responseTime,
  userRole,
  dataCount,
  environment
) {
  let basicCheck = statusCode === 200 && responseTime < 500 && dataCount > 0;
  let roleAllowed = userRole === "admin" && environment === "dev";

  let isValidScenario = basicCheck || roleAllowed;

  console.log(
    `Basic check if (statusCode === 200 && responseTime < 500): ${basicCheck}
Role verification if (userRole === "admin" && environment === "dev"): ${roleAllowed}
Is Scenario valid: ${isValidScenario}`
  );

  return isValidScenario;
}
