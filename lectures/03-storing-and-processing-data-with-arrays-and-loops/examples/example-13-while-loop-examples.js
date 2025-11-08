// Example 1: Processing a test queue until empty
let testQueue = ["test1", "test2", "test3", "test4"];

while (testQueue.length > 0) {
  let currentTest = testQueue.pop();
  console.log(`Processing: ${currentTest}`);
  console.log(`Remaining tests: ${testQueue.length}`);
}

console.log("All tests processed!");

console.log("\n---------------------\n");

// Example 2: Waiting for a condition (simulated)
let pageLoadComplete = false;
let checkCount = 0;
let maxChecks = 10;

while (!pageLoadComplete && checkCount < maxChecks) {
  checkCount++;
  console.log(`Check ${checkCount}: Waiting for page to load...`);

  // Simulate page loading (loads after 3 checks in this example)
  if (checkCount >= 3) {
    pageLoadComplete = true;
    console.log("✅ Page loaded successfully!");
  }
}

if (!pageLoadComplete) {
  console.log("❌ Page load timeout");
}

console.log("\n---------------------\n");

// Example 3: Input validation with retry
let userInputs = ["", "invalid", "valid@test.com"];
let inputIndex = 0;
let validInput = false;

while (!validInput && inputIndex < userInputs.length) {
  let input = userInputs[inputIndex];
  console.log(`Checking input: "${input}"`);

  if (input.includes("@") && input.length > 0) {
    validInput = true;
    console.log("✅ Valid email found!");
  } else {
    console.log("❌ Invalid input, trying next...");
    inputIndex++;
  }
}
