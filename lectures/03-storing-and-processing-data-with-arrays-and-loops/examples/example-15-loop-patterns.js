// Pattern 1: Counting occurrences
let statuses = ["PASS", "FAIL", "PASS", "PASS", "SKIP"];
let passCount = 0;
let failCount = 0;

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i] === "PASS") {
    passCount++;
  } else if (statuses[i] === "FAIL") {
    failCount++;
  }
}

console.log(`Passed: ${passCount}, Failed: ${failCount}`);

console.log("\n---------------------\n");

// Pattern 2: Finding specific items
let testResults = ["login_PASS", "logout_FAIL", "register_PASS"];
let foundFailures = [];

for (let i = 0; i < testResults.length; i++) {
  if (testResults[i].includes("FAIL")) {
    foundFailures.push(testResults[i]);
  }
}

console.log("Failed tests:", foundFailures);

console.log("\n---------------------\n");

// Pattern 3: Building new arrays based on conditions
let allUsers = ["admin@test.com", "user@test.com", "guest@test.com"];
let adminUsers = [];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].includes("admin")) {
    adminUsers.push(allUsers[i]);
  }
}

console.log("Admin users found:", adminUsers);
