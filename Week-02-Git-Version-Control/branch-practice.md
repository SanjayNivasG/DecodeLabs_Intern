# FEATURE BRANCH DEMONSTRATION

## BRANCH CREATED

`feature/week-2-git-practice`

This branch was created from `main` to demonstrate working on a change independently before merging it.

## FILE UPDATED

`practice/project-notes.md`

The file now includes a status section, change log, and next steps for reviewing and merging the feature.

## BRANCH WORKFLOW

```bash
git fetch origin
git switch -c feature/week-2-git-practice origin/main
# Make a change to practice/project-notes.md
git status
git diff
git add Week-02-Git-Version-Control/practice/project-notes.md
git commit -m "Update project notes on Week 2 feature branch"
git push -u origin feature/week-2-git-practice
```

If the branch already exists locally, use `git switch feature/week-2-git-practice` instead of creating it again.

## REVIEW THE CHANGE

Compare the feature branch with main:

```bash
git fetch origin
git diff origin/main...origin/feature/week-2-git-practice
git log --oneline --graph --all
```

On GitHub, open the branch and use **Compare & pull request** to review the changes before merging.

## PURPOSE

This example demonstrates branch creation, a file change on the feature branch, pushing the branch, and reviewing differences before integration.
