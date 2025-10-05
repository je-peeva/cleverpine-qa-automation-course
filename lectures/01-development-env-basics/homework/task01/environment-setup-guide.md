# QA Automation Environment SetupGuide

This document provides step-by-step instructions to set up a QA automation environment using Node.js and Visual Studio Code.

## 1. Prerequisites

- Node.js 18.18+ (ESLint v9 requires Node 18.18 or newer)
- npm (Node package manager)
- VS Code (recommended) with ESLint and Prettier extensions

## 2. Instalation Verification

Once instalation is completed run the provided script below to verify the used version of Node.js, NPM, Operating system and current working directory:

```bash
node H:\Documents\Skillo\cleverpine-qa-automation-course\lectures\01-development-env-basics\homework\task01\verify-setup.js
```

## 3. Troubleshooting

- Node.js is not recognized:
  - Ensure Node.js is added to your system PATH.
  - Reinstall Node.js if needed.
- NPM version is "Not available":
  - Reinstall Node.js, becasue NPM is bundles with Node.js.
- Function not defined:
  - Check function names match exactly (case-sensetive).
- Script won't run:
  - Verify you're in the correct directory and file exists.
- Package.json issues:
  - Re-run npm init -y if needed.

## 4. Project Structure

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
└── .gitignore                      # Untracked files/folders
└── eslint.config.mjs               # ESLint configuration
└── package.json                    # Project metadata and dev tooling
```
