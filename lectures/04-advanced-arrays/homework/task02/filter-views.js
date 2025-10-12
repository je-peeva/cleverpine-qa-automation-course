export { getFailedResults, getHighPriorityTests, getSlowTests };

function getFailedResults(results) {
  let failedResults = results.filter(function (result) {
    return result === "FAIL";
  });
  return failedResults;
}

function getHighPriorityTests(tests) {
  let highPriorityTests = tests.filter(function (test) {
    let [, , priority] = test;
    return priority === "HIGH";
  });
  return highPriorityTests;
}

function getSlowTests(tests) {
  let slowTests = tests.filter(function (test) {
    let [, , , time] = test;
    return time > 1000;
  });
  return slowTests;
}

function findTestsByKeyword(names, keyword) {
  let filteredNames = names.filter(function (name) {
    return name.includes(keyword);
  });
  return filteredNames;
}

let results = ["PASS", "FAIL", "SKIP", "BLOCKED", "FAIL", "NOT EXECUTED"];
let tests = [
  ["Test1", "PASS", "HIGH", 1500],
  ["Test2", "FAIL", "LOW", 500],
  ["Test3", "BLOCKED", "HIGH", 1200],
  ["Test4", "SKIP", "MEDIUM", 2000],
  ["Test5", "FAIL", "CRITICAL", 800],
];
let names = ["name1-smth", "name2-somethin else", "name3-smth"];
let keyword = "smth";

console.log("Failed results:", getFailedResults(results));
console.log("High priority tests:", getHighPriorityTests(tests));
console.log("Slow tests:", getSlowTests(tests));
console.log("Filtered names:", findTestsByKeyword(names, keyword));
