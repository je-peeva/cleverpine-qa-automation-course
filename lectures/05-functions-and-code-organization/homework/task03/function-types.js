export { formatTestResultExpr, calculateAverageArrow };

//Test result - Declaration function
function formatTestResultDecl(testName, status) {
  let icon = status === "PASS" ? "✔" : "❌";

  return `${icon} ${testName} : ${status}`;
}

//Test result - Expression function
let formatTestResultExpr = function (testName, status) {
  let icon = status === "PASS" ? "✔" : "❌";

  return `${icon} ${testName} : ${status}`;
};

//Test result - Arrow function
let formatTestResultArrow = (testName, status) => {
  let icon = status === "PASS" ? "✔" : "❌";

  return `${icon} ${testName} : ${status}`;
};

//Calculate average - Declaration function
function calculateAverageDecl(numbers) {
  let sum = numbers.reduce((sum, number) => sum + number, 0);
  return sum / numbers.length;
}

//Calculate average - Expression function
let calculateAverageExpr = function (numbers) {
  let sum = numbers.reduce((sum, number) => sum + number, 0);
  return sum / numbers.length;
};

//Calculate average - Arrow function
let calculateAverageArrow = (numbers) => {
  let sum = numbers.reduce((sum, number) => sum + number, 0);
  return sum / numbers.length;
};

let testName1 = "jeTest1";
let testName2 = "jeTest2";
let testName3 = "jeTest3";
let testStatus1 = "PASS";
let testStatus2 = "FAIL";
let testStatus3 = "SKIP";
let numbers = [10, 20, 30];

console.log("===== Test Result Formatters =====");
console.log(formatTestResultDecl(testName1, testStatus1));
console.log(formatTestResultExpr(testName2, testStatus2));
console.log(formatTestResultArrow(testName3, testStatus3));

console.log("===== Average Time =====");
console.log(calculateAverageDecl(numbers));
console.log(calculateAverageExpr(numbers));
console.log(calculateAverageArrow(numbers));
