export { sortIndicesByTime, sortFailedByPriorityThenTime };

//Return array indices ordered from fastest to slowest
function sortIndicesByTime(names, times) {
  let testIndices = [0, 1, 2, 3, 4, 5, 6, 7];

  let sortedByTime = testIndices.slice().sort(function (a, b) {
    return times[a] - times[b];
  });

  // sortedByTime.forEach(function (index) {
  //   console.log(`${names[index]} : ${times[index]}ms`);
  // });
  return sortedByTime;
}

//Return string array sorted by value's length
function sortNamesByLength(names) {
  let sortedNamesByLength = names.slice().sort(function (a, b) {
    return a.length - b.length;
  });
  return sortedNamesByLength;
}

//Return string array with different priority levels sorted ascending
function sortByPriority(priorities) {
  let mappedPriorities = { CRITICAL: 1, HIGH: 2, MEDIUM: 3, MINOR: 4, LOW: 5 };

  let sortedByPriority = priorities.slice().sort(function (a, b) {
    return mappedPriorities[a] - mappedPriorities[b];
  });
  return sortedByPriority;
}

//Sort failed tests by priority, then by time desc (slower first)
function sortFailedByPriorityThenTime(tests) {
  let mappedPriorities = { CRITICAL: 1, HIGH: 2, MEDIUM: 3, MINOR: 4, LOW: 5 };
  let failedTests = tests.filter(function (test) {
    return test[1] === "FAIL";
  });

  let sortedByPriorityThenTime = failedTests.slice().sort(function (a, b) {
    let priorityComparison = mappedPriorities[a[2]] - mappedPriorities[b[2]];

    if (priorityComparison === 0) {
      return b[3] - a[3];
    }
    return priorityComparison;
  });
  return sortedByPriorityThenTime;
}

let times = [1250, 850, 2100, 299, 205, 1643];
let names = [
  "name1 and smth else",
  "name2 whatever",
  "name3 again_theSAME",
  "name4",
  "    name5   multiple     spaces  ",
  "name6",
];
let priorities = ["MEDIUM", "CRITICAL", "HIGH", "LOW", "MINOR"];

let tests = [
  ["Test1", "PASS", "HIGH", 1500],
  ["Test2", "FAIL", "LOW", 500],
  ["Test3", "BLOCKED", "HIGH", 1200],
  ["Test4", "SKIP", "MEDIUM", 2000],
  ["Test5", "FAIL", "CRITICAL", 800],
];

console.log("Sorted by time:", sortIndicesByTime(names, times));
console.log("Sorted by name length:", sortNamesByLength(names));
console.log("Sorted by priority:", sortByPriority(priorities));
console.log(
  "Sort by priority then by time:",
  sortFailedByPriorityThenTime(tests)
);
