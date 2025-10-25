# QA Automation Environment SetupGuide

This document provides step-by-step instructions to set up a QA automation environment using Node.js and Visual Studio Code.

## 1. Prerequisites

- Node.js 18.18+ (ESLint v9 requires Node 18.18 or newer)
- npm (Node package manager)
- VS Code (recommended) with ESLint and Prettier extensions

## 2. Instalation Verification

Once instalation is completed run the provided script below to verify the used version of Node.js, NPM, Operating system and current working directory.

1.  Open your terminal or command prompt.
2.  Navigate to the root directory of your `cleverpine-qa-automation-course` project.
3.  Run the verification script with the following command:

```bash
node lectures/01-development-env-basics/homework/task01/verify-setup.js
```

## 3. Troubleshooting

Here are some common problems and their solutions:

- **Cause:** Node.js is not recognized:
  - **Solution 1:** Ensure Node.js is added to your system PATH.
  - **Solution 2:** Reinstall Node.js if needed.

- **Cause:** NPM version is "Not available":
  - **Solution** Reinstall Node.js, becasue NPM is bundles with Node.js.

- **Cause:** Function not defined:
  - **Solution:** Check function names match exactly (case-sensetive).

- **Cause:** Script won't run:
  - **Solution:** Verify you're in the correct directory and file exists.

- **Cause:** Package.json issues:
  - **Solution:** Re-run npm init -y if needed.

## 4. Project Structure

Here is an overview of the main folders in this project:

```plaintext
.vscode/                            # Contains VS Code workspace settings
├── extensions.json                 # Recommended extensions for the project
└── settings.json                   # Formatting and editor configuration

lectures/
└── 01-development-env-basics/
└── homework/
├── task01/
│ ├── environment-setup-guide.md    # Еnvironment setup documentation
│ └── verify-setup.js               # Environment verification script
└── .gitignore                      # Untracked files/folders
└── eslint.config.mjs               # ESLint configuration
└── package.json                    # Project metadata and dev tooling
└── package-lock.json               # Records the exact version of every installed dependency,
```
