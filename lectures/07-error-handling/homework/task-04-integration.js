import { safeParse, safeSuccessRate } from "./task01/task-01-try-catch.js";
import {
  validateRequired,
  validateRange,
  validateTestResults,
} from "./task02/task-02-throw.js";

import { runWithCleanup } from "./task03/task-03-finally.js";

let configJson =
  '{"environment":"sandbox", "baseUrl":"http://example.com","retries":3}';
let rawResults = [
  { name: "name1", status: "PASS", duration: 260 },
  { name: "name2", status: "FAIL", duration: 540 },
  { name: "name3", status: "SKIP", duration: 67 },
  { name: "name4", status: "PASS", duration: 320 },
  { name: "name5", status: "FAIL", duration: 918 },
];

let parsedConfig = safeParse(configJson);
if (!parsedConfig.SuccessfulParsed) {
  throw new Error("Error parsing config.");
}

let parsedConfigData = parsedConfig.data;

try {
  validateRequired(parsedConfigData.environment, "environment");
  validateRequired(parsedConfigData.baseUrl, "baseUrl");
  validateRange(parsedConfigData.retries, 0, 5, "retries");

  if (!parsedConfigData.baseUrl.includes("http")) {
    throw new Error("Base URL must include 'http'");
  }
} catch (error) {
  console.log("Validation error" + error.message);
}

try {
  validateTestResults(rawResults);
} catch (error) {
  console.log("Validation error" + error.message);
}

let totalCases = 0;
let failedCount = 0;
let totalDuration = 0;

rawResults.forEach((result) => {
  try {
    if (result.status === "FAIL") {
      throw new Error(`${result.name} failed.`);
    }
    totalCases++;
    totalDuration += result.duration;
  } catch (error) {
    console.log(`${result.name} failed: ${error.message}`);
    failedCount++;
  }
});

let passedCount = totalCases - failedCount;
let successRate = safeSuccessRate(passedCount, totalCases);

console.log({
  "Total cases": totalCases,
  Passed: passedCount,
  Failed: failedCount,
  "Success Rate": successRate,
  "Total duration": totalDuration,
});

let report = {
  Environment: parsedConfigData.environment,
  "Total cases": totalCases,
  Failed: failedCount,
  "Success Rate": successRate,
};

let reportJson = JSON.stringify(report);
console.log("Report: ", reportJson);

runWithCleanup({ name: "finalize", shouldFail: false });
