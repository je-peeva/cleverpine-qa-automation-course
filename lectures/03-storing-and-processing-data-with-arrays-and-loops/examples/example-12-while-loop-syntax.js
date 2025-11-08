// Basic while loop syntax:
// while (condition) { code to execute }

let retryCount = 0;
let maxRetries = 3;
let testPassed = false;

while (retryCount < maxRetries && !testPassed) {
  retryCount++;
  console.log(`Attempt ${retryCount}: Running flaky test...`);

  // Simulate a test that might pass or fail
  testPassed = retryCount === 2; // Passes on second try for this example

  if (testPassed) {
    console.log("✅ Test passed!");
  } else {
    console.log("❌ Test failed, will retry...");
  }
}

if (!testPassed) {
  console.log("🔥 Test failed after all retries");
}
