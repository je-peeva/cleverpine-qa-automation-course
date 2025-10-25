# QA Automation Course Workspace

## 1. Description

This project relates to essential QA automation skills, including environment setup with extensions and configurations. It features a reusable system for managing test data through JavaScript variables, constants, and basic validation functions, as well as comprehensive reporting capabilities. Additionally, the project includes reusable helper functions designed for common QA tasks utilizing browser DevTools. The project folder structure is organized in accordance with QA best practices and standards.

---

## 2. Prerequisits

- **Node.js** 18.18+ (ESLint v9 requires Node 18.18 or newer)
- **npm** (Node package manager)
- **Visual Studio Code** with the following extensions:
  - ESLint
  - Prettier
  - JavaScript (ES6) code snippets
  - Git Graph

---

# 3. Setup Instructions

### 3.1. Install Noje.js (LTC)

1. Go to https://nodejs.org/en/download
2. Select your OS and download the installer (.msi for Windows)
3. Run the installer with default settings

#### Verify instalation using PowerShell

```bash
node --version
npm --version
```

### 3.2. Install Visual Studio Code

1. Go to https://code.visualstudio.com/download
2. Download and install VS Code for your OS using default settings

#### Verify Node.js instalation using Visual Studio Code:

1. Open VS Code
2. Open Terminal using Menu bar - Terminal - New Terminal
3. Run:

```bash
node -v
npm -v
```

### 3.3 Troubleshooting

- Node.js is not recognized:
  - Ensure Node.js is added to your system PATH.
  * Search "Environment Variables" in the Start menu.
  * Add the Node.js installation directory to System Variables → Path
  * Restart VS Code.

### 3.4. Install and Initialize ESLint and Prettier in VS Code:

1. Open Terminal in VS Code
2. Install ESlint (helps to find and fix code problems):

```bash
npm install eslint --save-dev
```

3. Install Prettier (helps for automatic code formatting):

```bash
npm install prettier --save-dev
```

4. Initialize ESLint:

```bash
npx eslint --init
```

#### Follow prompts (use up/down keyboard arrows to navigate through the answers list):

- Ok to proceed? (y) - y
- What do you want to lint? - JavaScript
- How would you like to use ESLint? - To check syntax and find problems
- What type of modules does your project use? - JavaScript modules (import/export)
- Which framework does your project use? - None of these
- Does your project use TypeScript? - No
- Where does your code run? - Node
- Would you like to install them now? - Yes
- Which package manager do you want to use? - npm

### 3.5. Create Project folder in VS Code:

```bash
mkdir qa-automation-course  #creates new folder
cd qa-automation-course`    #navigate into the folder
npm init -y                 #creates package.json file for the project with all standard settings
```

In VS Code:

- Click on "Open folder"
- Select the newly created folder "qa-automation-course"

### 3.6. Configure the Workspace:

1. Install tools (ESLint, Prettier)
2. Configure tool rules (eslint.config.mjs) - created when executing the command npx eslint -init
3. Integrate with VS Code (.vscode folder)

- create .vscode folder on root level of the project
- create extensions.json file in .vscode folder which includes all plug-ins needed for the project:

```json
{
  "recommendations": [
    "esbenp.prettier-vscode", // Prettier
    "dbaeumer.vscode-eslint", // ESLint
    "xabikos.javascriptsnippets", // JavaScript (ES6) code snippets
    "mhutchie.git-graph" // Git Graph
  ]
}
```

- create settings.json file in .vscode folder containing preffered formatting, auto-save, default formatter etc.

### 3.7. Configure Git with VS Code:

1. Install Git https://git-scm.com/
2. Verify installation:

```bash
git --version
```

3. Set Git user info:

```bash
git config --global user.name "Your Name"
git config --global user.email "you.email@example.com"
```

4. Initialize a Git repository:

```bash
git init
```

5. Create and commit '.gitignore' file with content:

```pgsql
node_modules/
package-lock.json
```

6. Add a remote GitHub repository

```bash
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

---

# 4. Usage:

Execute the test scenarios by running the provided scripts. Test results and reports will be generated automatically and available for review in the console.

---

# 5. Project Structure:

```plaintext
.vscode/
├── extensions.json                 # Recommended extensions for the project
└── settings.json                   # Formatting and editor configuration

lectures/
└── 01-development-env-basics/
└── homework/
├── task01/
│ ├── environment-setup-guide.md    # Еnvironment setup documentation
│ └── verify-setup.js               # Environment verification script
├── task02/
│ ├── environment-config.js         # Default environemnt configuration
│ └── test-data-config.js           # Test data configuration and validation
├── task03/
│ ├── devtools-practice-log.md      # Document about DevTools practice
│ ├── devToolsConsole.png           # Screenshot used in devtools-practice-log.md
│ └── test-execution-helpers.js     # Reusable helper functions for execution
└── foundation-demo.js              # Entry point for the homework
└── README.md                       # Project overview
└── .gitignore                      # Untracked files/folders
└── eslint.config.mjs               # ESLint configuration
└── package.json                    # Project metadata and dev tooling
```

---

# 6. Key Features:

- Modular test functions for easy reuse
- Automated email generation for test data
- Basic validation and configuration scripts
- Detailed test reporting setup
- Reusable helper functions
- Organized folder structure following QA standards

---

# 7. Next Steps:

This foundation prepares the workspace for advanced QA automation topics such as:

- API testing,
- Continuous integration (CI),
- Implementation of full test automation frameworks.

---
