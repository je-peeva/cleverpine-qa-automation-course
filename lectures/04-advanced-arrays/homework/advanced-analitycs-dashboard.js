import {
  buildVisualStatuses,
  formatExecutionTimes,
} from "./task01/maps-transformations.js";

import {
  getFailedResults,
  getHighPriorityTests,
  getSlowTests,
} from "./task02/filter-views.js";

import {
  averageTimeForPassed,
  findSlowestTest,
} from "./task03/reduce-metrics.js";

import {
  sortIndicesByTime,
  sortFailedByPriorityThenTime,
} from "./task04/sort-report.js";
import { quickPassedAlphabetical } from "./task05/destructing-utils.js";

let rawTestData = [
  ["Test1", "PASS", "HIGH", 205],
  ["Test2", "FAIL", "LOW", 150],
  ["Test3", "PASS", "HIGH", 120],
  ["Test4", "SKIP", "MEDIUM", 2300],
  ["Test5", "PASS", "CRITICAL", 450],
  ["Test6", "FAIL", "HIGH", 120],
  ["Test7", "SKIP", "MEDIUM", 2100],
  ["Test8", "PASS", "CRITICAL", 380],
];

console.log("===== FORMATTED REPORTS =====");

let statuses = rawTestData.map(function (status) {
  return status[1];
});
console.log(buildVisualStatuses(statuses));

let executionTime = rawTestData.map(function (time) {
  return time[3];
});
console.log(formatExecutionTimes(executionTime));

console.log("===== FILTERED VIEW =====");

console.log("Failed results count:", getFailedResults(statuses).length);
console.log(
  "High priority test count:",
  getHighPriorityTests(rawTestData).length
);
console.log("Slow tests count:", getSlowTests(rawTestData).length);

console.log("===== METRICS =====");

console.log(
  "Avarage time for passed tests:",
  averageTimeForPassed(statuses, executionTime)
);

let testNames = rawTestData.map(function (name) {
  return name[0];
});
console.log("Slowest test:", findSlowestTest(testNames, executionTime));

console.log("===== SORTED =====");
console.log("Sorted by Time:", sortIndicesByTime(testNames, executionTime));
console.log(
  "Sorted Failed by Priority then Time:",
  sortFailedByPriorityThenTime(rawTestData)
);

console.log("===== QUICK PASSED (A-Z) =====");
console.log(quickPassedAlphabetical(rawTestData));
