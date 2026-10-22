# ESSENTIAL GIT COMMANDS

## 1. INSTALLATION AND CONFIGURATION

| Command | Purpose |
|---|---|
| `git --version` | Display installed Git version |
| `git config --global user.name "Your Name"` | Set commit author name |
| `git config --global user.email "you@example.com"` | Set commit author email |
| `git config --list` | Show configured settings |

## 2. REPOSITORY BASICS

| Command | Purpose |
|---|---|
| `git init` | Initialize a repository in the current directory |
| `git clone <url>` | Clone a remote repository |
| `git status` | Show changed, staged, and untracked files |
| `git rev-parse --show-toplevel` | Show the repository root |
| `git remote -v` | List remote names and URLs |

## 3. TRACKING CHANGES

| Command | Purpose |
|---|---|
| `git status --short` | Compact status view |
| `git add <file>` | Stage a specific file |
| `git add .` | Stage changes beneath the current directory |
| `git diff` | Show unstaged differences |
| `git diff --staged` | Show staged differences |
| `git restore <file>` | Discard unstaged edits to a tracked file; use carefully |
| `git rm <file>` | Remove a tracked file and stage its deletion |

## 4. COMMITS AND HISTORY

| Command | Purpose |
|---|---|
| `git commit -m "Describe change"` | Create a commit |
| `git log --oneline` | Show compact history |
| `git log --oneline --graph --all` | Show history with branches |
| `git show <commit>` | Inspect a commit |
| `git diff <commit1> <commit2>` | Compare commits |

## 5. BRANCHES

| Command | Purpose |
|---|---|
| `git branch` | List local branches |
| `git switch -c feature/docs` | Create and switch to a branch |
| `git switch main` | Switch to main |
| `git merge feature/docs` | Merge a branch into the current branch |
| `git branch -d feature/docs` | Delete a merged local branch |

## 6. REMOTE OPERATIONS

| Command | Purpose |
|---|---|
| `git remote add origin <url>` | Add a remote named origin |
| `git fetch origin` | Download remote refs without merging |
| `git pull origin main` | Fetch and integrate remote main |
| `git push -u origin main` | Push main and set its upstream |
| `git push -u origin feature/docs` | Push a feature branch |
| `git ls-remote origin` | List remote references |

## 7. CONFLICT AND RECOVERY HELPERS

| Command | Purpose |
|---|---|
| `git status` | Identify paths with conflicts |
| `git diff` | Inspect unresolved changes |
| `git add <resolved-file>` | Mark a conflict as resolved after editing |
| `git merge --abort` | Cancel an in-progress merge when appropriate |
| `git reflog` | Inspect recent movements of HEAD |

## TYPICAL DAILY WORKFLOW

```bash
git status
git pull --ff-only
git switch -c feature/update-docs
# Edit files
git diff
git add README.md
git diff --staged
git commit -m "Update project documentation"
git push -u origin feature/update-docs
```

Run the commands in a repository you control. Check branch names and remote configuration before pushing.
