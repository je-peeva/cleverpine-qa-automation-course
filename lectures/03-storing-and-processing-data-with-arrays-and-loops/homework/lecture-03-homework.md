<homework_assignment>
# Lecture 3 Homework Assignment: Arrays, Loops & Test Data Processing

## Overview

Welcome to your third homework assignment! This assignment focuses on mastering arrays and loops - two fundamental concepts that will transform how you handle test data and automate repetitive testing tasks. You'll build a comprehensive test data processing system that demonstrates how arrays and loops work together to solve real-world QA automation challenges.

**Estimated Total Time: 7.5 hours** (broken down per task)

## Assignment Structure

This assignment follows a progressive building approach:
- **3 Core Tasks** - Each focuses on essential array and loop concepts from Lecture 3
- **1 Integration Task** - Combines your work into a complete test suite management system
- Each task builds reusable components that integrate seamlessly in the final task

---

## Task 1: Array-Based Test Data Management System
**Estimated Time: 2.5 hours**

### Objective
Create a comprehensive test data management system using arrays to store, organize, and manipulate different types of testing data using the basic array operations covered in the lecture.

### What You'll Build
- Test data collections using array creation and indexing
- Data manipulation functions using push() and pop() methods
- Test result tracking systems using array length property
- Dynamic test data builders for different testing scenarios

### Step-by-Step Instructions

#### Step 1.1: Create Basic Test Data Arrays (45 minutes)

1. Create a new folder: `lectures/03-arrays-loops/homework/task01`
2. Create a file called `test-data-manager.js`
3. Create a function called `initializeTestData` that:
   - Creates an empty array called `testUsers` using [] syntax
   - Creates an array called `testEnvironments` with three elements: "development", "staging", "production"
   - Creates an array called `browserTypes` with four elements: "Chrome", "Firefox", "Safari", "Edge"
   - Uses console.log to display the length of each array
   - Returns an array containing all three arrays in order: `[testUsers, testEnvironments, browserTypes]`
4. Create a function called `displayTestDataInfo` that:
   - Takes three parameters: `testUsers`, `testEnvironments`, and `browserTypes` (the arrays from the previous function)
   - Uses array indexing to access and display the first element of each array (e.g., `testEnvironments[0]`)
   - Uses array indexing to access and display the last element of each array using `.length - 1`
   - Uses console.log to show: "First environment: [value]", "Last browser: [value]", etc.
   - Returns the count of total data elements across all arrays

#### Step 1.2: Build Test Data Manipulation Functions (60 minutes)

1. Create a function called `addTestUsers` that:
   - Takes userArray and newUserEmail parameters
   - Uses console.log to show current array length before adding
   - Uses push() method to add the newUserEmail to userArray
   - Uses console.log to show new array length after adding
   - Uses console.log to display the complete updated array
   - Returns the updated array length
2. Create a function called `buildTestQueue` that:
   - Takes no parameters
   - Creates an empty array called `testQueue`
   - Uses push() method to add five test case names: "login_test", "logout_test", "registration_test", "password_reset", "profile_update"
   - After each push(), uses console.log to show: "Added [testName], Queue length: [length]"
   - Returns the completed testQueue array
3. Create a function called `processTestQueue` that:
   - Takes testQueue parameter
   - Uses a while loop structure: while (testQueue.length > 0)
   - Inside the loop: uses pop() method to remove the last test from queue
   - Uses console.log to display: "Processing: [testName], Remaining: [queue.length]"
   - After the loop, uses console.log to confirm: "All tests processed, queue is empty"
   - Returns the total number of tests that were processed
4. Create a function called `manageTestResults` that:
   - Takes no parameters
   - Creates three empty arrays: `passedTests`, `failedTests`, `skippedTests`
   - Uses push() to add sample data:
     - Add "login_functionality" and "user_registration" to passedTests
     - Add "payment_processing" to failedTests  
     - Add "email_notifications" to skippedTests
   - Uses console.log to display the length of each results array
   - Returns an array containing all three result arrays in order: `[passedTests, failedTests, skippedTests]`

#### Step 1.3: Advanced Array Operations for Test Scenarios (45 minutes)

1. Create a function called `rotateTestEnvironments` that:
   - Takes environmentsArray parameter
   - Uses array indexing to access the first element (environmentsArray[0])
   - Uses pop() method to remove the last element and store it in a variable
   - Uses push() method to add the first element to the end of the array
   - Modifies the first position by setting environmentsArray[0] to the popped element
   - Uses console.log to display the array before and after rotation
   - Returns the rotated array
2. Create a function called `validateTestDataIntegrity` that:
   - Takes three parameters: `testUsers`, `testEnvironments`, and `browserTypes`
   - Creates an empty array called `validationIssues`
   - Uses array indexing and .length property to check each array:
     - If testUsers.length === 0, use push() to add "No test users defined" to validationIssues
     - If testEnvironments.length < 2, use push() to add "Insufficient environments" to validationIssues
     - If browserTypes.length < 3, use push() to add "Not enough browsers for testing" to validationIssues
   - Uses console.log to display each validation check result
   - Returns the `validationIssues` array
3. Create a function called `generateTestReport` that:
   - Takes three parameters: `passedTests`, `failedTests`, and `skippedTests`
   - Uses `.length` to calculate total tests: `passedTests.length + failedTests.length + skippedTests.length`
   - Uses array indexing to display first failed test if any exist (`failedTests[0]`)
   - Uses console.log to display complete test counts and first failure if present
   - Returns an array `[totalTests, passedCount, failedCount, skippedCount]`

### Expected Deliverables
- Working test data management system with proper array creation and manipulation
- Functions demonstrating push(), pop(), .length, and array indexing
- Test data validation and processing capabilities
- All functions with clear console output showing array operations

### Success Criteria
- All arrays are created and manipulated using only basic array operations from the lecture
- Functions properly use push() and pop() methods with appropriate logging
- Array indexing works correctly for accessing first, last, and specific elements
- Console output clearly shows array state changes and operations

---

## Task 2: Loop-Based Test Processing Engine
**Estimated Time: 2.5 hours**

### Objective
Build a comprehensive test processing engine using for loops and while loops to automate repetitive testing tasks and process test data collections efficiently.

### What You'll Build
- For loop systems for processing test data arrays
- While loop systems for retry mechanisms and condition-based processing
- Test execution simulation using both loop types
- Performance monitoring systems using loop-based calculations

### Step-by-Step Instructions

#### Step 2.1: For Loop Test Data Processors (75 minutes)

1. Create a new folder: `lectures/03-arrays-loops/homework/task02`
2. Create a file called `test-processing-engine.js`
3. Create a function called `processAllTestUsers` that:
   - Takes testUsers array parameter
   - Uses a for loop: for (let i = 0; i < testUsers.length; i++)
   - Inside the loop: uses array indexing testUsers[i] to access current user
   - Uses console.log to display: "Processing user [i + 1]: [user email]"
   - After the loop: uses console.log to show total users processed
   - Returns the number of users processed (testUsers.length)
4. Create a function called `validateAllEmails` that:
   - Takes emailArray parameter  
   - Creates an empty array called `validEmails` 
   - Creates an empty array called `invalidEmails`
   - Uses a for loop to iterate through emailArray
   - Inside the loop: uses string method includes("@") to check if email is valid
   - If valid, uses push() to add to validEmails array
   - If invalid, uses push() to add to invalidEmails array
   - Uses console.log inside loop to show: "Email [i + 1]: [email] - [VALID/INVALID]"
   - After the loop: displays counts using .length property
   - Returns an array `[validEmails, invalidEmails]`
5. Create a function called `calculateResponseTimes` that:
   - Takes responseTimesArray parameter (array of numbers in milliseconds)
   - Creates variables: let totalTime = 0, let slowestTime = 0
   - Uses a for loop to iterate through responseTimesArray
   - Inside the loop: adds current response time to totalTime using +=
   - Inside the loop: compares current time with slowestTime using comparison operators, update if larger
   - Uses console.log inside loop to show: "Response [i + 1]: [time]ms"
   - After the loop: calculates average time using totalTime / responseTimesArray.length
   - Uses console.log to display total, average, and slowest times
   - Returns an array `[totalTime, averageTime, slowestTime]`
6. Create a function called `simulateTestExecution` that:
   - Takes testCases array parameter
   - Creates an empty array called `executionResults`
   - Uses a for loop to iterate through `testCases`
   - Inside the loop: builds a result string like `"[testName]:[status]"`
   - Uses conditional logic: if `i % 3 === 0`, set status to `"FAIL"`, otherwise `"PASS"`
   - Uses `push()` to add the result string to `executionResults`
   - Uses console.log to display: "Executed: [testName] - [status]"
   - After the loop: counts passed and failed tests using another for loop (e.g., check if a result string includes `":PASS"`)
   - Returns the `executionResults` array

#### Step 2.2: While Loop Processing Systems (60 minutes)

1. Create a function called `retryFailedTest` that:
   - Takes testName parameter
   - Creates variables: let attempts = 0, let maxRetries = 3, let testPassed = false
   - Uses a while loop: while (attempts < maxRetries && !testPassed)
   - Inside the loop: increment attempts using ++ operator
   - Inside the loop: uses conditional logic based on attempts number to simulate success
   - If attempts === 3, set testPassed = true (simulate success on final attempt)
   - Uses console.log to show: "Retry attempt [attempts] for [testName]: [PASS/FAIL]"
   - After the loop: uses conditional to log final result
   - Returns an array `[testPassed, attempts]`
2. Create a function called `monitorTestQueue` that:
   - Takes testQueue array parameter
   - Creates variables: let processedCount = 0, let maxProcessingTime = 10
   - Uses a while loop: while (testQueue.length > 0 && processedCount < maxProcessingTime)
   - Inside the loop: uses pop() to remove last test from queue
   - Inside the loop: increment processedCount using ++
   - Uses console.log to show: "Processed test [processedCount], Queue remaining: [testQueue.length]"
   - After the loop: checks if queue is empty or time limit reached
   - Uses console.log to show final status and reason for stopping
   - Returns an array `[processedCount, testQueue.length]` (remaining tests)
3. Create a function called `waitForTestCompletion` that:
   - Takes expectedDuration parameter (number of iterations to simulate)
   - Creates variables: let elapsedTime = 0, let testComplete = false
   - Uses a while loop: while (!testComplete && elapsedTime < expectedDuration * 2)
   - Inside the loop: increment elapsedTime using ++
   - Inside the loop: uses conditional logic based on elapsedTime to simulate completion
   - If elapsedTime >= expectedDuration, set testComplete = true
   - Uses console.log every few iterations to show: "Waiting... Elapsed time: [elapsedTime]"
   - After the loop: uses conditional to determine if test completed or timed out
   - Returns an array `[testComplete, elapsedTime]`
4. Create a function called `processTestResultsStream` that:
   - Takes testResults array parameter
   - Creates variables to track different result types: let passCount = 0, let failCount = 0
   - Creates variable: let currentIndex = 0
   - Uses a while loop: while (currentIndex < testResults.length)
   - Inside the loop: uses array indexing testResults[currentIndex] to access current result
   - Uses conditional logic to check result status and increment appropriate counter
   - Increment currentIndex using ++
   - Uses console.log to show progress: "Processing result [currentIndex]: [result]"
   - After the loop: calculates success rate using arithmetic
   - Returns an array `[passCount, failCount, successRate]`

#### Step 2.3: Loop Pattern Comparisons (15 minutes)

1. Create a function called `compareLoopApproaches` that:
   - Takes dataArray parameter
   - Uses console.log to announce "Comparing for loop vs while loop approaches"
   - Implements the same data processing using both for loop and while loop:
     - For loop version: uses standard for (let i = 0; i < dataArray.length; i++) pattern
     - While loop version: uses let index = 0; while (index < dataArray.length) with manual increment
   - Both loops should process each element and count processed items
   - Uses console.log to show timing and approach differences
   - Returns an array `[forProcessedCount, whileProcessedCount]`

### Expected Deliverables
- Complete test processing engine using for loops for array iteration
- While loop systems for condition-based and retry processing
- Functions demonstrating both loop types in testing contexts
- Performance monitoring and test simulation capabilities

### Success Criteria
- For loops properly iterate through arrays using demonstrated syntax
- While loops handle condition-based processing and retry mechanisms
- Functions combine loops with conditionals from previous lectures
- All loop implementations follow patterns demonstrated in lecture

---

## Task 3: Advanced Array & Loop Integration with Conditionals
**Estimated Time: 2 hours**

### Objective
Integrate arrays, loops, and conditional logic to build sophisticated test processing systems that handle complex testing scenarios, use nested conditions within loops, and implement loop control mechanisms.

### What You'll Build
- Complex test result analysis systems using loops with conditionals
- Nested loop systems for multi-dimensional test processing
- Loop control systems using break and continue statements
- Comprehensive test validation and reporting engines

### Step-by-Step Instructions

#### Step 3.1: Conditionals Inside Loops for Complex Processing (60 minutes)

1. Create a new folder: `lectures/03-arrays-loops/homework/task03`
2. Create a file called `advanced-test-processor.js`
3. Create a function called `analyzeTestResults` that:
   - Takes testNames, testResults, and executionTimes arrays (all same length)
   - Creates empty arrays: `criticalFailures`, `slowTests`, `quickPasses`
   - Uses a for loop to iterate through all arrays simultaneously using same index
   - Inside the loop, uses multiple if/else conditions:
     - If testResults[i] === "FAIL" and testNames[i] includes "login", push to criticalFailures
     - Else if testResults[i] === "PASS" and executionTimes[i] > 2000, push to slowTests  
     - Else if testResults[i] === "PASS" and executionTimes[i] < 500, push to quickPasses
   - Uses console.log inside conditionals to show categorization
   - After the loop, displays counts using .length property
   - Returns an array `[criticalFailures, slowTests, quickPasses]`
4. Create a function called `processTestEnvironments` that:
   - Takes testCases and environments arrays
   - Creates an empty array called `environmentResults`
   - Uses a for loop for testCases (outer iteration)
   - Uses another for loop for environments (inner iteration) - this creates nested loops
   - Inside inner loop: builds a result string like `"[testCase]|[environment]|[status]"`
   - Uses conditional logic: if environment === "production", set higher failure rate
   - Uses push() to add the result string to `environmentResults` array
   - Uses console.log to show each combination being processed
   - Returns the environmentResults array
5. Create a function called `validateTestDataQuality` that:
   - Takes three parallel arrays: `emails`, `passwords`, and `ages` (all same length)
   - Creates empty arrays: `validUsers`, `invalidUsers`, `fixableUsers`
   - Uses a for loop to iterate through the arrays by index
   - Inside the loop, creates variables for validation flags based on `emails[i]`, `passwords[i]`, and `ages[i]`
   - Uses multiple conditionals to check each user:
     - Check if email includes "@" and "."
     - Check if password length >= 8
     - Check if age >= 18 and age <= 100
    - Uses nested conditionals to categorize:
       - If all validations pass, push the user's email to `validUsers`
       - Else if only one validation fails, push the user's email to `fixableUsers`
       - Else push the user's email to `invalidUsers`
    - Uses console.log to show validation process for each user
    - Returns an array `[validUsers, invalidUsers, fixableUsers]`

#### Step 3.2: Loop Control with Break and Continue (30 minutes)

1. Create a function called `findFirstCriticalError` that:
   - Takes testResults and errorMessages arrays
   - Uses a for loop to iterate through arrays
   - Inside the loop, uses conditional to check if testResults[i] === "FAIL"
   - If true, uses another conditional to check if errorMessages[i] includes "critical"
   - If critical error found, uses console.log to display details
   - Uses break statement to exit the loop immediately
   - After the loop, checks if critical error was found and logs result
   - Returns the index of first critical error or -1 if none found
2. Create a function called `processValidTestsOnly` that:
   - Takes two arrays: `testNames` and `testStatuses` (aligned by index)
   - Creates an empty array called `processedTests`
   - Uses a for loop to iterate through the arrays by index
   - Inside the loop, uses conditional to check if `testStatuses[i]` is "SKIP" or "INVALID"
   - If true, uses console.log to show skipping message
   - Uses continue statement to skip to next iteration
   - After the continue check, processes the valid test (remaining code in loop)
   - Uses push() to add the processed test name to the results array
   - Uses console.log to show successful processing
   - Returns the processedTests array
3. Create a function called `monitorTestExecutionWithLimits` that:
   - Takes testQueue array and maxFailures parameter
   - Creates variables: let failureCount = 0, let processedCount = 0
   - Uses a while loop: while (testQueue.length > 0)
   - Inside the loop, uses pop() to get next test
   - Uses conditional logic to simulate test execution (some pass, some fail)
   - If test fails, increment failureCount
   - Uses conditional with break: if failureCount >= maxFailures, break out of loop
   - Uses console.log to track progress and failures
   - Returns an array `[processedCount, failureCount, testQueue.length]`

#### Step 3.3: Comprehensive Test Scenario Processing (30 minutes)

1. Create a function called `executeComprehensiveTestSuite` that:
   - Takes three parameters: `testCases`, `environments`, and `userRoles`
   - Creates empty arrays for different result categories
   - Uses nested for loops to process all combinations:
     - Outer loop for testCases
     - Middle loop for environments  
     - Inner loop for userRoles
   - Inside innermost loop, uses complex conditional logic:
     - Different success rates based on environment and user role
     - Special handling for critical test cases
     - Skip certain combinations based on business rules
   - Uses appropriate break or continue statements based on conditions
   - Collects results into categorized arrays using push() (each entry can be a string like `"case|env|role|status"`)
   - Uses console.log to show processing progress
   - Returns an array `[passedResults, failedResults, skippedResults, criticalResults]`
2. Create a function called `generateDetailedTestReport` that:
   - Takes parallel arrays describing results: `resultNames`, `resultStatuses`, `resultTimes`, `resultEnvironments`
   - Creates variables to track various metrics
   - Uses a for loop to process all results
   - Inside the loop, uses complex conditionals to categorize results:
     - Count different types of results
     - Identify patterns in failures
     - Calculate performance metrics
     - Track environment-specific issues
   - Uses nested conditionals for detailed analysis
   - Builds detailed report metrics using numbers and arrays (no objects required)
   - Uses console.log to display comprehensive report
   - Returns an array of key metrics, for example: `[totalCount, passCount, failCount, slowCount]`

### Expected Deliverables
- Advanced test processing systems combining arrays, loops, and conditionals
- Nested loop implementations for multi-dimensional processing
- Loop control mechanisms using break and continue
- Complex test analysis and reporting capabilities

### Success Criteria
- Loops properly integrate with conditionals from previous lectures
- Nested loops handle multi-dimensional data processing correctly  
- Break and continue statements work as demonstrated in lecture
- Complex conditional logic within loops produces expected categorization
- All implementations use only concepts taught in current and previous lectures

---

## Integration Task: Complete Test Suite Management System
**Estimated Time: 0.5 hours**

### Objective
Integrate all components from previous tasks into a unified test suite management system that demonstrates a realistic QA automation workflow using arrays, loops, and conditionals working together.

### What You'll Build
- Master test suite controller that uses all previous components
- Comprehensive test workflow demonstration
- Professional test automation system that processes multiple scenarios

### Step-by-Step Instructions

#### Integration Step 1: Create Master Test Controller (15 minutes)

1. In your `lectures/03-arrays-loops/homework/` directory, create a file called `test-suite-manager.js`
2. At the top of the file, add comments explaining this integrates all array and loop concepts
3. Copy key functions from all three tasks into this file (or use import/export if configured)
4. Create a function called `executeFullTestSuite` that:
   - Uses `initializeTestData` from Task 1 to create test data arrays
   - Uses `buildTestQueue` from Task 1 to create test cases to process
   - Uses `processAllTestUsers` from Task 2 to simulate user testing
   - Uses `analyzeTestResults` from Task 3 to categorize results
   - Passes data between functions using the arrays and values they return
   - Uses console.log to show the complete workflow progress
   - Returns a summary array combining key outputs (e.g., counts and selected result arrays)

#### Integration Step 2: Build Complete Demo Workflow (15 minutes)

1. Create a function called `runTestSuiteDemo` that:
   - Creates sample test data using array creation syntax
   - Demonstrates the complete testing workflow:
     - Initialize test data collections
     - Process test cases using for loops
     - Handle retries using while loops  
     - Analyze results using conditionals in loops
     - Generate final reports
   - Uses console.log with clear section headers to show each phase
   - Calls `executeFullTestSuite` to run the integrated workflow
   - Displays final metrics and summary using array lengths and calculations
2. At the bottom of the file, call `runTestSuiteDemo()` to execute the complete demonstration

### Final Integration Test

1. Run your integrated test suite manager: `node lectures/03-arrays-loops/homework/test-suite-manager.js`
2. Verify that output shows:
   - Array creation and manipulation using push, pop, length
   - For loop processing of test data arrays
   - While loop handling of conditional processing
   - Conditionals working within loops for decision making
   - Break and continue statements controlling loop flow
3. Check that all functions work together without errors
4. Confirm output demonstrates realistic test automation workflow

### Expected Deliverables
- Working master test suite manager integrating all array and loop concepts
- Comprehensive demonstration showing arrays, loops, and conditionals working together
- Professional output showing complete test workflow
- All components from previous tasks working seamlessly together

### Success Criteria
- Integration script runs without errors using only concepts from lectures 1-3
- Demonstrates all array operations: creation, indexing, push, pop, length
- Shows both for and while loops processing test data appropriately
- Conditionals work properly within loops for decision making
- Output shows realistic test automation scenarios and workflow

---

## Submission Guidelines

### What to Submit
1. Your complete `lectures/03-arrays-loops/homework/` folder with all task directories
2. Confirmation that your integration script runs without errors
3. Console output from your test suite manager showing the complete workflow

### How to Verify Your Work
Before submission, run this command from your root directory:
```bash
node lectures/03-arrays-loops/homework/test-suite-manager.js
```
The output should demonstrate arrays, loops, and conditionals working together in a comprehensive test automation context.

---

## Time Management Tips

- **Task 1 (2.5 hours)**: Focus on mastering basic array operations first - creation, indexing, push, pop, length
- **Task 2 (2.5 hours)**: Practice both for and while loops thoroughly, understand when to use each
- **Task 3 (2 hours)**: Take time to understand how conditionals work inside loops
- **Integration (0.5 hours)**: Focus on connecting all components smoothly

### Common Issues
1. **Array indexing confusion**: Remember arrays start at index 0, not 1
2. **Loop infinite loops**: Always ensure loop conditions eventually become false
3. **Variable scope in loops**: Variables declared in loops are only accessible within them

### Getting Help
- Review lecture examples for correct syntax patterns
- Use console.log to debug array contents and loop iterations
- Test each function individually before integrating
- Verify array operations work correctly before adding loops

## Troubleshooting Support

### Common Issues
1. **For loop syntax errors**: Double-check initialization, condition, and increment sections
2. **While loop infinite loops**: Ensure condition variables are modified inside the loop
3. **Array method confusion**: Remember push() adds to end, pop() removes from end
4. **Break/continue placement**: These statements only work inside loops

### Getting Help
- Use console.log to track array changes and loop progress
- Test loops with small arrays first before using larger datasets
- Verify conditional logic outside loops before adding them inside
- Check that function parameters match the arrays being passed

---
</homework_assignment>