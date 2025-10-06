export { loadEnvironmentConfig, defaultEnvironemntConfig };

const defaultEnvironemntConfig = {
  baseUrl: "https://demo-qa-site.com/development",
  timeout: 15000,
  debugMode: true,
};

//Print the default environment variables
function loadEnvironmentConfig() {
  console.log("===== DEFAULT CONFIGURATION =====");
  console.log(defaultEnvironemntConfig);

  return defaultEnvironemntConfig;
}

loadEnvironmentConfig();
