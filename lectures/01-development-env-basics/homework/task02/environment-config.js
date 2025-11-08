export { loadEnvironmentConfig, defaultEnvironmentConfig };

const defaultEnvironmentConfig = {
  baseUrl: "https://demo-qa-site.com/development",
  timeout: 15000,
  debugMode: true,
};

//Print the default environment variables
function loadEnvironmentConfig() {
  console.log("===== DEFAULT ENVIRONMENT CONFIGURATION =====");
  console.log(defaultEnvironmentConfig);

  return defaultEnvironmentConfig;
}

loadEnvironmentConfig();
