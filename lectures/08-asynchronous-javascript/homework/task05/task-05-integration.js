import { delayedLog, delay } from "../task01/task-01-sync-vs-async.js";
import { simulateApiCall } from "../task02/task-02-then-catch.js";
import { runSafeOperation } from "../task04/task-04-async-await-try-catch.js";

console.log("Preparing test data...");
delayedLog("Preparation step A done", 500);

async function run() {
  console.log("Preparation step B");
  await delay(700);

  let operationsArray = [
    "operation1",
    "operation2_fail",
    "operation3",
    "operation4",
    "operation5_fail",
  ];

  let results = { total: 0, passed: 0, failed: 0 };

  for (let i = 0; i < operationsArray.length; i++) {
    let shouldFail = false;

    if (operationsArray[i].includes("fail")) {
      shouldFail = true;
    }
    let result = await runSafeOperation(operationsArray[i], shouldFail);

    results.total++;

    if (result.ok) {
      results.passed++;
    } else {
      results.failed++;
    }
  }

  console.log("Summary: ", results);
}

run().catch(function (error) {
  console.log("Error: ", error.message);
});
