// Scenario 2: User Input Validation Pipeline
let registrationEmails = [
  "john@valid.com",
  "invalid-email",
  "sarah@test.com",
  "",
];
let registrationPasswords = [
  "strongpass123",
  "weak",
  "anotherstrongpassword",
  "somepass",
];

let validRegistrations = [];
let rejectedRegistrations = [];

for (let i = 0; i < registrationEmails.length; i++) {
  let email = registrationEmails[i];
  let password = registrationPasswords[i];
  let reasons = [];

  console.log(`\n--- Processing Registration #${i + 1} ---`);
  console.log(`Email: "${email}", Password: "${password}"`);

  // Validate email
  let isEmailValid = email.includes("@") && email.length > 5;
  if (!isEmailValid) {
    reasons.push("Invalid email format");
  }

  // Validate password
  let isPasswordStrong = password.length >= 8;
  if (!isPasswordStrong) {
    reasons.push("Password is too short");
  }

  // Final decision
  if (isEmailValid && isPasswordStrong) {
    console.log("✅ Registration VALID");
    validRegistrations.push({ email: email, password: password });
  } else {
    console.log(`❌ Registration REJECTED. Reasons: ${reasons.join(", ")}`);
    rejectedRegistrations.push({
      email: email,
      password: password,
      reasons: reasons,
    });
  }
}

console.log(`\nValid registrations: ${validRegistrations.length}`);
console.log(`Rejected registrations: ${rejectedRegistrations.length}`);
