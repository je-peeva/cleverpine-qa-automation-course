// ✅ Use FOR loops when:
// - Working with arrays
// - You know the exact number of iterations
// - You need an index counter

let browsers = ["Chrome", "Firefox", "Safari"];
console.log("--- FOR loop example ---");
for (let i = 0; i < browsers.length; i++) {
  console.log(`Testing browser ${i + 1}: ${browsers[i]}`);
}

console.log("\n--- WHILE loop example ---");

// ✅ Use WHILE loops when:
// - You don't know how many iterations you need
// - You're waiting for a condition to become true
// - You're processing until something is empty/complete

let attempts = 0;
let success = false;
while (!success && attempts < 5) {
  attempts++;
  // Simulate a random success
  success = Math.random() > 0.5;
  console.log(
    `Attempt ${attempts}: ${success ? "Success!" : "Failed, retrying..."}`
  );
}
