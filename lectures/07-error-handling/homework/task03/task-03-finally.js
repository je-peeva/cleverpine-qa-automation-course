export { runWithCleanup };

let connected = false;

function connect() {
  if (connected) {
    console.log("Already connected.");
  } else {
    connected = true;
    console.log("Connected.");
  }
}

function disconnect() {
  if (!connected) {
    console.log("Already disconnected.");
  } else {
    connected = false;
    console.log("Disconnected.");
  }
}

function runOperation(config) {
  if (!connected) {
    throw new Error("Not connected.");
  }

  if (config.shouldFail) {
    throw new Error("Operation failed: " + config.name);
  }

  return {
    ok: true,
    name: config.name,
  };
}

function runWithCleanup(config) {
  connect();

  try {
    let result = runOperation(config);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
    return { ok: false };
  } finally {
    disconnect();
  }
}

let successConfig = {
  name: "Successful data",
  shouldFail: false,
};

let failureConfig = {
  name: "Failure data",
  shouldFail: true,
};

runWithCleanup(successConfig);
runWithCleanup(failureConfig);
