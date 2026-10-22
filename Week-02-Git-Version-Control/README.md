# WEEK 2 — GIT VERSION CONTROL

## OBJECTIVE

Learn Git and GitHub fundamentals for tracking code changes, maintaining project history, and collaborating on software projects. This folder documents the Week 2 DevOps internship task at DecodeLabs.

## TOPICS COVERED

- Initialize and clone Git repositories
- Configure Git identity and inspect repository settings
- Check working-tree status and review differences
- Stage and commit changes
- View commit history and inspect commits
- Create, switch, merge, and delete branches
- Connect local repositories to remote repositories
- Fetch, pull, and push changes
- Understand pull requests and merge conflicts
- Use a safe workflow and avoid committing secrets

## FOLDER CONTENTS

| File / Folder | Purpose |
|---|---|
| [git-commands.md](git-commands.md) | Essential Git commands with explanations |
| [workflow.md](workflow.md) | Working directory-to-GitHub workflow |
| [practice/](practice/) | Small sample files for practicing version control |
| [merge-conflict-lab.md](merge-conflict-lab.md) | Guided merge-conflict exercise and resolution steps |
| [branch-practice.md](branch-practice.md) | Feature branch demonstration, file update, and review workflow |

## TOOLS

- Git
- GitHub
- Windows / WSL terminal or Command Prompt
- Any text editor, such as Visual Studio Code

## SETUP

Check whether Git is installed:

```bash
git --version
```

Configure your author identity (use your own GitHub-associated identity):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --list
```

If starting a new local practice repository:

```bash
mkdir git-practice
cd git-practice
git init
git status
```

## PRACTICAL TASK CHECKLIST

- [ ] Check the Git version and configure Git identity.
- [ ] Initialize a practice repository or clone an existing repository.
- [ ] Create a file, inspect it with `git status`, and review edits with `git diff`.
- [ ] Stage files with `git add` and create a descriptive commit.
- [ ] Inspect commits with `git log --oneline` and `git show`.
- [ ] Create a feature branch and make an isolated change.
- [ ] Merge the feature branch into the main branch.
- [ ] Configure or inspect a remote with `git remote -v`.
- [ ] Practise fetching, pulling, and pushing on a repository where you have permission.
- [ ] Follow [merge-conflict-lab.md](merge-conflict-lab.md) to understand and resolve a conflict.
- [ ] Review all files before committing; ensure no secrets are included.

## KEY LEARNINGS

Git records changes as commits. The working directory contains current files, the staging area selects the next changes to save, and a commit records a snapshot in repository history. Branches allow work to happen independently. A remote such as GitHub allows a repository to be shared and synchronized.

## SAFETY NOTES

- Never commit passwords, access tokens, private keys, or API secrets.
- Review `git status` and `git diff` before committing.
- Do not force-push to a shared branch unless you understand the impact and have permission.
- Use meaningful commit messages and keep commits focused.
- Only push to repositories you own or have been authorized to update.

## COMPLETION NOTE

This directory is the Week 2 Git Version Control learning and practice record. Update the checklist honestly as you perform each exercise, and add genuine terminal screenshots if your internship submission requires proof of execution.

**Internship:** DecodeLabs DevOps Internship  
**Week:** 02  
**Topic:** Git Version Control
