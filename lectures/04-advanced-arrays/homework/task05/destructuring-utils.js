export { quickPassedAlphabetical };

//Print array values
function readTestRow(row) {
  let [name, status, priority, time] = row;

  return `Status: ${status} | Name: ${name} | Time: ${time}ms | Priority: ${priority}`;
}

//Returning first and last element of array
function extractFirstLast(arr) {
  let [firstElement, , , , , , , ,] = arr;
  let lastElement = arr[arr.length - 1];

  return [firstElement, lastElement];
}

//Return only passed test cases sorted alphabetically
function quickPassedAlphabetical(tests) {
  let passCases = tests
    .filter(function (test) {
      let [, status, , time] = test;
      return status === "PASS" && time < 500;
    })
    .map(function (test) {
      let [name] = test;
      return name;
    })
    .sort();
  return passCases;
}

let singleTest = ["Test1", "PASS", "HIGH", 205];
let tests = [
  ["Test1", "PASS", "HIGH", 205],
  ["Test2", "FAIL", "LOW", 150],
  ["Test3", "BLOCKED", "HIGH", 1200],
  ["Test4", "SKIP", "MEDIUM", 300],
  ["Test5", "PASS", "CRITICAL", 450],
];
console.log(readTestRow(singleTest));
console.log("First and last arr elements are:", extractFirstLast(singleTest));
console.log("Passed tests:", quickPassedAlphabetical(tests));
