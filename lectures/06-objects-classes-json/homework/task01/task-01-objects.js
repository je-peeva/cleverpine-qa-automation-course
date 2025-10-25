export { getFailedTests, getHighPriorityNames, getTotalDuration };

//Define testConfig object
let testConfig = {
  suiteName: "jeSuiteName",
  environment: "stating",
  maxTimeoutMs: 5,
};

testConfig.retryCount = 3;

//Define user objects
let testUser1 = {
  username: "user1",
  email: "user1@mail.com",
  password: "user1password",
  role: "user1role",
  active: true,
};

let testUser2 = {
  username: "user2",
  email: "user2@mail.com",
  password: "user2password",
  role: "user2role",
  active: false,
};

let testUser3 = {
  username: "user3",
  email: "user3@mail.com",
  password: "user3password",
  role: "user3role",
  active: true,
};

console.log("User3 role:", testUser3["role"]);

let testCases = [
  { name: "testCase1", status: "PASS", duration: 145, priority: "HIGH" },
  { name: "testCase2", status: "FAIL", duration: 30, priority: "MEDIUM" },
  { name: "testCase3", status: "SKIP", duration: 850, priority: "LOW" },
  { name: "testCase4", status: "FAIL", duration: 1073, priority: "HIGH" },
  { name: "testCase5", status: "PASS", duration: 168, priority: "MEDIUM" },
];

//Return all failed tests as an object
function getFailedTests(cases) {
  let failedTests = cases.filter((test) => test.status === "FAIL");
  return failedTests;
}

//Return names of high priority tests
function getHighPriorityNames(cases) {
  let highPriorityCases = cases
    .filter((test) => test.priority === "HIGH")
    .map((test) => test.name);
  return highPriorityCases;
}

//Return total duration in ms for all test cases
function getTotalDuration(cases) {
  let totalTestCasesDuration = cases.reduce(
    (sum, test) => sum + test.duration,
    0
  );
  return totalTestCasesDuration;
}

console.log({
  "Failed tests": getFailedTests(testCases),
  "High priority tests": getHighPriorityNames(testCases),
  "Total duration(ms)": getTotalDuration(testCases),
});
