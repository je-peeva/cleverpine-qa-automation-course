# Additional Resources

**Official Playwright Documentation:**

- **[Page Object Model Guide](https://playwright.dev/docs/pom)** - Playwright's official POM documentation
- **[Best Practices](https://playwright.dev/docs/best-practices)** - General best practices including POM
- **[Test Organization](https://playwright.dev/docs/test-organization)** - Structuring test projects

**JavaScript Class Resources** (review from Lecture 6):

- **[MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)** - JavaScript class syntax
- **[MDN: Constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)** - Understanding constructors
- **[MDN: this keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)** - How `this` works in classes

**Design Patterns:**

- **[Page Object Pattern](https://martinfowler.com/bliki/PageObject.html)** - Martin Fowler's article on POM
- **[Selenium Page Objects](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)** - Pattern applies to all test frameworks
- **[Test Automation Patterns](https://testautomationpatterns.org/wiki/index.php/MAIN_PAGE)** - Various patterns including POM

**Video Tutorials:**

- Search YouTube for "Playwright Page Object Model" for visual tutorials
- Look for "JavaScript Classes Tutorial" for deeper understanding of class syntax
- "Test Automation Design Patterns" videos cover when and why to use POM

**Example Projects:**

- **[Playwright Examples](https://github.com/microsoft/playwright/tree/main/examples)** - Official examples
- **[Awesome Playwright](https://github.com/mxschmitt/awesome-playwright)** - Community examples and resources

**Code Organization Best Practices:**

**Project Structure:**

```
project/
├── page-objects/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── RegistrationFormPage.js
│   └── components/
│       ├── HeaderComponent.js
│       └── FooterComponent.js
├── tests/
│   ├── login.spec.js
│   ├── registration.spec.js
│   └── dashboard.spec.js
├── test-data/
│   ├── users.json
│   └── files/
└── helpers/
    └── url-helpers.js
```

**Naming Conventions:**

```javascript
// Page Object files: PascalCase with "Page" suffix
LoginPage.js;
UserProfilePage.js;
ShoppingCartPage.js;

// Page Object classes: Match file names
export class LoginPage {}

// Methods: camelCase, descriptive verbs
async clickSubmitButton() {}
async fillEmailField() {}
async getErrorMessage() {}
async isFormVisible() {}

// Locators: camelCase, element name + type
// Create Locator instances in the constructor, e.g.:
constructor(page) {
  this.page = page;
  this.page = page;
  this.username = this.page.locator("#username");
  this.submit = this.page.locator("#submit");
  this.errorMessage = this.page.locator(".error");
}
```

**Common POM Patterns:**

**Pattern 1: Simple Locators**

```javascript
class SimplePage {
  constructor(page) {
    this.page = page;
    // Create simple locators in the constructor
    this.submitButton = this.page.locator("#submit");
    this.emailInput = this.page.locator("#email");
  }

  // Use in methods
  async clickSubmit() {
    await this.submitButton.click();
  }
}
```

**Pattern 2: Getter Locators**

```javascript
class GetterPage {
  // Locators as getters returning Playwright locator objects
  get submitButton() {
    return this.page.locator("#submit");
  }

  get emailInput() {
    return this.page.locator("#email");
  }

  // Use directly
  async clickSubmit() {
    await this.submitButton.click();
  }
}
```

**Pattern 3: Method Chaining**

```javascript
class LoginPage {
  async loginAsAdmin() {
    await this.login("admin", "admin123");
    return new DashboardPage(this.page); // Return next page
  }
}

// Usage:
const dashboard = await loginPage.loginAsAdmin();
await dashboard.verifyWelcome();
```

**Pattern 4: Data Objects**

```javascript
class RegistrationPage {
  async fillForm(userData) {
    // userData = { name: 'John', email: 'john@test.com', ... }
    await this.fillName(userData.name);
    await this.fillEmail(userData.email);
    await this.selectCountry(userData.country);
  }
}

// Usage:
const user = {
  name: "John Doe",
  email: "john@example.com",
  country: "usa",
};
await registrationPage.fillForm(user);
```

**Pattern 5: Component Objects**

```javascript
// For reusable page components
class HeaderComponent {
  constructor(page) {
    this.page = page;
    // Create component locators in the constructor
    this.logoLink = this.page.locator(".logo");
    this.searchInput = this.page.locator("#search");
    this.userMenu = this.page.locator("#user-menu");
  }

  async clickLogo() {
    await this.logoLink.click();
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.page.keyboard.press("Enter");
  }
}

// Use in multiple page objects:
class HomePage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }
}

class ProductPage {
  constructor(page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }
}

// Usage:
await homePage.header.search("laptop");
await productPage.header.clickLogo();
```

**Troubleshooting Guide:**

**Issue 1: "Cannot find module"**

```bash
# Error: Cannot find module '../page-objects/LoginPage.js'

# Solution: Check import path and file extension
import { LoginPage } from '../page-objects/LoginPage.js'; // Needs .js extension!
```

**Issue 2: "'this.page' is undefined"**

```javascript
// Problem: Forgot to pass page to constructor
const loginPage = new LoginPage(); // ❌ Missing page parameter

// Solution: Always pass page
const loginPage = new LoginPage(page); // ✅ Correct
```

**Issue 3: "Method is not a function"**

```javascript
// Problem: Not using 'this' to access methods
class LoginPage {
  async login(user, pass) {
    fillUsername(user); // ❌ Missing 'this'
  }
}

// Solution: Use 'this' keyword
class LoginPage {
  async login(user, pass) {
    await this.fillUsername(user); // ✅ Correct
  }
}
```

**Issue 4: "Locator not found"**

```javascript
// Problem: Using locator string directly
await this.submitButton.click(); // ❌ If submitButton is a string

// Solution: Wrap with page.locator() if submitButton is a string, or use a getter/locator directly
// If submitButton is a string selector:
await this.page.locator(this.submitButton).click(); // ✅ Correct when submitButton is a string

// If submitButton is a Locator (preferred):
await this.submitButton.click(); // ✅ Correct when submitButton is a Locator or getter

// OR: Use getter that returns locator
get submitButton() {
  return this.page.locator("#submit");
}
await this.submitButton.click(); // ✅ Also correct
```

**Quick Reference: Page Object Template**

Use this template when creating new page objects:

```javascript
export class YourPageName {
  constructor(page) {
    this.page = page;
    // Module-relative file URL (robust to cwd)
    this.url = new URL("path/to/your/page.html", import.meta.url).href;
  }

  // ===== LOCATORS =====
  // Create Locator instances in the constructor
  // constructor(page) {
  //   this.page = page;
  //   this.elementOne = this.page.locator("#element-one");
  //   this.elementTwo = this.page.locator(".element-two");
  // }

  // ===== NAVIGATION =====
  async navigate() {
    await this.page.goto(this.url);
  }

  // ===== ACTIONS =====
  async doSomething() {
    await this.elementOne.click();
  }

  // ===== GETTERS =====
  async getSomething() {
    return await this.elementOne.textContent();
  }

  // ===== STATE CHECKS =====
  async isSomethingVisible() {
    return await this.elementOne.isVisible();
  }

  // ===== COMPLEX ACTIONS =====
  async doCompleteWorkflow(data) {
    // Combine multiple actions
  }
}
```

**Practice Projects:**

To solidify your POM skills:

1. **Create page objects for a real website**:
   - Choose a public site (like https://the-internet.herokuapp.com)
   - Create page objects for 3-5 pages
   - Write tests using those page objects

2. **Refactor your Lecture 10 tests**:
   - Take all your tests from Lecture 10
   - Create appropriate page objects
   - Refactor every test to use POM
   - Compare before/after code

3. **Build a mini e-commerce test suite**:
   - Create page objects for: Home, Product List, Product Detail, Cart, Checkout
   - Write tests that flow through multiple pages
   - Practice method chaining

**Review Questions:**

Test your understanding:

1. What are the three main components of a page object? (Locators, Actions, Verifications)
2. Why do we pass the `page` object to the constructor?
3. What's the difference between `async fillUsername()` and `async getUsername()`?
4. Should you put `expect()` assertions in page objects? Why or why not?
5. How does POM help with test maintenance?
6. What's method chaining and when is it useful?
7. When might you NOT want to use a page object?
8. How do you organize page objects for a large application?

**Further Learning:**

- **Practice daily**: Create one page object per day for pages you encounter
- **Refactor old tests**: Take non-POM tests and convert them
- **Study real projects**: Look at open-source test projects using POM
- **Experiment**: Try different patterns and find what works for you
- **Share with peers**: Code review each other's page objects

**Remember the Core Principles:**

1. **One Page Object per Page** - Clear responsibility
2. **Locators defined once** - Single source of truth
3. **Actions as methods** - Encapsulate behavior
4. **Tests use page objects** - Hide implementation
5. **Business language** - Readable, maintainable code

**Congratulations!**

You've learned one of the most important patterns in test automation. Page Object Model is used in virtually every professional test suite, regardless of the testing tool (Playwright, Selenium, Cypress, etc.).

You now know how to:

- ✅ Create page object classes using JavaScript classes
- ✅ Define locators and actions in page objects
- ✅ Write clean, maintainable tests using page objects
- ✅ Refactor script-style tests to use POM
- ✅ Organize test code for long-term maintenance

In Lecture 12, you'll move on to API Testing, but the organizational principles you learned today will continue to be valuable. You might even create "API Objects" similar to Page Objects!

Keep practicing, and remember: good code is maintainable code. Page Object Model is your tool for achieving that.


