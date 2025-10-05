export {
  testUserEmail,
  testUserPassword,
  validateEmail,
  validatePassword,
  generateUniqueEmail,
  logTestConfiguration,
};

const BASE_URL = "https://demo-qa-site.com";
const DEFAULT_TIMEOUT = 30000;
const API_ENDPOINTS = {
  login: "https://demo-qa-site.com/login",
  users: "https://demo-qa-site.com/users",
  products: "https://demo-qa-site.com/products",
};

let testUserEmail = "testuser@example.com";
let testUserPassword = "SecurePassword123";
let adminUserEmail = "admin@example.com";
let expectedWelcomeMessage = "Welcome to your dashboard";

let enabledDebugMode = true;
let areRunningSlowTests = false;
let isUsedTestData = true;

//Validate if email contains @ and . Print the result and return bool statement
function validateEmail(email) {
  let isValidEmail = email.includes("@") && email.includes(".");

  console.log(
    isValidEmail
      ? `User email ${email} is valid.`
      : `User email ${email} is invalid.`
  );

  return isValidEmail;
}

//Validate if password length is 8 symbols, print the result and return bool statement
function validatePassword(password) {
  let isPassLengthValid = password.length >= 8;

  console.log(
    isPassLengthValid
      ? "Password length meets the requirements."
      : "Password length doesn't meet the requirements."
  );
  return isPassLengthValid;
}

//Generate new email, print and return the result
function generateUniqueEmail(baseName) {
  let currentTimestamp = Date.now();
  let newEmail = baseName + currentTimestamp + "@testmail.com";

  console.log("Newly generated email is:", newEmail);

  return newEmail;
}

//Print all consts, variables, their values and current timestamp
function logTestConfiguration() {
  let currentDatestamp = new Date().toLocaleString();

  console.log({
    "Current Time Of Configuration": currentDatestamp,
    "Base URL": BASE_URL,
    "Default Timeout": DEFAULT_TIMEOUT,
    "API Endpoints": API_ENDPOINTS,
    "Test User Email": testUserEmail,
    "Test User Password": testUserPassword,
    "Admin User Email": adminUserEmail,
    "Expected Welcome Message": expectedWelcomeMessage,
    "Debug Mode Enabled": enabledDebugMode,
    "Run Slow Tests": areRunningSlowTests,
    "Use Test Data": isUsedTestData,
  });
}
