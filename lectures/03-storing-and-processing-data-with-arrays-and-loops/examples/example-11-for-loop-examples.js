// Example 1: Validating multiple email addresses
let emailList = ["valid@test.com", "invalid-email", "another@valid.com"];

for (let i = 0; i < emailList.length; i++) {
  let email = emailList[i];
  let isValid = email.includes("@") && email.includes(".");

  console.log(`Email ${i + 1}: ${email} - ${isValid ? "VALID" : "INVALID"}`);
}

console.log("\n---------------------\n");

// Example 2: Processing test results
let results = ["PASS", "FAIL", "PASS", "SKIP", "PASS"];
let passCount = 0;

for (let i = 0; i < results.length; i++) {
  console.log(`Test ${i + 1}: ${results[i]}`);
  if (results[i] === "PASS") {
    passCount++;
  }
}

console.log(`Total passed tests: ${passCount} out of ${results.length}`);

console.log("\n---------------------\n");

// Example 3: Checking multiple URLs
let testUrls = [
  "https://dev.example.com",
  "https://staging.example.com",
  "https://prod.example.com",
];

for (let i = 0; i < testUrls.length; i++) {
  let url = testUrls[i];
  let environment = url.includes("dev")
    ? "Development"
    : url.includes("staging")
      ? "Staging"
      : "Production";

  console.log(`Testing ${environment} environment: ${url}`);
}
