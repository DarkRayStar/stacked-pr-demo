# Demo Repository for `ghstack` Features

This repository demonstrates the use of `ghstack`, a tool for managing stacked pull requests (PRs) on GitHub. It includes setup instructions, basic usage commands, and explanations to help you start using `ghstack` in your workflows.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation on Windows](#installation-on-windows)
- [Basic Commands](#basic-commands)
- [Concepts](#concepts)
- [Workflow Example](#workflow-example)
- [Troubleshooting](#troubleshooting)

## Introduction

`ghstack` simplifies the process of creating and managing stacked pull requests on GitHub. This tool is particularly useful for organizing changes that depend on one another, as it ensures that each PR builds on the previous ones in the stack. 

## Prerequisites

- A GitHub account with repository access.
- Python 3.6 or higher installed on your system.
- `pip` (Python package manager) for installing `ghstack`.
- Git CLI installed and configured for your account.

## Installation on Windows

1. **Install Python**:
   - Download the latest version of Python from [Python's official website](https://www.python.org/downloads/).
   - During installation, ensure that you check the box to add Python to the system PATH.

2. **Open Command Prompt**:
   - Search for "Command Prompt" in the Start menu and open it.

3. **Install `ghstack` via pip**:
   ```bash
   pip install ghstack
   ```

4. **Verify Installation**:
   - Confirm that `ghstack` is installed by running:
   ```bash
   ghstack --version
   ```

5. **Configure GitHub Authentication**:
   - `ghstack` needs authentication to interact with GitHub. Set up a GitHub Personal Access Token (PAT) by going to [GitHub's Developer settings](https://github.com/settings/tokens).
   - Copy the token and configure it for `ghstack`:
   ```bash
   ghstack login
   ```
   - Follow the prompts to enter your GitHub username and the token.

## Basic Commands

Here are some of the most commonly used `ghstack` commands:

- **`ghstack`** - Pushes a stack of commits as separate PRs to GitHub.
  ```bash
  ghstack
  ```

- **`ghstack status`** - Shows the status of the stack and related PRs.
  ```bash
  ghstack status
  ```

- **`ghstack rebase`** - Rebases the current branch on top of another branch and updates PRs.
  ```bash
  ghstack rebase
  ```

- **`ghstack land`** - Merges the stacked PRs to the target branch once they are approved.
  ```bash
  ghstack land
  ```

## Concepts

### 1. **Stacked Pull Requests**
   - A stacked PR is a series of pull requests where each one builds upon the previous, making it easier to review and merge code changes incrementally.

### 2. **Stack Base**
   - The branch that serves as the base for your stack. `ghstack` uses this branch as the starting point for creating PRs in sequence.

### 3. **Commit Chain**
   - `ghstack` creates a "chain" of commits for each PR. Each commit in the chain becomes its own PR, with subsequent commits depending on previous ones.

### 4. **Rebasing Stacked PRs**
   - Rebasing allows you to keep your stacked PRs up to date with changes in the target branch, ensuring smooth merging without conflicts.

## Workflow Example

1. **Create a Stack of Commits**:
   - Work on separate features or fixes in sequential commits.
   ```bash
   git commit -m "Add initial feature setup"
   git commit -m "Implement feature details"
   git commit -m "Add unit tests for feature"
   ```

2. **Push Stacked PRs to GitHub**:
   ```bash
   ghstack
   ```
   - Each commit will now appear as an individual PR on GitHub, linked in a stack.

3. **Check Status**:
   - Use `ghstack status` to review the status of your PRs and verify their dependencies.

4. **Land PRs**:
   - After approvals, merge the entire stack with:
   ```bash
   ghstack land
   ```

## Troubleshooting

- **Authentication Issues**:
  - Ensure that your Personal Access Token has the right permissions (repo access).
  - Use `ghstack login` to reset the token configuration if needed.

- **Rebase Conflicts**:
  - When using `ghstack rebase`, resolve any conflicts in your stack and continue with:
    ```bash
    ghstack rebase --continue
    ```
