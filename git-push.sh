#!/bin/bash
# Automated Git Push Script for Serendip Go Travel Website
# Pushes changes to GitHub hourly or on-demand

cd ~/Desktop/serendip-go-travel || exit 1

# Check if there are any changes
if [[ -z $(git status --porcelain) ]]; then
    echo "No changes to commit"
    exit 0
fi

# Add all changes
git add -A

# Commit with timestamp
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "Auto-update: $TIMESTAMP"

# Push to GitHub
# NOTE: You'll need to configure GitHub authentication first
# Option 1: Personal Access Token (recommended)
# git push https://<TOKEN>@github.com/sadesrb/Travel---Website.git main
#
# Option 2: SSH (if configured)
# git push origin main
#
# For now, this will prompt for credentials
git push origin main

if [ $? -eq 0 ]; then
    echo "Successfully pushed to GitHub at $TIMESTAMP"
else
    echo "Failed to push to GitHub at $TIMESTAMP"
    exit 1
fi
