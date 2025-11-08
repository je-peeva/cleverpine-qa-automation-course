<homework_assignment>

# Lecture 2 Homework Assignment: JavaScript Fundamentals for Testing

## Overview

Welcome to your second homework assignment! This assignment focuses on mastering JavaScript fundamentals that are essential for test automation: string manipulation, numeric operations, comparison logic, and decision-making structures. You'll build a comprehensive test validation system that demonstrates real-world QA automation scenarios.

**Estimated Total Time: 7.5 hours** (broken down per task)

## Assignment Structure

This assignment follows a progressive building approach:

- **3 Core Tasks** - Each focuses on specific JavaScript fundamentals from Lecture 2
- **1 Integration Task** - Combines your work into a complete test validation framework
- All tasks build reusable components that work together in the final integration

---

## Task 1: Dynamic Test Data Generation & Arithmetic Operations

**Estimated Time: 2.5 hours**

### Objective

Build a comprehensive test data generation system using string manipulation, template literals, and arithmetic operations for calculating test metrics and performance data.

### What You'll Build

- Dynamic test data generators using string operations
- Performance calculation functions using arithmetic operators
- URL and message builders for different test environments
- Test metrics calculators

### Step-by-Step Instructions

#### Step 1.1: String-Based Test Data Generators (45 minutes)

1. Create a new folder: `lectures/02-fundamentals/homework/task01`
2. Create a file called `test-data-generators.js`
3. Create a function called `generateTestUserName` that:
   - Takes a basePrefix parameter (like "testuser")
   - Uses `Date.now()` to get current timestamp
   - Uses string concatenation to combine prefix + "\_" + timestamp
   - Returns the generated username
   - Uses console.log to display the generated name
4. Create a function called `buildTestURL` that:
   - Takes environment, endpoint, and userId parameters
   - Uses template literals to create: `https://${environment}.testsite.com/${endpoint}?user=${userId}`
   - Returns the complete URL
   - Logs the URL with a descriptive message
5. Create a function called `createTestMessage` that:
   - Takes testName, status, and duration parameters
   - Uses template literals to build: `Test: ${testName} | Status: ${status} | Duration: ${duration}ms`
   - Returns the formatted message
   - Uses console.log to display the message

#### Step 1.2: Arithmetic Operations for Test Metrics (60 minutes)

1. In the same file, create a function called `calculateResponseTime` that:
   - Takes startTime and endTime parameters (both numbers)
   - Calculates duration using subtraction: endTime - startTime
   - Returns the duration in milliseconds
   - Uses console.log to display "Response time: [duration]ms"
2. Create a function called `calculateSuccessRate` that:
   - Takes totalTests and passedTests parameters
   - Calculates failed tests using subtraction: totalTests - passedTests
   - Calculates success percentage using: (passedTests / totalTests) \* 100
   - Returns an object with: totalTests, passedTests, failedTests, successRate
   - Logs all calculated values
3. Create a function called `adjustTimeout` that:
   - Takes baseTimeout and multiplier parameters
   - Uses multiplication to calculate: baseTimeout \* multiplier
   - Uses the modulus operator (%) to ensure timeout doesn't exceed 30000ms
   - If result > 30000, use result % 30000 to wrap around
   - Returns the adjusted timeout
   - Logs both original and adjusted timeout values
4. Create a function called `incrementTestCounter` that:
   - Takes currentCount parameter
   - Uses the increment operator (++) to add 1: currentCount + 1
   - Uses assignment operator (+=) to add 5 more: result += 5
   - Returns the final count
   - Logs the progression: original → +1 → +5 → final

#### Step 1.3: Advanced String Manipulation for Test Data (45 minutes)

1. Create a function called `processTestEnvironment` that:
   - Takes environmentName parameter
   - Uses `toLowerCase()` to normalize the name
   - Uses template literals to create base URL: `https://${normalizedName}.example.com`
   - Uses `toUpperCase()` to create the display name
   - Returns object with: originalName, normalizedName, baseURL, displayName
   - Logs all transformations
2. Create a function called `extractTestInfo` that:
   - Takes a testResultString parameter (format: "TestName:PASSED:250ms")
   - Uses `split(":")` to break into array parts
   - Extracts testName (first element), status (second element), duration (third element)
   - Uses `replace("ms", "")` to get numeric duration
   - Returns object with extracted information
   - Logs the extraction process and results
3. Create a function called `buildTestSummary` that:
   - Takes testName, environment, userCount, and avgResponseTime parameters
   - Uses multiple template literals to create a multi-line summary
   - Calculate total execution time: userCount \* avgResponseTime
   - Format everything into a comprehensive test report string
   - Returns the complete summary
   - Logs the formatted summary

### Expected Deliverables

- Working test data generation system with string manipulation
- Arithmetic calculation functions for test metrics
- Advanced string processing for test information
- All functions demonstrating proper console output

### Success Criteria

- All string operations work correctly with various inputs
- Arithmetic calculations produce accurate results
- Functions handle different parameter combinations
- Console output is clear and informative

---

## Task 2: Test Validation Using Comparison Operators & String Methods

**Estimated Time: 2.5 hours**

### Objective

Build a comprehensive test validation system using comparison operators, logical operators, and string methods to verify test results and process response data.

### What You'll Build

- Result comparison functions using all comparison operators
- String validation functions using essential string methods
- Complex validation logic using logical operators
- Text processing utilities for test data extraction

### Step-by-Step Instructions

#### Step 2.1: Comparison Operator Validation Functions (60 minutes)

1. Create a new folder: `lectures/02-fundamentals/homework/task02`
2. Create a file called `test-validators.js`
3. Create a function called `validateStatusCode` that:
   - Takes expectedCode and actualCode parameters
   - Uses strict equality (===) to compare the values
   - Uses console.log to display both values and comparison result
   - Returns true if they match, false otherwise
   - Also check with loose equality (==) and log the difference
4. Create a function called `validateResponseTime` that:
   - Takes actualTime and maxAllowedTime parameters
   - Uses less than or equal (<=) operator to validate
   - Uses console.log to show: "Response time [actualTime]ms is within limit [maxAllowedTime]ms: [result]"
   - Returns boolean result
5. Create a function called `validatePerformanceRange` that:
   - Takes responseTime, minTime, and maxTime parameters
   - Uses greater than or equal (>=) and less than or equal (<=) operators
   - Checks if responseTime >= minTime AND responseTime <= maxTime
   - Uses console.log to display the range check
   - Returns true if within range, false otherwise
6. Create a function called `compareVersions` that:
   - Takes currentVersion and requiredVersion parameters (both strings like "1.2.3")
   - Uses not equal (!==) operator to check if they differ
   - Uses console.log to display comparison result
   - Returns true if versions are different, false if same

#### Step 2.2: String Methods for Text Validation (75 minutes)

1. In the same file, create a function called `validateErrorMessage` that:
   - Takes errorMessage parameter
   - Uses `includes()` to check if message contains "error" (case-insensitive)
   - Uses `toLowerCase()` before the includes check
   - Uses `indexOf()` to find position of "error" in the message
   - Uses console.log to display: position found, whether it contains error text
   - Returns true if error is mentioned, false otherwise
2. Create a function called `extractUserIdFromResponse` that:
   - Takes responseText parameter (format: "User created successfully with ID: 12345")
   - Uses `indexOf("ID: ")` to find the position of the ID marker
   - Uses `slice()` to extract everything after "ID: "
   - Uses `trim()` to remove any whitespace
   - Returns the extracted ID as a string
   - Logs the extraction process and result
3. Create a function called `validateEmailFormat` that:
   - Takes email parameter
   - Uses `includes("@")` to check for @ symbol
   - Uses `includes(".")` to check for dot
   - Uses `indexOf("@")` and `indexOf(".")` to ensure @ comes before the last dot
   - Uses console.log to display each validation step
   - Returns true only if all validations pass
4. Create a function called `processTestDataCSV` that:
   - Takes csvString parameter (format: "test1,test2,test3,test4")
   - Uses `split(",")` to create an array of test names.
   - **Note:** Do not use loops for this task. Focus only on the string-to-array conversion.
   - Returns the array of test names.
   - Logs the original string and the resulting array.
5. Create a function called `normalizeTestName` that:
   - Takes testName parameter
   - Uses `trim()` to remove whitespace
   - Uses `toLowerCase()` to normalize case
   - Uses `replace()` to replace spaces with underscores
   - Uses `slice()` to limit name to maximum 20 characters
   - Returns the normalized name
   - Logs the transformation steps

#### Step 2.3: Logical Operators for Complex Validation (45 minutes)

1. Create a function called `validateCompleteAPIResponse` that:
   - Takes statusCode, responseTime, hasData, and errorCount parameters
   - Uses AND operator (&&) to check: statusCode === 200 AND responseTime < 1000 AND hasData === true
   - Uses AND operator to also check: errorCount === 0
   - Combines both conditions with AND
   - Uses console.log to display each condition and final result
   - Returns true only if all conditions pass
2. Create a function called `checkTestEnvironmentAccess` that:
   - Takes userRole, isAuthenticated, and environment parameters
   - Uses OR operator (||) to allow access if: userRole === "admin" OR userRole === "tester"
   - Uses AND operator to also require: isAuthenticated === true
   - Uses OR operator for environment: environment === "dev" OR environment === "staging"
   - Combines all conditions appropriately
   - Uses console.log to show the logic evaluation
   - Returns true if access should be granted
3. Create a function called `validateTestNotFailed` that:
   - Takes hasErrors, isCancelled, and isTimeout parameters
   - Uses NOT operator (!) to check: NOT hasErrors AND NOT isCancelled AND NOT isTimeout
   - Uses console.log to display each NOT condition
   - Returns true if test didn't fail for any reason
4. Create a function called `complexValidationScenario` that:
   - Takes multiple parameters: statusCode, responseTime, userRole, dataCount, environment
   - Combines multiple logical operators to create a complex validation
   - Uses parentheses to group conditions appropriately
   - Example logic: (statusCode === 200 AND responseTime < 500) OR (userRole === "admin" AND environment === "dev")
   - Uses console.log to break down the complex logic step by step
   - Returns the final validation result

### Expected Deliverables

- Complete validation system using comparison operators
- String processing functions using all demonstrated string methods
- Complex logical validation functions
- All functions with comprehensive logging

### Success Criteria

- All comparison operators work correctly with different data types
- String methods properly process and validate text data
- Logical operators handle complex condition combinations
- Functions demonstrate clear step-by-step validation logic

---

## Task 3: Decision-Making Logic for Test Automation

**Estimated Time: 2 hours**

### Objective

Implement comprehensive decision-making logic using if/else statements, ternary operators, switch statements, and nested conditions to handle different test scenarios and automate test flow decisions.

### What You'll Build

- Test flow control using if/else statements
- Concise decision logic using ternary operators
- Environment and scenario handling using switch statements
- Complex test logic using nested conditions

### Step-by-Step Instructions

#### Step 3.1: If/Else Statements for Test Flow Control (45 minutes)

1. Create a new folder: `lectures/02-fundamentals/homework/task03`
2. Create a file called `test-decision-engine.js`
3. Create a function called `determineTestAction` that:
   - Takes testResult and retryCount parameters
   - Uses if/else to handle different scenarios:
     - If testResult === "pass", log success message and return "complete"
     - Else if testResult === "fail" and retryCount < 3, log retry message and return "retry"
     - Else if testResult === "fail" and retryCount >= 3, log failure message and return "abort"
     - Else, log unknown result message and return "investigate"
   - Uses console.log for each decision path
4. Create a function called `validateTestData` that:
   - Takes email, password, and age parameters
   - Uses nested if statements to validate:
     - First check if email is not empty and contains "@"
     - If valid, check if password length is at least 8 characters
     - If valid, check if age is between 18 and 100
     - Return specific error messages for each failed validation
     - Return "valid" only if all checks pass
   - Log each validation step
5. Create a function called `processTestResults` that:
   - Takes totalTests, passedTests, and environment parameters
   - Calculate failedTests and successRate using arithmetic
   - Uses if/else to categorize performance:
     - If successRate >= 95, set grade to "excellent"
     - Else if successRate >= 85, set grade to "good"
     - Else if successRate >= 70, set grade to "acceptable"
     - Else, set grade to "needs improvement"
   - Uses additional if statement to adjust grade based on environment
   - If environment === "production", require higher standards (add 5% to thresholds)
   - Return object with all calculated values and grade

#### Step 3.2: Ternary Operators for Concise Logic (30 minutes)

1. Create a function called `getTestStatus` that:
   - Takes isPassed parameter
   - Uses ternary operator: isPassed ? "✅ PASSED" : "❌ FAILED"
   - Returns the status string
   - Uses console.log to display the result
2. Create a function called `determineTimeout` that:
   - Takes environment parameter
   - Uses ternary operator: environment === "production" ? 30000 : 10000
   - Returns the timeout value
   - Uses console.log to show environment and selected timeout
3. Create a function called `formatTestDuration` that:
   - Takes durationMs parameter
   - Uses ternary to format: durationMs < 1000 ? durationMs + "ms" : (durationMs/1000) + "s"
   - Returns the formatted string
   - Uses console.log to display original and formatted duration
4. Create a function called `getTestPriority` that:
   - Takes errorCount and responseTime parameters
   - Uses nested ternary: errorCount > 0 ? "high" : (responseTime > 1000 ? "medium" : "low")
   - Returns the priority level
   - Uses console.log to show the decision logic

#### Step 3.3: Switch Statements for Scenario Handling (30 minutes)

1. Create a function called `handleTestEnvironment` that:
   - Takes environment parameter
   - Uses switch statement to handle:
     - Case "development": log "Using dev settings" and return config object with fast timeouts
     - Case "staging": log "Using staging settings" and return config with medium timeouts
     - Case "production": log "Using production settings" and return config with slow timeouts
     - Default: log "Unknown environment" and return basic config
   - Each case should return different timeout values and debug modes
2. Create a function called `processHTTPStatusCode` that:
   - Takes statusCode parameter
   - Uses switch statement to handle:
     - Case 200: return "Success - Request completed"
     - Case 201: return "Created - Resource created successfully"
     - Case 400: return "Bad Request - Check your data"
     - Case 401: return "Unauthorized - Authentication required"
     - Case 404: return "Not Found - Resource doesn't exist"
     - Case 500: return "Server Error - Internal server error"
     - Default: return "Unexpected status code: " + statusCode
   - Uses console.log to display the status interpretation
3. Create a function called `selectTestDataSet` that:
   - Takes testType parameter
   - Uses switch statement to handle:
     - Case "login": return array of login test data objects
     - Case "registration": return array of registration test data
     - Case "api": return array of API endpoint test data
     - Case "performance": return array of performance test data
     - Default: return empty array
   - Each case should return different types of test data (use simple objects)
   - Uses console.log to show selected data set type and count

#### Step 3.4: Nested Conditions for Complex Scenarios (15 minutes)

1. Create a function called `complexTestDecision` that:
   - Takes userRole, environment, testType, and hasPermission parameters
   - Uses nested conditions:
     - First level: if userRole === "admin"
       - Second level: if environment === "production"
         - Third level: if testType === "critical", allow with extra logging
         - Else, allow with standard logging
       - Else (non-production), allow all tests
     - First level: else if userRole === "tester"
       - Second level: if hasPermission === true
         - Third level: if environment !== "production", allow
         - Else, deny production access
       - Else, deny access
     - First level: else, deny all access
   - Return object with: allowed (boolean), reason (string), logLevel (string)
   - Uses console.log to trace through the decision tree

### Expected Deliverables

- Complete test flow control using if/else statements
- Concise decision functions using ternary operators
- Environment and scenario handlers using switch statements
- Complex nested decision logic
- All functions with comprehensive logging and return values

### Success Criteria

- If/else statements handle all specified scenarios correctly
- Ternary operators provide concise alternative logic
- Switch statements properly categorize and handle different cases
- Nested conditions work through complex decision trees
- All functions return appropriate values and log decision processes

---

## Integration Task: Complete Test Automation Decision Engine

**Estimated Time: 0.5 hours**

### Objective

Integrate all components from previous tasks into a comprehensive test automation decision engine that demonstrates real-world QA automation scenarios combining string manipulation, arithmetic operations, validation logic, and decision-making.

### What You'll Build

- Master test execution engine that uses all previous components
- Comprehensive test scenario processor
- Professional test automation workflow demonstration

### Step-by-Step Instructions

#### Integration Step 1: Create Master Test Engine (15 minutes)

1. In your `lectures/02-fundamentals/homework/` directory, create a file called `test-automation-engine.js`
2. At the top of the file, add comments explaining that this integrates all previous components
3. Copy your key functions from all three tasks into this file (or use import/export if you set up ES modules)
4. Create a function called `executeTestScenario` that:
   - Takes scenarioName, environment, userRole, and expectedResults parameters
   - Uses `generateTestUserName` from Task 1 to create test user
   - Uses `buildTestURL` from Task 1 to create test endpoint
   - Uses `validateCompleteAPIResponse` from Task 2 with sample data
   - Uses `handleTestEnvironment` from Task 3 to get config settings
   - Uses `determineTestAction` from Task 3 based on validation results
   - Returns comprehensive result object with all processed information

#### Integration Step 2: Build Comprehensive Demo (15 minutes)

1. Create a function called `runTestAutomationDemo` that:
   - Demonstrates a complete test workflow by calling your integrated functions
   - Processes multiple test scenarios with different parameters
   - Shows string manipulation, arithmetic calculations, validations, and decisions
   - Logs each step of the automation process with clear headers
   - Calculates and displays final test metrics using your arithmetic functions
2. Create sample test data that exercises all your functions:
   - Different environments (development, staging, production)
   - Various user roles (admin, tester, guest)
   - Multiple test scenarios (login, api, performance)
   - Different response times and status codes
3. Call `runTestAutomationDemo()` at the bottom of your script

### Final Integration Test

1. Run your integrated test engine: `node lectures/02-fundamentals/homework/test-automation-engine.js`
2. Verify that output shows:
   - String manipulation and test data generation
   - Arithmetic calculations for metrics
   - Validation results using comparison and logical operators
   - Decision-making processes using all conditional structures
3. Check that all functions work together smoothly without errors
4. Confirm that output demonstrates a realistic test automation workflow

### Expected Deliverables

- Working master test automation engine that integrates all components
- Comprehensive demonstration of JavaScript fundamentals in testing context
- Professional output showing complete test workflow
- All functions working together seamlessly

### Success Criteria

- Integration script runs without errors
- Demonstrates all JavaScript concepts from Lecture 2
- Output shows realistic test automation scenarios
- Functions properly interact and pass data between each other

---

## Submission Guidelines

### What to Submit

1. Your complete `lectures/02-fundamentals/homework/` folder with all task directories
2. Confirmation that your integration script runs without errors
3. Console output from your test automation engine showing the complete workflow

### How to Verify Your Work

Before submission, run this command from your root directory:

```bash
node lectures/02-fundamentals/homework/test-automation-engine.js
```

The output should demonstrate all JavaScript fundamentals working together in a realistic test automation context.

---

## Time Management Tips

- **Task 1 (2.5 hours)**: Focus on string manipulation and arithmetic operations first
- **Task 2 (2.5 hours)**: Take time to understand comparison and logical operators thoroughly
- **Task 3 (2 hours)**: Practice conditional logic with different scenarios
- **Integration (0.5 hours)**: Focus on getting all components working together

### Common Issues

1. **String method confusion**: Practice each string method individually before combining
2. **Operator precedence**: Use parentheses to clarify complex logical conditions
3. **Function parameters**: Double-check that parameters match function calls exactly

### Getting Help

- Review lecture materials for syntax examples
- Use console.log extensively to debug your logic
- Test functions individually before integrating
- Pay attention to return values vs console.log outputs

## Troubleshooting Support

### Common Issues

1. **Ternary operator confusion**: Start with simple if/else, then convert to ternary
2. **Switch statement breaks**: Remember to include break statements in each case
3. **Logical operator precedence**: Use parentheses to group conditions clearly
4. **String method chaining**: Apply methods one at a time to debug issues

### Getting Help

- Use browser DevTools console to test individual expressions
- Break complex conditions into smaller, testable parts
- Verify function parameters and return values match expectations
- Check that all variables are defined before using in conditions

---

</homework_assignment>
