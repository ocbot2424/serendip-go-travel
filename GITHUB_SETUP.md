# GitHub Auto-Push Setup Guide

This guide will help you set up automatic hourly pushes to GitHub for the Serendip Go Travel website.

## Option 1: Personal Access Token (Recommended)

### Step 1: Create a GitHub Personal Access Token

1. Go to GitHub: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Serendip Go Auto-Push"
4. Select scopes: **repo** (full control of private repositories)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Update the Push Script

Edit `git-push.sh` and replace this line:
```bash
git push origin main
```

With:
```bash
git push https://<YOUR_TOKEN>@github.com/sadesrb/Travel---Website.git main
```

Replace `<YOUR_TOKEN>` with your actual token.

### Step 3: Test the Push

```bash
cd ~/Desktop/serendip-go-travel
./git-push.sh
```

If it works, proceed to Step 4!

### Step 4: Set Up Hourly Cron Job

Run:
```bash
crontab -e
```

Add this line:
```
0 * * * * /home/openclaw/Desktop/serendip-go-travel/git-push.sh >> /home/openclaw/Desktop/serendip-go-travel/git-push.log 2>&1
```

This will run every hour at minute 0 (1:00, 2:00, 3:00, etc.)

Save and exit. Done! ✅

---

## Option 2: SSH Key (Alternative)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept default location
# Enter a passphrase (or leave empty)
```

### Step 2: Add SSH Key to GitHub

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the output, then:
1. Go to GitHub: https://github.com/settings/keys
2. Click "New SSH key"
3. Paste your key
4. Click "Add SSH key"

### Step 3: Change Remote to SSH

```bash
cd ~/Desktop/serendip-go-travel
git remote set-url origin git@github.com:sadesrb/Travel---Website.git
```

### Step 4: Test and Set Up Cron

Same as Option 1 Steps 3 & 4.

---

## Manual Push (Anytime)

To push changes manually:
```bash
cd ~/Desktop/serendip-go-travel
./git-push.sh
```

Or ask Haze to push by saying:
"Push to GitHub" or "Commit and push changes"

---

## View Push Logs

```bash
tail -f ~/Desktop/serendip-go-travel/git-push.log
```

---

## Troubleshooting

### "Authentication failed"
- Check your token is correct
- Ensure token has **repo** scope
- Token might have expired (they expire after set time)

### "Nothing to commit"
- No changes detected
- This is normal if no files were modified

### Cron job not running
```bash
# Check cron is running
systemctl status cron

# View cron logs
grep CRON /var/log/syslog
```

---

## Current Status

- ✅ Git repository initialized
- ✅ Remote: https://github.com/sadesrb/Travel---Website.git
- ✅ Push script created: `git-push.sh`
- ⏳ **TODO**: Set up authentication (choose Option 1 or 2 above)
- ⏳ **TODO**: Set up hourly cron job

---

Created by Haze 👽  
Last updated: 2026-04-02
