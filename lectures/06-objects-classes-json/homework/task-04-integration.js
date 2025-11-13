import { TestUser, TestCase } from "./task02/task-02-classes.js";

import {
  getFailedTests,
  getHighPriorityNames,
  getTotalDuration,
} from "./task01/task-01-objects.js";

import { toJson, fromJson } from "./task03/task-03-json.js";

let integrationUser1 = new TestUser(
  "integrationUser1",
  "integrationUser1@mail.com",
  "integrationUser1Password",
  "testRole",
  true
);
let integrationUser22 = new TestUser(
  "integrationUser22",
  "integrationUser22@mail.com",
  "integrationUser22Password",
  "testRole",
  false
);

let testCases = [
  { name: "testCase1", status: "PASS", duration: 145, priority: "HIGH" },
  { name: "testCase2", status: "FAIL", duration: 30, priority: "MEDIUM" },
  { name: "testCase3", status: "SKIP", duration: 850, priority: "LOW" },
  { name: "testCase4", status: "FAIL", duration: 1073, priority: "HIGH" },
  { name: "testCase5", status: "PASS", duration: 168, priority: "MEDIUM" },
];

let integrationTestCase1 = new TestCase(
  testCases[0].name,
  `description of ${testCases[0].name}`
);
let integrationTestCase2 = new TestCase(
  testCases[1].name,
  `description of ${testCases[1].name}`
);

integrationTestCase1.complete("FAIL", 140);
integrationTestCase2.complete("PASS", 630);

testCases[0].status = integrationTestCase1.status;
testCases[0].duration = integrationTestCase1.duration;

testCases[1].status = integrationTestCase2.status;
testCases[1].duration = integrationTestCase2.duration;

console.log(integrationTestCase1.getSummary());
console.log(integrationTestCase2.getSummary());

console.log("===== BASIC METRICS =====");

console.log({
  "Total cases": testCases.length,
  "Total duration": getTotalDuration(testCases),
  "Fail tests": getFailedTests(testCases),
});

console.log("===== PRIORITY HIGHLIGHTS =====");
console.log("High priroity tests:", getHighPriorityNames(testCases));

console.log("===== USER VALIDATION =====");

let allUsers = [integrationUser1, integrationUser22];

allUsers.forEach((user) => {
  console.log(user.getInfo());
  console.log("Valid credentials:", user.validate());
});

console.log("===== JSON SUMMARY =====");

let report = {
  suiteName: "Integration Demo Report",
  environment: "Sandbox",
  totalCases: testCases.length,
  failedCount: getFailedTests(testCases).length,
  highPriorityNames: getHighPriorityNames(testCases),
};

console.log("Initial report value:", report);

let reportToJson = toJson(report);
console.log("Converted report object to JSON:", reportToJson);

let parsedReportToJson = fromJson(reportToJson);
console.log("Report name:", parsedReportToJson.suiteName);
