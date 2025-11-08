**Common Challenges Discussion:**

- **"My test is too fast, I can't see what's happening!"**
  - Solution: Use --headed flag, add page.pause(), or use slowMo option

- **"I can't find the right selector for my element!"**
  - Solution: Use browser DevTools inspector, or page.pause() with Playwright Inspector

- **"My test fails but I don't know why!"**
  - Solution: Add console.log statements, use page.pause() before the failing step

- **"How do I know if I should use await or not?"**
  - Solution: If it's a Playwright action or assertion, use await. If it's just creating a locator or getting page.url(), no await needed.

**Best Practices to Remember:**

1. **Always use descriptive test names** - "test login feature" vs "successful login with valid credentials displays welcome message"

2. **Use meaningful variable names for locators** - `loginButton` vs `btn`

3. **Add console.log statements while learning** - helps you understand the test flow

4. **Use page.pause() when debugging** - much more effective than guessing

5. **Keep tests independent** - each test should work on its own

6. **Verify multiple things** - don't just check one condition, verify the complete expected behavior

7. Additional Resources

**Essential Documentation:**

- [Playwright Official Documentation](https://playwright.dev/docs/intro) - Start here for everything
- [Playwright Getting Started Guide](https://playwright.dev/docs/intro) - Comprehensive beginner guide
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright) - Complete API documentation
- [Playwright Locators Guide](https://playwright.dev/docs/locators) - Deep dive into finding elements
- [Playwright Assertions](https://playwright.dev/docs/test-assertions) - All available expect methods

**Video Tutorials:**

- [Playwright Official YouTube Channel](https://www.youtube.com/@Playwrightdev) - Official tutorials and tips
- Search for "Playwright tutorial for beginners" - many excellent introductory videos

**Recommended Practice:**

- **Playwright Test Generator**: Use `npx playwright codegen [url]` to generate test code by recording your actions
- **Browser DevTools**: Practice inspecting elements and understanding their selectors
- **Official Examples**: Study the test files in `tests-examples/` folder
- **Practice Sites**:
  - https://practicetestautomation.com/practice-test-login/
  - https://the-internet.herokuapp.com/
  - https://demo.playwright.dev/todomvc/

**Playwright vs Other Tools:**

- [Playwright vs Selenium](https://playwright.dev/docs/selenium) - Official comparison
- [Playwright vs Cypress](https://playwright.dev/docs/cypress) - Feature comparison
- [Why Playwright?](https://playwright.dev/docs/why-playwright) - Design principles

**Community Resources:**

- [Playwright Discord Server](https://discord.com/invite/playwright) - Active community for questions
- [Playwright GitHub Discussions](https://github.com/microsoft/playwright/discussions) - Q&A and discussions
- [Stack Overflow Playwright Tag](https://stackoverflow.com/questions/tagged/playwright) - Common questions and answers

**VS Code Extensions:**

- **Playwright Test for VSCode** (by Microsoft) - Must-have extension
  - Provides test explorer
  - Inline test running
  - Debugging capabilities
  - Selector generator

**Debugging Tools:**

- [Playwright Inspector](https://playwright.dev/docs/debug) - Interactive debugging tool
- [Playwright Trace Viewer](https://playwright.dev/docs/trace-viewer) - Visual test execution trace (we'll cover in Lecture 14)
- Browser DevTools - For inspecting page structure

**Best Practices Guides:**

- [Playwright Best Practices](https://playwright.dev/docs/best-practices) - Official recommendations
- [Test Authoring Best Practices](https://playwright.dev/docs/writing-tests) - Writing maintainable tests
- [Selector Best Practices](https://playwright.dev/docs/selectors#best-practices) - Choosing reliable selectors

**Common Patterns:**

```javascript
// Pattern 1: Navigation and verification
await page.goto(url);
await expect(page).toHaveURL(url);

// Pattern 2: Fill and submit form
await page.locator("#input").fill("value");
await page.locator("#submit").click();

// Pattern 3: Wait and verify
await expect(page.locator("#element")).toHaveText("expected");

// Pattern 4: Debug at specific point
console.log("Before action");
await page.pause();
console.log("After action");
```