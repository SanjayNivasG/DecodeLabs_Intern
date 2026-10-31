# DecodeLabs DevOps Internship

This repository contains my weekly tasks and practical work completed during the DecodeLabs DevOps internship.

## WEEKLY TASKS

| Week | Topic | Folder |
|---|---|---|
| Week 1 | Linux & Command Line Basics | [Week-01-Linux-Command-Line](Week-01-Linux-Command-Line/) |
| Week 2 | Git Version Control | [Week-02-Git-Version-Control](Week-02-Git-Version-Control/) |
| Week 3 | CI/CD Pipeline Basics | [Week-03-CI-CD-Pipeline](Week-03-CI-CD-Pipeline/) |

## REPOSITORY STRUCTURE

```text
DecodeLabs_Intern/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── README.md
├── Week-01-Linux-Command-Line/
├── Week-02-Git-Version-Control/
└── Week-03-CI-CD-Pipeline/
    ├── .gitignore
    ├── eslint.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── src/
    │   └── app.js
    └── tests/
        └── app.test.js
```

## WEEK 3 CI CHECKS

The GitHub Actions workflow validates the Week 3 Node.js project on pushes to `main` and `devops/week-03-ci-cd`, and on pull requests targeting `main`.

It installs pinned dependencies with `npm ci`, runs ESLint, validates JavaScript syntax, performs a build check, and runs the unit tests.

New internship tasks are added in separate weekly folders to keep the repository organized.
