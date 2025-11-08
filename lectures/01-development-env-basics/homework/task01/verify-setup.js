/**
 * This script verifies the user's development environment by checking Node.js and NPM versions,
 * and displays other relevant system information.
 */

/**
 * Checks and displays the installed Node.js version.
 * @returns {string} The Node.js version.
 */
function checkNodeVersion() {
  const nodeVersion = process.version;
  console.log("Node.js version:", nodeVersion);
  return nodeVersion;
}

/**
 * Checks and displays the installed NPM version.
 * Note: This function relies on an environment variable that is typically set when running scripts via npm.
 * If you run this script directly with `node verify-setup.js`, the NPM version may show as 'Not available'.
 * @returns {string} The NPM version or 'Not available'.
 */
function checkNpmVersion() {
  const npmVersion = process.env.npm_version || 'Not available';
  console.log("NPM version:", npmVersion);
  return npmVersion;
}

/**
 * Displays a summary of the development environment information.
 * It calls other functions to get specific details like Node and NPM versions,
 * and also gathers OS and current path information.
 */
function displayEnvironmentInfo() {
  console.log("--- Environment Verification ---");
  
  checkNodeVersion();
  checkNpmVersion();
  
  const platform = process.platform;
  console.log("Operating System:", platform);
  
  const currentDirectory = process.cwd();
  console.log("Current working directory:", currentDirectory);
  
  console.log("------------------------------");
}

// Execute the main function to display environment information.
// displayEnvironmentInfo();

export {
  displayEnvironmentInfo,
};
