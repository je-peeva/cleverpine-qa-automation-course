# Additional Resources

**Best Practices Recap:**

1. **Complex Elements**:
   - Use check/uncheck for checkboxes (not click)
   - Use selectOption for dropdowns (not clicking options)
   - Upload files with setInputFiles (not manual file dialogs)
   - Navigate tables with nth(), first(), last()

2. **Selectors**:
   - Prefer role= for stability and accessibility
   - Use text= for user-facing elements
   - Keep selectors simple and readable
   - Add data-testid attributes in your application (good practice)

3. **Waits**:
   - Trust Playwright's auto-wait for most cases
   - Use waitFor() for specific timing needs
   - Use waitForLoadState for page navigation
   - Always wait for dynamic content to appear/disappear

4. **Frames and Dialogs**:
   - Use frameLocator() for iframe content
   - Set up dialog handlers BEFORE triggering dialogs
   - Handle all dialog types your application uses
   - Test dialog cancel/dismiss scenarios too

---

**Official Playwright Documentation:**

- **[Locators Guide](https://playwright.dev/docs/locators)** - Comprehensive guide to all selector types
- **[Actions](https://playwright.dev/docs/input)** - All interaction methods (click, fill, select, check, etc.)
- **[Assertions](https://playwright.dev/docs/test-assertions)** - Complete assertion reference
- **[Frames](https://playwright.dev/docs/frames)** - Working with iframes and frames
- **[Dialogs](https://playwright.dev/docs/dialogs)** - Handling alerts, confirms, prompts
- **[Waits](https://playwright.dev/docs/actionability)** - Understanding auto-wait and explicit waits

**Selector References:**

- **[CSS Selectors Reference](https://www.w3schools.com/cssref/css_selectors.asp)** - Complete CSS selector syntax
- **[XPath Tutorial](https://www.w3schools.com/xml/xpath_intro.asp)** - Learn XPath syntax
- **[ARIA Roles](https://www.w3.org/TR/wix-aria/#role_definitions)** - Official ARIA roles specification
- **[Playwright Selector Guide](https://playwright.dev/docs/selectors)** - Playwright-specific selector syntax

**Practice Websites:**

- **[The Internet - Heroku](https://the-internet.herokuapp.com/)** - Various test scenarios:
  - Dropdown: https://the-internet.herokuapp.com/dropdown
  - Checkboxes: https://the-internet.herokuapp.com/checkboxes
  - File Upload: https://the-internet.herokuapp.com/upload
  - Frames: https://the-internet.herokuapp.com/iframe
  - JavaScript Alerts: https://the-internet.herokuapp.com/javascript_alerts

- **[Automation Practice](http://automationpractice.com/)** - Full e-commerce site
- **[DemoQA](https://demoqa.com/)** - Various form elements and interactions
- **[Practice Test Automation](https://practicetestautomation.com/)** - Learning-focused test site

**Playwright Tools:**

- **Playwright Inspector**:

  ```bash
  npx playwright test --debug
  ```

  Use to find selectors and step through tests

- **Playwright Codegen**:
  ```bash
  npx playwright codegen https://example.com
  ```
  Generate test code by recording actions (we'll cover this more in Lecture 14)

**CSS Selector Patterns Quick Reference:**

```javascript
// Basic selectors
"#id"; // By ID
".class"; // By class
"element"; // By tag name
"[attribute]"; // Has attribute
'[attribute="value"]'; // Attribute equals value

// Attribute patterns
'[id^="start"]'; // Starts with
'[id$="end"]'; // Ends with
'[id*="contains"]'; // Contains
'[id~="word"]'; // Contains word

// Combinators
"parent child"; // Descendant
"parent > child"; // Direct child
"element + sibling"; // Adjacent sibling
"element ~ sibling"; // General sibling

// Pseudo-classes
":first-child"; // First child
":last-child"; // Last child
":nth-child(n)"; // Nth child (1-based)
":not(selector)"; // Not matching
":checked"; // Checked state
":disabled"; // Disabled state
```

**XPath Patterns Quick Reference:**

```javascript
// Basic XPath
"//element"; // All elements
'//element[@attribute="value"]'; // By attribute
'//element[text()="exact"]'; // Exact text
'//element[contains(text(),"partial")]'; // Partial text

// Navigation
"//element/parent::*"; // Parent
"//element/ancestor::*"; // Ancestor
"//element/following-sibling::*"; // Next siblings
"//element/preceding-sibling::*"; // Previous siblings

// Conditions
'//element[@attr1="val1" and @attr2="val2"]'; // AND
'//element[@attr1="val1" or @attr2="val2"]'; // OR
"//element[not(@attribute)]"; // NOT
```

**Debugging Tips:**

```javascript
// Visual debugging with pause
await page.pause();

// Console logging
console.log("Current URL:", page.url());
console.log("Element text:", await element.textContent());
console.log("Element visible?", await element.isVisible());

// Take screenshots
await page.screenshot({ path: "debug.png" });
await element.screenshot({ path: "element.png" });

// Highlight elements (for headed mode)
await element.highlight();

// Get element attributes
const value = await element.getAttribute("value");
const href = await element.getAttribute("href");

// Check element state
await element.isVisible();
await element.isEnabled();
await element.isChecked();
```

**Cheat Sheet: When to Use Which Selector:**

| Use Case         | Recommended Selector | Example                           |
| ---------------- | -------------------- | --------------------------------- |
| Button with text | `role=` or `text=`   | `role=button[name="Submit"]`      |
| Form input       | `role=` or `#id`     | `role=textbox[name="Email"]`      |
| Dropdown         | `role=` or `#id`     | `role=combobox[name="Country"]`   |
| Checkbox         | `role=` or `#id`     | `role=checkbox[name="Terms"]`     |
| Link             | `role=` or `text=`   | `role=link[name="Learn More"]`    |
| Dynamic element  | `data-testid`        | `[data-testid="user-profile"]`    |
| Table cell       | CSS nth-child        | `tr:nth-child(2) td:nth-child(3)` |
| Element in frame | frameLocator         | `frame.locator('#element')`       |
| Parent element   | XPath                | `//button/ancestor::tr`           |

**Common Patterns Library:**

```javascript
// Pattern: Select dropdown by label
await page.locator("#country").selectOption({ label: "United States" });

// Pattern: Check all checkboxes
const checkboxes = page.locator('input[type="checkbox"]');
const count = await checkboxes.count();
for (let i = 0; i < count; i++) {
  await checkboxes.nth(i).check();
}

// Pattern: Find table row by content and click button
const row = page.locator("tr", { hasText: "John Doe" });
await row.locator('button:has-text("Edit")').click();

// Pattern: Wait for loading to complete
await page.locator(".loading-spinner").waitFor({ state: "hidden" });

// Pattern: Handle dialog conditionally
page.on("dialog", async (dialog) => {
  if (dialog.message().includes("confirm")) {
    await dialog.accept();
  } else {
    await dialog.dismiss();
  }
});

// Pattern: Interact with iframe
const frame = page.frameLocator("#my-frame");
await frame.locator("#input").fill("text");

// Pattern: Extract all table data
const rows = page.locator("table tbody tr");
const data = [];
for (let i = 0; i < (await rows.count()); i++) {
  const cells = rows.nth(i).locator("td");
  const rowData = await cells.allTextContents();
  data.push(rowData);
}
```

**Review Questions:**

Test your understanding:

1. What's the difference between `check()` and `click()` for checkboxes?
2. How do you select a dropdown option by visible text?
3. What's the advantage of role= selectors over ID selectors?
4. When should you use explicit `waitFor()` instead of relying on auto-wait?
5. How do you interact with an element inside an iframe?
6. What happens if you don't handle a browser alert dialog?
7. What's the difference between `nth(0)` and `:nth-child(1)`?
8. How do you get all text contents from multiple matching elements?

**Further Learning:**

- **Practice Daily**: Write at least one test per day using today's concepts
- **Explore DevTools**: Learn to inspect elements and test selectors in browser DevTools
- **Read Playwright Docs**: Browse the official documentation for deeper understanding
- **Join Community**: Ask questions on Playwright Discord or Stack Overflow
- **Watch Videos**: Search for "Playwright advanced selectors" tutorials on YouTube

**Remember:**

- Complex elements have specific methods (selectOption, check, setInputFiles)
- Multiple selector strategies exist - choose the most stable and readable
- Playwright auto-waits in most cases, but you can use explicit waits when needed
- Frames need frameLocator(), dialogs need event handlers
- Good selectors make tests maintainable and reliable
