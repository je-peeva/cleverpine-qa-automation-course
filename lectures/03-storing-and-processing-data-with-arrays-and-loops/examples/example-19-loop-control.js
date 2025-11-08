// Using 'break' to exit a loop early
let serverResponses = [200, 500, 200, 404, 200];
let firstError = -1;

console.log("--- Using 'break' ---");
for (let i = 0; i < serverResponses.length; i++) {
  console.log(`Checking response ${i + 1}: ${serverResponses[i]}`);
  if (serverResponses[i] >= 400) {
    firstError = serverResponses[i];
    console.log(`Error found: ${firstError}. Stopping checks.`);
    break; // Exit the loop immediately
  }
}

if (firstError === -1) {
  console.log("No errors found in server responses");
}

console.log("\n--- Using 'continue' ---");
// Using 'continue' to skip to next iteration
let testInputs = ["valid@email.com", "", "invalid", "another@valid.com"];
let validEmails = [];

for (let i = 0; i < testInputs.length; i++) {
  let input = testInputs[i];

  // Skip empty or very short inputs
  if (input.length < 3) {
    console.log(`Skipping short input: "${input}"`);
    continue; // Go to the next iteration
  }

  // Process valid-looking inputs
  if (input.includes("@")) {
    console.log(`Processing valid input: "${input}"`);
    validEmails.push(input);
  } else {
    console.log(`Ignoring invalid input: "${input}"`);
  }
}

console.log("All valid emails collected:", validEmails);
