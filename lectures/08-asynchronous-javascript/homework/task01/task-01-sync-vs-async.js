export { delayedLog, delay };

//Log 3 synchronous messages
function logSynchronousFlow() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}

logSynchronousFlow();

//Log a message after specified delay
function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log(message);
  }, delayMs);
}

console.log("Before delay");
delayedLog("After 1000ms", 1000);
console.log("After scheduling delay");

//Return a promise object in pending state
function delay(ms) {
  let testPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let testPassed = true;

      if (testPassed) {
        resolve("Test Passed");
      } else {
        reject("Test Failed");
      }
    }, ms);
  });

  return testPromise;
}

console.log(delay(1500));
delay(1500).then(function (result) {
  console.log("Success:", result);
});
