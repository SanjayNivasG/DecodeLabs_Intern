# GIT VERSION CONTROL WORKFLOW

## 1. WORKING DIRECTORY

This is where files are created, edited, or removed. Use `git status` to see which files Git detects as changed.

## 2. STAGING AREA

Use `git add <file>` to select specific changes for the next commit. Review selected changes with `git diff --staged`.

## 3. COMMIT

Use `git commit -m "message"` to save a snapshot of staged changes to local history. Prefer a concise message that explains the change.

## 4. BRANCHING

A branch allows work to be developed independently from the main line.

```bash
git switch main
git pull --ff-only
git switch -c feature/add-docs
```

## 5. REVIEW AND MERGE

After editing and testing on the feature branch:

```bash
git status
git diff
git add <file>
git commit -m "Add documentation"
git switch main
git merge feature/add-docs
git log --oneline --graph --all
```

On a shared project, open a pull request and review the changes before merging. Resolve any merge conflicts rather than overwriting another person's work.

## 6. REMOTE REPOSITORY

A remote repository is hosted elsewhere, for example on GitHub. Fetch downloads remote references; pull fetches and integrates changes; push uploads local commits.

```bash
git remote -v
git fetch origin
git pull --ff-only origin main
git push -u origin feature/add-docs
```

Use `git pull --ff-only` when you want Git to stop instead of creating an unexpected merge commit. If your branch diverges, inspect the history and follow your team's workflow.

## 7. PULL REQUEST WORKFLOW

1. Create a feature branch.
2. Make a focused change and test it.
3. Commit the change with a clear message.
4. Push the feature branch.
5. Open a pull request on GitHub.
6. Review files and respond to feedback.
7. Merge only after required reviews and checks pass.
8. Delete the feature branch when it is no longer needed.

## BEST PRACTICES

- Check status before and after significant commands.
- Make small commits with meaningful messages.
- Review changes before staging and committing.
- Never commit credentials or secret configuration.
- Pull or fetch regularly to understand remote changes.
- Avoid rewriting shared history or force-pushing without permission.
