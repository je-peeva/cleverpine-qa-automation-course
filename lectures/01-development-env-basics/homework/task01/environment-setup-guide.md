# QA Automation Environment Setup Guide

This guide provides step-by-step instructions to set up and verify your development environment for the QA Automation course.

## Prerequisites

Before you begin, ensure you have the following software installed on your system:

- **Node.js**: LTS (Long-Term Support) version is recommended. You can download it from [nodejs.org](https://nodejs.org/).
- **Visual Studio Code**: A modern code editor. You can download it from [code.visualstudio.com](https://code.visualstudio.com/).

## Installation Verification

Once you have installed the prerequisites, you can verify your setup using the provided script.

1.  Open your terminal or command prompt.
2.  Navigate to the root directory of your `qa-automation-course` project.
3.  Run the verification script with the following command:

    ```bash
    node lectures/01-development-env-basics/homework/task01/verify-setup.js
    ```

4.  The script will display your Node.js version, NPM version, operating system, and current directory. Ensure that no errors are reported.

## Troubleshooting

If you encounter issues, here are some common problems and their solutions:

1.  **`node` or `npm` command not found:**
    - **Cause:** Node.js was not correctly added to your system's PATH.
    - **Solution (Windows):** Re-run the Node.js installer and ensure the "Add to PATH" option is checked.
    - **Solution (macOS/Linux):** You may need to restart your terminal session for the changes to take effect.

2.  **Script file not found:**
    - **Cause:** You are running the command from the wrong directory.
    - **Solution:** Make sure you are in the root `qa-automation-course` directory. Use the `pwd` (macOS/Linux) or `cd` (Windows) command to check your current location.

3.  **NPM Version shows 'Not available':**
    - **Cause:** The `verify-setup.js` script was run directly using `node`. The script relies on an environment variable that is set when a script is run through an `npm` command.
    - **Solution:** This is expected behavior for this script and does not indicate a problem with your NPM installation. You can verify your NPM version manually by running `npm --version` in your terminal.

## Project Structure

A well-organized project structure is crucial for a scalable automation framework. Here is an overview of the main folders in this project:

-   `/.vscode/`: Contains VS Code workspace settings, ensuring a consistent coding environment for all team members.
-   `/lectures/`: Contains all course-related materials, organized by lecture number.
    -   `/lectures/01-development-env-basics/examples/`: Code examples demonstrated during the lecture.
    -   `/lectures/01-development-env-basics/practice/`: Files for in-class exercises.
    -   `/lectures/01-development-env-basics/homework/`: Your homework assignments for the lecture.
-   `/node_modules/`: Stores all the project dependencies (like Prettier, ESLint) that are managed by NPM.
-   `/resources/`: A place for storing supplementary materials like documentation, cheat sheets, or test data files.
-   `package.json`: The heart of the project. It defines project properties, scripts, and manages dependencies.
-   `package-lock.json`: Records the exact version of every installed dependency, ensuring consistent installations across different machines.
