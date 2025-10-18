import {
  countPassedTests,
  formatExecutionTime,
  findFailedTests,
} from "./task01/functions-declarations-basics.js";

import {
  isValidEmail,
  formatDuration,
} from "./task02/parameters-and-returns.js";

import {
  formatTestResultExpr,
  calculateAverageArrow,
} from "./task03/function-types.js";

let names = ["jetest1", "jetest2", "jeTest3", "jeTest4", "jeTest5", "jeTest6"];
let results = ["PASS", "FAIL", "SKIP", "FAIL", "PASS", "PASS"];
let times = [106, 1360, 201, 723, 350, 1098];

let totalTests = results.length;
let passedTests = countPassedTests(results);
let successRate = ((passedTests / totalTests) * 100).toFixed(1);

console.log("===== BASIC METRICS =====");
console.log(`Total tests: ${totalTests}
  Passed count: ${passedTests}
  Success rate: ${successRate}`);

console.log("===== FAILURES =====");
console.log("Failed tests are:", findFailedTests(names, results));

console.log("===== FORMATTED TIMES =====");
let mappedTimes = times.map((time) => formatExecutionTime(time));
console.log(mappedTimes);
console.log(
  "Average time:",
  formatDuration(calculateAverageArrow(times).toFixed(2))
);

console.log("===== EMAIL VALIDATION (SAMPLE) =====");
let email1 = "jeTest@email.com";
let email2 = "jeInvalid!mail.com";

console.log(`Email ${email1} is`, isValidEmail(email1) ? "VALID" : "INVALID");
console.log(`Email ${email2} is`, isValidEmail(email2) ? "VALID" : "INVALID");

console.log("===== TEST RESULTS =====");

for (let i = 0; i < names.length; i++) {
  console.log(formatTestResultExpr(names[i], results[i]));
}
