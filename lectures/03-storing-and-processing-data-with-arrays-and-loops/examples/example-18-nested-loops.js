// Testing multiple users across multiple environments
let testUsers = ["user1@test.com", "user2@test.com"];
let environments = ["dev", "staging"];

for (let i = 0; i < testUsers.length; i++) {
  let user = testUsers[i];
  console.log(`\n--- Testing User: ${user} ---`);

  for (let j = 0; j < environments.length; j++) {
    let env = environments[j];
    console.log(`  - Running login test on: ${env}`);

    // Simulate a test result
    let success = Math.random() > 0.3; // 70% chance of success
    if (success) {
      console.log(`    > Result: PASS`);
    } else {
      console.log(`    > Result: FAIL`);
    }
  }
}
