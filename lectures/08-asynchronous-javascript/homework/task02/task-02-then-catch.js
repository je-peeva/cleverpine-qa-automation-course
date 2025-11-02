export { simulateApiCall };

function simulateApiCall(name, shouldFail) {
  return new Promise(function (resolve, reject) {
    let delay = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

    setTimeout(function () {
      if (shouldFail) {
        reject(new Error("Request failed: " + name));
      } else {
        resolve({
          name: name,
          status: "OK",
        });
      }
    }, delay);
  });
}

//handling success
simulateApiCall("login", false).then(function (result) {
  console.log("Success fields:", result);
});

//handling error
simulateApiCall("broken", true)
  .then(function (result) {
    console.log("Unexpected success:", result);
  })
  .catch(function (error) {
    console.log("Error:", error.message);
  });

//chain handling
simulateApiCall("login", false)
  .then(function (result) {
    result.processed = true;
    return result;
  })
  .then(function (transformed) {
    console.log("Transformed result:", transformed);
  })
  .catch(function (error) {
    console.log("Error:", error.message);
  });
