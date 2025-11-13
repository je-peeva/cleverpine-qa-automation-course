import { simulateApiCall } from "../task02/task-02-then-catch.js";

export { runSingleOperation };

async function runSingleOperation(name, shouldFail) {
  console.log(`===== STARTING OPERATION ${name} =====`);

  let result = await simulateApiCall(name, shouldFail);
  console.log("=====> OPERATION FINISHED: ", result);

  return result;
}

//handling success
runSingleOperation("login", false).then(function (v) {
  console.log("Final returned value: ", v);
});

//failure
// runSingleOperation("failure", true).catch(function (v) {
//   console.log("Failure ", v);
// });
