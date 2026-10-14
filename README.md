# Week 1: Linux & Command Line Basics

## 📌 Overview

This folder contains my Week 1 DevOps internship work at **DecodeLabs**, focused on learning and practising fundamental Linux commands and command-line operations.

The objective was to understand Linux filesystem navigation, file and directory management, basic text operations, and permissions required for everyday DevOps tasks.

## 🎯 Objectives

- Understand the Linux filesystem hierarchy.
- Navigate directories using basic Linux commands.
- Create, read, move, copy, and rename files.
- Create application directories and configuration files.
- Create and inspect server log files.
- Understand basic file permissions and the use of `sudo`.
- Verify directory structures and command outputs.
- Document practical work using Git and GitHub.

## 🛠️ Environment

| Component | Details |
|---|---|
| Operating System | Ubuntu on Windows Subsystem for Linux (WSL) |
| Shell | Bash |
| Practice Location | `/app` |
| Version Control | Git and GitHub |

## 📂 Project Structure

```text
Week-01-Linux-Command-Line/
├── README.md
├── commands.md
├── screenshots/
│   ├── 01-linux-navigation.png
│   ├── 02-basic-file-operations.png
│   ├── 03-file-rename.png
│   ├── 04-directory-creation.png
│   ├── 05-config-file.png
│   ├── 06-server-log.png
│   ├── 07-log-backup.png
│   └── 08-final-verification.png
└── practice/
    └── welcome.txt
```

*Note: Ensure that the filenames listed above match the files actually present in your repository.*

## 🧪 Tasks Completed

- [x] Practised Linux directory navigation using `cd` and `pwd`.
- [x] Listed files and directories using `ls`, `ls -la`, and `ls -l`.
- [x] Created directories using `mkdir` and `mkdir -p`.
- [x] Created and inspected files using `touch` and `cat`.
- [x] Wrote text to files using `echo` and `tee`.
- [x] Renamed files using `mv`.
- [x] Created the `/app/logs` directory.
- [x] Created the `/app/config.conf` configuration file.
- [x] Created `/app/logs/server.log` containing the text `Started`.
- [x] Renamed `server.log` to `server.bak`.
- [x] Verified the final application directory structure.
- [x] Copied the practical files into the project directory for documentation.

## 📁 Final Application Structure

The completed practical task produced the following directory structure:

```text
/app/
├── config.conf
└── logs/
    └── server.bak
```

The `config.conf` file was created as an empty configuration file.

The `server.bak` file contains:

```text
Started
```

## 💻 Commands Used

### 1. DIRECTORY NAVIGATION

```bash
pwd
cd ~/projects/decodelabs-week1
ls -la
```

### 2. FILE OPERATIONS

```bash
mkdir -p practice
cd practice
touch hello.txt
echo "Hello DevOps" > hello.txt
cat hello.txt
mv hello.txt welcome.txt
ls -l
cat welcome.txt
```

### 3. APPLICATION DIRECTORY CREATION

```bash
sudo mkdir -p /app/logs
ls -ld /app /app/logs
```

### 4. CONFIGURATION FILE CREATION

```bash
sudo touch /app/config.conf
ls -l /app/config.conf
```

### 5. SERVER LOG CREATION

```bash
echo "Started" | sudo tee /app/logs/server.log
cat /app/logs/server.log
```

### 6. LOG BACKUP

```bash
sudo mv /app/logs/server.log /app/logs/server.bak
ls -l /app/logs
cat /app/logs/server.bak
```

### 7. FINAL VERIFICATION

```bash
ls -l /app
ls -l /app/logs
cat /app/config.conf
cat /app/logs/server.bak
```

## 📚 Documentation

For additional details, refer to the following resources:

- [`commands.md`](commands.md) — Linux command reference and hands-on exercises.
- [`screenshots/`](screenshots/) — Terminal screenshots documenting the practical work.
- [`practice/`](practice/) — Files created during Linux command-line exercises.

## 💡 Key Learnings

Through these exercises, I gained hands-on experience with Linux command-line operations, filesystem navigation, file management, basic permissions, and log-file handling.

I also practised using shell pipes to pass command output to other commands and learned how to verify file contents and directory structures.

These fundamentals provide a foundation for further DevOps learning, including shell scripting, application deployment, Docker, Kubernetes, and CI/CD pipelines.

## ✅ Conclusion

Successfully completed the Week 1 Linux command-line practical exercises as part of my DecodeLabs DevOps internship. The work covered Linux navigation, file and directory operations, configuration file creation, server log management, backup operations, and final verification.

The commands, project structure, and practical results are documented for future reference.

---

**Internship:** DecodeLabs DevOps Internship  
**Week:** 01  
**Topic:** Linux & Command Line Basics
