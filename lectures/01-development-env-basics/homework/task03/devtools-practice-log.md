# DevTools Practice Log

This document logs the practice session with browser DevTools as part of the QA Automation course.

## Session Details

- **Website Used**: `http://example.com/`
- **Date**: 2023-10-27

## Commands and Results

Here are the commands executed in the DevTools console and the results observed.

### 1. `console.log('QA DevTools Practice')`

- **Command**: `console.log('QA DevTools Practice')`
- **Result**: The string `'QA DevTools Practice'` was printed to the console. This is a basic way to output information for debugging.

### 2. `document.title`

- **Command**: `document.title`
- **Result**: The console returned the string `'Example Domain'`. This command is useful for quickly verifying the title of the current page, which is a common check in UI tests.

### 3. `window.location.href`

- **Command**: `window.location.href`
- **Result**: The console returned the current URL: `'http://example.com/'`. This is helpful for confirming that navigation was successful or for debugging redirection issues.

### 4. `document.querySelectorAll('p')`

- **Command**: `document.querySelectorAll('p')`
- **Result**: The console returned a `NodeList` containing one paragraph (`<p>`) element. Expanding the list shows the HTML element itself. This command is very powerful for finding web page elements, which is a core part of UI automation with tools like Playwright.

## How This Helps with Future Testing Work

This practice session demonstrates fundamental DevTools skills that are crucial for QA automation:

- **Debugging**: Using `console.log` helps in debugging JavaScript code within the browser context. When tests fail, you can inject `console.log` statements to trace variable values or execution flow.
- **Verification**: Commands like `document.title` and `window.location.href` allow for quick, real-time checks of the page's state. This is exactly what automation scripts do, so practicing it manually helps understand the underlying mechanism.
- **Element Location**: The `document.querySelectorAll('p')` command is a direct precursor to writing locators in Playwright. Understanding how to find elements using CSS selectors in the console is a foundational skill for writing stable and reliable UI tests. By inspecting the results, we can confirm our selectors are correct before putting them into a test script.

*(Optional: Screenshots of the DevTools console showing the output for each command could be included here.)*
