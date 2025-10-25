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
  login: "api/login",
  users: "api/users",
  products: "api/products",
};

let testUserEmail = "test.user@example.com";
let testUserPassword = "SecurePassword123";
let adminUserEmail = "admin@example.com";
let expectedWelcomeMessage = "Welcome to your dashboard";

let debugMode = true;
let runSlowTests = false;
let useTestData = true;

//Validate if email contains @ and . Print the result and return bool statement
function validateEmail(email) {
  let isValidEmail = email.includes("@") && email.includes(".");

  console.log(
    `Validation for email "${email}": ${isValidEmail ? "Pass" : "Fail"}`
  );

  console.log(
    isValidEmail
      ? `User email ${email} is valid.`
      : `User email ${email} is invalid.`
  );

  return isValidEmail;
}

// validateEmail(testUserEmail);
// validateEmail("je.");

//Validate if password length is 8 symbols, print the result and return bool statement
function validatePassword(password) {
  let isPassLengthValid = password.length >= 8;

  console.log(`Password length check: ${isPassLengthValid ? "Pass" : "Fail"}`);

  console.log(
    isPassLengthValid
      ? "Password length meets the requirements."
      : "Password length doesn't meet the requirements."
  );

  return isPassLengthValid;
}

// validatePassword(testUserPassword);
// validatePassword("smth");

//Generate new email, print and return the result
function generateUniqueEmail(baseName) {
  let currentTimestamp = Date.now();
  let newEmail = baseName + currentTimestamp + "@testmail.com";

  console.log("Newly generated email is:", newEmail);

  return newEmail;
}

//generateUniqueEmail("je");

//Print all consts, variables, their values and current timestamp
function logTestConfiguration() {
  // toLocaleString() -> 10/23/2025, 8:38:50 AM
  let currentDatestamp = new Date().toLocaleString();
  //let currentDatestamp = new Date().toISOString(); -> 2025-10-23T05:38:50.986Z

  console.log("===== TEST CONFIGURATION =====");
  console.log("Current Time Of Configuration", currentDatestamp);
  console.table({
    "Base URL": BASE_URL,
    "Default Timeout": DEFAULT_TIMEOUT,
    "Login URL": API_ENDPOINTS.login,
    "Users URL": API_ENDPOINTS.users,
    "Products URL": API_ENDPOINTS.products,
    "Test User Email": testUserEmail,
    "Test User Password": testUserPassword,
    "Admin User Email": adminUserEmail,
    "Expected Welcome Message": expectedWelcomeMessage,
    "Debug Mode Enabled": debugMode,
    "Run Slow Tests": runSlowTests,
    "Use Test Data": useTestData,
  });
}

//logTestConfiguration();
