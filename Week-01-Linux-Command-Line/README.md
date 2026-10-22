# Week 1 — Linux & Command Line Basics

This folder contains my Week 1 DevOps internship task at DecodeLabs.

## Topics Covered

- Linux directory navigation (`pwd`, `cd`, `ls`)
- Creating and managing files and directories (`mkdir`, `touch`, `cp`, `mv`)
- Reading and writing file contents (`cat`, `echo`, `tee`)
- Basic configuration-file and log-file management
- Verifying file permissions and directory structure

## Task Output

```text
/app/
├── config.conf
└── logs/
    └── server.bak
```

The `server.bak` file contains `Started`. The `config.conf` file was created as an empty configuration file.

## Example Commands

```bash
pwd
ls -la
mkdir -p practice
touch practice/welcome.txt
echo "Hello DevOps" > practice/welcome.txt
cat practice/welcome.txt
sudo mkdir -p /app/logs
sudo touch /app/config.conf
echo "Started" | sudo tee /app/logs/server.log
sudo mv /app/logs/server.log /app/logs/server.bak
```

## Repository Layout

Add the files for this week's task here, for example:

```text
Week-01-Linux-Command-Line/
├── README.md
├── commands.md
├── practice/
└── screenshots/
```

**Internship:** DecodeLabs DevOps Internship  
**Week:** 01  
**Topic:** Linux & Command Line Basics
