// Basic for loop syntax:
// for (initialization; condition; increment) { code to execute }

let testCases = ["login", "logout", "registration", "password_reset"];

for (let i = 0; i < testCases.length; i++) {
  console.log(`Running test ${i + 1}: ${testCases[i]}`);
}

// Breaking down the for loop:
// - let i = 0: Start with index 0
// - i < testCases.length: Continue while i is less than array length
// - i++: Increase i by 1 after each iteration
// - The code inside {} runs for each iteration
