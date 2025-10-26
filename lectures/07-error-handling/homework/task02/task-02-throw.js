export { validateRequired, validateArray, validateRange, validateTestResults };

function validateRequired(value, fieldName) {
  if (!value) {
    throw new Error("Value for " + fieldName + " is required.");
  }
  return `Value for ${fieldName} is valid.`;
}

function validateArray(data, fieldName) {
  if (!Array.isArray(data)) {
    throw new TypeError("Value for" + fieldName + " must be an array.");
  }
  return `Value for ${fieldName} is valid array.`;
}

function validateRange(value, min, max, fieldName) {
  if (value < min || value > max) {
    throw new Error(
      "Value for " + fieldName + " must be between " + min + " and " + max
    );
  }
  return `Value for ${fieldName} is within allowed range ${min} - ${max}`;
}

function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".") || email.length < 5) {
    throw new Error("Invalid email format.");
  }
  return `Email ${email} is valid`;
}

function validatePassword(password) {
  let hasDigit = false;
  let letters = [...password];
  for (let i = 0; i < letters.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasDigit = true;
      break;
    }
  }

  if (password.length < 8 || !hasDigit) {
    throw new Error("Password does not meet minimum requirements");
  }
  return `Password is valid.`;
}

function validateTestResults(results) {
  validateArray(results, "Test results");

  for (let i = 0; i < results.length; i++) {
    let resultCheck =
      results[i].status === "PASS" ||
      results[i].status === "FAIL" ||
      results[i].status === "SKIP";

    let durationCheck = results[i].duration >= 0;

    if (!resultCheck || !durationCheck) {
      throw new Error("Invalid test result at index " + i);
    }
  }
  return `All test results are valid.`;
}

//Try-catch for each function above
function safeCall(fn, ...args) {
  try {
    return fn(...args);
  } catch (error) {
    console.log(`Error: ${error.name} - ${error.message}`);
    return false;
  }
}

console.log(safeCall(validateRequired, 6, "jeFieldName"));
console.log(safeCall(validateRequired, "", "jeFieldName"));

console.log(safeCall(validateArray, [1, 1, 2, 3, 5], "arrayName"));
console.log(safeCall(validateArray, "not an array", "arrayName"));

console.log(safeCall(validateRange, 2.5, 1, 10, "rangeName"));
console.log(safeCall(validateRange, 21, 1, 10, "rangeName"));

console.log(safeCall(validateEmail, "je@mail.bg"));
console.log(safeCall(validateEmail, "invalid email"));

console.log(safeCall(validatePassword, "val1dP@ss"));
console.log(safeCall(validatePassword, "short"));

let validResults = [
  { status: "PASS", duration: 493 },
  { status: "FAIL", duration: 365 },
  { status: "SKIP", duration: 0 },
  { status: "PASS", duration: 680 },
];

let invalidStatusResults = [
  { status: "PASS", duration: 493 },
  { status: "FAIL", duration: 365 },
  { status: "SKIP", duration: 0 },
  { status: "BLOCK", duration: 680 },
];

let invalidDurationResults = [
  { status: "PASS", duration: 493 },
  { status: "FAIL", duration: -1 },
  { status: "SKIP", duration: 0 },
  { status: "PASS", duration: 680 },
];

console.log(safeCall(validateTestResults, validResults));
console.log(safeCall(validateTestResults, invalidStatusResults));
console.log(safeCall(validateTestResults, invalidDurationResults));
