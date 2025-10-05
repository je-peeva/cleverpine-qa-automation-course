export { displayEnvironmentInfo };

//Print and return used node.js version
function checkNodeVersion() {
  let nodeVersion = process.version;
  console.log("Node.js version is " + nodeVersion);
  return nodeVersion;
}

//Print and return used npm version
// npm -v is working fine, but in this function it is displayed as Not available/undefined?
function checkNpmVersion() {
  let npmVersion = process.env.npmVersion || "Not available";
  console.log("NPM version is " + npmVersion);
  return npmVersion;
}

//Display node.js and npm versions
function displayEnvironmentInfo() {
  checkNodeVersion();
  checkNpmVersion();

  let operationSystem = process.platform;
  let currentDirectory = process.cwd();
  console.log(
    `Operating system is ${operationSystem}.
Current working directory is ${currentDirectory}.`
  );
}

displayEnvironmentInfo();
