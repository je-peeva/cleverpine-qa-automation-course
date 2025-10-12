export { buildVisualStatuses, formatExecutionTimes };

function buildVisualStatuses(results) {
  let mappedResults = results.map(function (status) {
    if (status === "PASS") return "===>PASS<===";
    if (status === "FAIL") return "===>FAIL<===";
    if (status === "SKIP") return "===>SKIP<===";
    if (status === "BLOCKED")
      return "===>BLOCKED<=== This case is also skipped.";
    if (status === "NOT EXECUTED")
      return "===>NOT EXECUTED<=== This case is also skipped.";
  });

  return mappedResults;
}

function formatExecutionTimes(times) {
  let mappedTimes = times.map(function (time) {
    return time + "ms";
  });
  return mappedTimes;
}

function generateTestEmails(ids) {
  let mappedEmails = ids.map(function (id) {
    return "testuser" + id + "@example.com";
  });
  return mappedEmails;
}

function ratePerformance(times) {
  let mappedPerformance = times.map(function (time) {
    if (time < 300) return "Fast";
    if (time < 1000) return "Normal";
    else return "Slow";
  });
  return mappedPerformance;
}

let results = ["PASS", "FAIL", "SKIP", "BLOCKED", "NOT EXECUTED"];
let times = [1250, 850, 2100, 299];
let ids = [1, 2, 3, 4, 5];

console.log(buildVisualStatuses(results));
console.log(formatExecutionTimes(times));
console.log(generateTestEmails(ids));
console.log(ratePerformance(times));
