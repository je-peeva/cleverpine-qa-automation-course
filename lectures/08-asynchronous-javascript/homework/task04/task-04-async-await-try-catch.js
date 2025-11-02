import { simulateApiCall } from "../task02/task-02-then-catch.js";

export { runSafeOperation };

async function runSafeOperation(name, shouldFail) {
  try {
    await simulateApiCall(name, shouldFail);
    return {
      ok: true,
      name: name,
    };
  } catch (error) {
    console.log("Error: ", error.message);
    return {
      ok: false,
      name: name,
    };
  }
}

runSafeOperation("profile", false).then(function (v) {
  console.log("Success: ", v);
});

runSafeOperation("report", true).then(function (v) {
  console.log("Failure: ", v);
});
