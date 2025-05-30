Intuji QA Automation Assignment
This repository contains an automated testing framework for validating user flows on AutomationExercise.com using Cypress. The project demonstrates the implementation of Cypress for end-to-end testing, using the Page Object Model (POM), custom commands, intercepts for API validation, and visual regression testing.

Table of Contents
Setup

Running Tests

Tools & Plugins

Project Structure

Test Cases

Known Limitations

Bonus Features

Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/sauravGuragain/Intuji-QA-Associate-Challenge.git
cd intuji-qa-assignment
Install dependencies:

bash
Copy
Edit
npm install
Ensure prerequisites are met:

Node.js v16+

Cypress

Running Tests
To open Cypress Test Runner:

bash
Copy
Edit
npx cypress open
To run tests in headless mode:

bash
Copy
Edit
npx cypress run
Tools & Plugins
This project utilizes the following tools and plugins:

Cypress: End-to-end testing framework for automating web applications.

@faker-js/faker: Library for generating random test data.

cypress-visual-regression: Visual regression testing using screenshot comparisons.

cypress-commands: Collection of custom commands for improved test maintainability.

Project Structure
The project is organized as follows:

cypress/e2e/tests/: Contains test specifications for different user scenarios.

cypress/pages/: Implements the Page Object Model for different pages of the site.

cypress/support/: Stores custom commands and general test setup configurations.

cypress/fixtures/: Holds static test data, such as the user information in user.json.

Test Cases
For a detailed list of test cases, refer to the TestCases.md file, which also contains a link to the corresponding Google Sheet for tracking.

Known Limitations
Email Uniqueness: There is no retry logic to handle email uniqueness during registration.

Visual Testing: Baseline snapshots must be generated before performing visual regression tests.

Selector Dependencies: Site-specific selectors may break if there are changes in the DOM.

API Endpoints: Assumed API endpoints are based on common structures. Adjustments may be required if the actual structure differs.

Bonus Features
The following additional features have been implemented:

Page Object Model: All major pages are abstracted into their own page objects for easier test maintenance.

Custom Commands: Reusable commands for actions like login, adding items to the cart, verifying products, and filling out the checkout form.

API Validation with Cypress Intercepts: Validates API responses during tests to ensure data consistency and correct behavior.

Visual Regression Testing: Captures screenshots at different stages to identify visual changes.

Negative Test Scenarios: Includes tests for invalid input and error handling.

