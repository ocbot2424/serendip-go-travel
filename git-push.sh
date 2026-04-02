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

# Push to GitHub (configured with Personal Access Token)
git push origin main 2>&1

if [ $? -eq 0 ]; then
    echo "Successfully pushed to GitHub at $TIMESTAMP"
else
    echo "Failed to push to GitHub at $TIMESTAMP"
    exit 1
fi
