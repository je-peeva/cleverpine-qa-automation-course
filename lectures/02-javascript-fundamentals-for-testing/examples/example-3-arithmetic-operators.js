// Basic arithmetic in testing context
let baseTimeout = 5000; // 5 seconds
let additionalTime = 2000; // 2 seconds
let totalTimeout = baseTimeout + additionalTime;
console.log("Total timeout:", totalTimeout + "ms");

// Calculating test execution times
let testStartTime = 1000;
let testEndTime = 3500;
let executionTime = testEndTime - testStartTime;
console.log("Test executed in:", executionTime + "ms");

// Working with counts and iterations
let totalTests = 20;
let failedTests = 3;
let passedTests = totalTests - failedTests;
let successRate = (passedTests / totalTests) * 100;
console.log("Success rate:", successRate + "%");

// Modulo operator for cycling through test data
let testDataSets = 4;
let currentIteration = 7;
let dataSetToUse = currentIteration % testDataSets; // Results in 3 (0-based index)
console.log("Using test data set:", dataSetToUse);

// Incrementing counters (common in test loops)
let attemptCount = 0;
attemptCount++; // Same as attemptCount = attemptCount + 1
console.log("Attempt number:", attemptCount);
