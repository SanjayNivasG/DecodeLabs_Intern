# MERGE CONFLICT PRACTICE LAB

This lab demonstrates a merge conflict locally. It uses a temporary folder and does not modify the internship repository or push anything.

## 1. CREATE A DISPOSABLE REPOSITORY

```bash
mkdir git-conflict-lab
cd git-conflict-lab
git init -b main
git config user.name "Practice User"
git config user.email "practice@example.com"
echo "Version from main" > message.txt
git add message.txt
git commit -m "Add initial message"
```

## 2. CREATE A FEATURE BRANCH

```bash
git switch -c feature/message
echo "Version from feature branch" > message.txt
git add message.txt
git commit -m "Update message on feature branch"
```

## 3. CHANGE THE SAME LINE ON MAIN

```bash
git switch main
echo "Version from main branch" > message.txt
git add message.txt
git commit -m "Update message on main branch"
```

## 4. TRIGGER THE CONFLICT

```bash
git merge feature/message
git status
```

Git should report a conflict because both branches changed the same line.

## 5. RESOLVE THE CONFLICT

Open `message.txt`. Git inserts markers similar to:

```text
<<<<<<< HEAD
Version from main branch
=======
Version from feature branch
>>>>>>> feature/message
```

Edit the file so that it contains the final intended content, for example:

```text
Combined message: changes from main and feature were reviewed.
```

Remove all conflict markers, then run:

```bash
git add message.txt
git commit -m "Resolve message merge conflict"
git status
git log --oneline --graph --all
```

## LEARNING OUTCOME

A merge conflict means Git cannot safely choose between overlapping edits automatically. Review both versions, decide on the correct combined result, remove conflict markers, stage the resolved file, and complete the merge.

## CLEANUP

After exiting the folder, you may remove the disposable `git-conflict-lab` directory if you no longer need it. Do not run cleanup commands from a directory containing important work.
