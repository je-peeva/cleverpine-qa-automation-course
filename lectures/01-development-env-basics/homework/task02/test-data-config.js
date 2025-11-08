/**
 * This file contains the test data configuration for the QA automation course.
 * It includes constants, test user credentials, and feature flags.
 */

// --- Constants ---

// The base URL for the demo application.
const BASE_URL = "https://demo-qa-site.com";

// The default timeout for waiting for elements, in milliseconds.
const DEFAULT_TIMEOUT = 30000;

// A collection of API endpoints for the application.
const API_ENDPOINTS = {
  login: "/api/login",
  users: "/api/users",
  products: "/api/products",
};

// --- Test User Data ---

// Using `let` for user credentials that might be reassigned in different test scenarios.
let testUserEmail = "test.user@example.com";
let testUserPassword = "aVerySecurePassword123";
let adminUserEmail = "admin.user@example.com";

// Expected text content for assertions.
let expectedWelcomeMessage = "Welcome to your dashboard";

// --- Feature Flags ---

// Boolean flags to control test execution behavior.
let debugMode = true;
let runSlowTests = false;
let useTestData = true;

// --- Data Validation Functions ---

/**
 * Validates if an email address contains the '@' and '.' characters.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, otherwise false.
 */
function validateEmail(email) {
  const isValid = email.includes("@") && email.includes(".");
  console.log(`Validation for email "${email}": ${isValid ? "Pass" : "Fail"}`);
  return isValid;
}

/**
 * Validates if a password meets the minimum length requirement.
 * @param {string} password - The password to validate.
 * @returns {boolean} - True if the password is 8 or more characters long, otherwise false.
 */
function validatePassword(password) {
  const isValid = password.length >= 8;
  console.log(`Password length check: ${isValid ? "Pass" : "Fail"}`);
  return isValid;
}

/**
 * Generates a unique email address by appending a timestamp.
 * @param {string} baseName - The base name for the email (e.g., 'testuser').
 * @returns {string} - A unique email address.
 */
function generateUniqueEmail(baseName) {
  const timestamp = Date.now();
  const uniqueEmail = `${baseName}+${timestamp}@testmail.com`;
  console.log(`Generated unique email: ${uniqueEmail}`);
  return uniqueEmail;
}

// --- Configuration Logging ---

/**
 * Logs all current test data constants and variables to the console.
 */
function logTestConfiguration() {
  console.log("--- Current Test Configuration ---");
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Default Timeout: ${DEFAULT_TIMEOUT}`);
  console.log(`Test User Email: ${testUserEmail}`);
  console.log(`Debug Mode: ${debugMode}`);
  console.log("---------------------------------");
}

// --- Demo/Test Calls ---
/*
logTestConfiguration();
validateEmail(testUserEmail); // valid
validateEmail(adminUserEmail); // valid admin email
validateEmail("invalidemail"); // invalid
validatePassword(testUserPassword); // valid
validatePassword("short"); // invalid
generateUniqueEmail("testuser");
console.log(`Admin User Email: ${adminUserEmail}`);
console.log(`Expected Welcome Message: ${expectedWelcomeMessage}`);
console.log(`Run Slow Tests: ${runSlowTests}`);
console.log(`Use Test Data: ${useTestData}`);
console.log('API Endpoints:', API_ENDPOINTS);
*/

export {
    validateEmail,
    generateUniqueEmail,
};
