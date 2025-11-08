// ✅ Good: Descriptive array names
let validEmailAddresses = ["user@test.com", "admin@company.com"];
let invalidEmailAddresses = ["usertest.com", "@company.com", ""];

// ✅ Good: Consistent data types in arrays
let responseTimes = [245, 312, 189, 445]; // All numbers
let testStatuses = ["PASS", "FAIL", "SKIP"]; // All strings

// ✅ Good: Initialize arrays properly
let testErrors = []; // Start empty, add as needed

// ❌ Avoid: Inconsistent or unclear naming
let data = [1, 2, 3]; // What kind of data?
let arr1 = ["a", "b"]; // Non-descriptive name

// ❌ Avoid: Mixing unrelated data types unnecessarily
let mixedData = ["test", 123, true, null]; // Hard to work with

console.log("Valid emails:", validEmailAddresses);
console.log("Response times:", responseTimes);
