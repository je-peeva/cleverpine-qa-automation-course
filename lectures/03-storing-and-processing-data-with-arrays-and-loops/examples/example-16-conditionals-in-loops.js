// Basic pattern: Loop + If/Else for different actions
let testData = ["valid@email.com", "", "invalid-email", "another@valid.com"];

for (let i = 0; i < testData.length; i++) {
  let email = testData[i];

  if (email.length === 0) {
    console.log(`Input ${i + 1}: Empty input - SKIPPING`);
  } else if (email.includes("@") && email.includes(".")) {
    console.log(`Input ${i + 1}: "${email}" - VALIDATING`);
  } else {
    console.log(`Input ${i + 1}: "${email}" - REJECTING`);
  }
}
