export { averageTimeForPassed, findSlowestTest };

//Return counts of result states
function countResultsByType(results) {
  let resultCounts = results.reduce(
    function (counts, result) {
      if (result === "PASS") {
        counts[0]++;
      } else if (result === "FAIL") {
        counts[1]++;
      } else if (result === "SKIP") {
        counts[2]++;
      }
      return counts;
    },
    [0, 0, 0]
  );
  return resultCounts;
}

//Return average time of all passed tests
function averageTimeForPassed(results, times) {
  let resultTimes = results.reduce(
    function ([totalTime, passedCount], result, index) {
      if (result === "PASS") {
        totalTime += times[index];
        passedCount++;
      }
      return [totalTime, passedCount];
    },
    [0, 0]
  );

  let averageTime = resultTimes[1] > 0 ? resultTimes[0] / resultTimes[1] : 0;
  return averageTime.toFixed(1);
}

//Return the name of slowest test or empty string if array is empty
function findSlowestTest(names, times) {
  if (names.length === 0 || times.length === 0) {
    return -1;
  }

  let slowestIndex = times.reduce(function (
    slowestIndex,
    currentTime,
    currentIndex
  ) {
    return currentTime > times[slowestIndex] ? currentIndex : slowestIndex;
  }, 0);

  return names.length > 0 ? names[slowestIndex] : "";
}

let results = ["PASS", "FAIL", "SKIP", "SKIP", "FAIL", "PASS"];
let times = [1250, 850, 2100, 299, 205, 1643];
let names = ["name1", "name2", "name3", "name4", "name5", "name6"];

console.log("Result counts for:", results, countResultsByType(results));
console.log(
  "Average time for passed tests:",
  averageTimeForPassed(results, times)
);

console.log("Slowest test:", findSlowestTest(names, times));
