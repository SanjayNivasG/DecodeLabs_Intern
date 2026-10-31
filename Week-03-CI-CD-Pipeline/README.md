# WEEK 3: CI/CD PIPELINE BASICS

## PROJECT OVERVIEW

This project implements an automated Continuous Integration (CI) pipeline using GitHub Actions. Every push to the configured branches and every pull request targeting `main` triggers automated checks for code quality, JavaScript syntax, and unit tests.

This week's implementation focuses on Continuous Integration. No deployment target or production environment is configured.

## OBJECTIVES

- Configure an automated CI workflow with GitHub Actions.
- Enforce code quality using ESLint.
- Validate JavaScript syntax before tests execute.
- Run unit tests using Node.js built-in test runner (`node:test`).
- Use `npm ci` for reproducible dependency installation.
- Cache npm dependencies in the GitHub Actions runner.

## TECHNOLOGIES

| Technology | Purpose |
|---|---|
| Node.js 22 | JavaScript runtime in CI |
| npm | Package management |
| ESLint 10 | Static analysis and code quality |
| node:test | Built-in unit testing |
| GitHub Actions | CI automation |
| Ubuntu Latest | CI runner |

## PROJECT STRUCTURE

```text
Week-03-CI-CD-Pipeline/
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
├── src/
│   └── app.js
└── tests/
    └── app.test.js

.github/
└── workflows/
    └── ci-cd.yml
```

The workflow is stored at the repository-level path `.github/workflows/ci-cd.yml`.

## APPLICATION DETAILS

The application contains two exported functions:

- `getStatus()`: Returns a status message confirming that the CI/CD sample application is running.
- `add(a, b)`: Adds two finite numeric values. It throws a `TypeError` when either input is not a number, is missing, or is not finite.

The test suite verifies the status message and addition behavior for positive, negative, zero, and decimal values, along with invalid inputs.

## CI WORKFLOW

The GitHub Actions workflow executes these stages:

1. **Checkout** — retrieves the repository source using `actions/checkout`.
2. **Set up Node.js** — configures Node.js 22 and npm dependency caching.
3. **Install dependencies** — runs `npm ci` using the committed lockfile.
4. **Lint** — runs `npm run lint`.
5. **Syntax validation** — runs `npm run validate:syntax`.
6. **Build check** — runs `npm run build`.
7. **Unit tests** — runs `npm test`.

A failed stage causes the workflow job to fail, making the issue visible in the GitHub Actions checks.

## PREREQUISITES

- Node.js 20 or higher (Node.js 22 recommended)
- npm 9 or higher
- Git

## RUN LOCALLY

Open a terminal in this directory:

```bash
cd Week-03-CI-CD-Pipeline
npm install
```

Run the same clean dependency installation used by CI:

```bash
npm ci
```

Run the checks individually:

```bash
npm run lint
npm run validate:syntax
npm run build
npm test
```

Run all checks together:

```bash
npm run lint && npm run validate:syntax && npm run build && npm test
```

## GITHUB ACTIONS TRIGGERS

The workflow runs on:

- Pushes to `main`.
- Pushes to `devops/week-03-ci-cd`.
- Pull requests targeting `main`.

You can inspect executions from the **Actions** tab in the GitHub repository. Open the latest **Build and Test** run to review individual steps and logs.

## EXPECTED TEST COVERAGE

The test suite contains seven test cases:

1. Returns the expected CI/CD status.
2. Adds positive numbers.
3. Supports negative numbers.
4. Handles zero.
5. Supports decimal numbers.
6. Rejects non-numeric and missing inputs.
7. Rejects `NaN` and infinite values.

Expected result: all seven tests pass, with zero failures.

## TROUBLESHOOTING

| Problem | Resolution |
|---|---|
| `npm ci` fails | Run `npm install` and commit the updated package lockfile. |
| ESLint reports errors | Correct the reported rule violations, then rerun `npm run lint`. |
| Syntax validation fails | Check the file and line number reported by Node.js. |
| Tests fail | Compare the assertion with the expected behavior in `src/app.js`. |
| Workflow does not trigger | Confirm the workflow file is under `.github/workflows/` and the branch/event matches the trigger configuration. |

## FUTURE IMPROVEMENTS

- Add test coverage reporting.
- Add a deployment stage after configuring a staging environment.
- Protect the main branch with required CI checks.
- Add security and dependency auditing.

---

**Completed as part of the DecodeLabs DevOps Internship — Week 3.**
