# VPS Git Setup Guide

This guide configures git version control for the production backend on the VPS.

## Current Status

- ✅ **VPS**: Backend running at `/var/www/kektech/backend/`
- ❌ **Git**: Not initialized (no version control)
- ✅ **Monorepo**: Backend consolidated into main repository

## Why Git on VPS?

- **Version Control**: Track production code changes
- **Easy Updates**: `git pull` to deploy latest changes
- **Rollback Safety**: Revert to previous versions if needed
- **Audit Trail**: See what's deployed and when

## Setup Instructions

### Step 1: Initialize Git Repository

```bash
# SSH to VPS
ssh kek

# Navigate to backend
cd /var/www/kektech/backend

# Initialize git (if not already done)
git init

# Add remote (main monorepo)
git remote add origin https://github.com/0xBased-lang/kektechV0.69.git

# Configure sparse checkout (backend only)
git config core.sparseCheckout true
echo "packages/backend/*" > .git/info/sparse-checkout

# Verify remote
git remote -v
```

### Step 2: Configure Git Credentials (Optional)

For HTTPS access with private repositories:

```bash
# Option A: Personal Access Token (Recommended)
git config --global credential.helper store
# Next git pull will prompt for token, then cache it

# Option B: SSH Key (More Secure)
# Generate SSH key on VPS
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add public key to GitHub
cat ~/.ssh/id_ed25519.pub
# Copy output and add to GitHub Settings → SSH Keys

# Change remote to SSH
git remote set-url origin git@github.com:0xBased-lang/kektechV0.69.git
```

### Step 3: Pull Latest Code

```bash
# Fetch latest from main
git fetch origin main

# Reset to latest (careful: overwrites local changes)
git reset --hard origin/main

# Navigate to backend subdirectory
cd packages/backend

# Install dependencies
npm install

# Build TypeScript
npm run build

# Restart services
pm2 restart all
```

### Step 4: Verify Setup

```bash
# Check git status
git status

# View recent commits
git log --oneline -5

# Check current branch
git branch

# Verify services running
pm2 status
```

## Deployment Workflow

### From Local Development

```bash
# 1. Make changes locally
cd /Users/seman/Desktop/kektechV0.69/packages/backend
# Edit files...

# 2. Test locally
npm run dev:indexer
# Verify changes work

# 3. Commit and push to GitHub
git add .
git commit -m "fix: update event indexer logic"
git push origin main

# 4. Deploy to VPS
ssh kek
cd /var/www/kektech/backend
git pull origin main
cd packages/backend
npm install && npm run build
pm2 restart all

# 5. Monitor deployment
pm2 logs --lines 50
```

## Common Git Operations

### Update Backend from GitHub

```bash
ssh kek
cd /var/www/kektech/backend
git pull origin main
cd packages/backend
npm install && npm run build
pm2 restart all
```

### Check What's Deployed

```bash
ssh kek
cd /var/www/kektech/backend
git log --oneline -10          # Last 10 commits
git show HEAD                   # Current deployed commit
git diff origin/main            # Compare with latest
```

### Rollback to Previous Version

```bash
ssh kek
cd /var/www/kektech/backend

# View commit history
git log --oneline -10

# Rollback to specific commit
git reset --hard <commit-hash>

# Rebuild and restart
cd packages/backend
npm install && npm run build
pm2 restart all
```

### Discard Local Changes

```bash
# If VPS has uncommitted changes you want to discard
ssh kek
cd /var/www/kektech/backend
git reset --hard origin/main
```

## Troubleshooting

### Error: "Permission denied"

```bash
# Check repository ownership
ls -la /var/www/kektech/

# Fix permissions if needed
sudo chown -R $(whoami):$(whoami) /var/www/kektech/backend
```

### Error: "Could not resolve host"

```bash
# Check internet connectivity
ping github.com

# Try SSH instead of HTTPS
git remote set-url origin git@github.com:0xBased-lang/kektechV0.69.git
```

### Error: "Sparse checkout not working"

```bash
# Disable sparse checkout and clone full repo
cd /var/www/kektech
rm -rf backend
git clone https://github.com/0xBased-lang/kektechV0.69.git temp
mv temp/packages/backend ./backend
rm -rf temp
cd backend
git init
git remote add origin https://github.com/0xBased-lang/kektechV0.69.git
```

## Security Notes

⚠️ **Never commit `.env` file** - Contains production secrets
⚠️ **Use SSH keys** - More secure than passwords
⚠️ **Limit VPS access** - Only authorized developers
⚠️ **Review before deploying** - Check changes before `git pull`

## Alternative: Simple File Deployment

If git setup has issues, you can deploy via direct file copy:

```bash
# From local machine
cd /Users/seman/Desktop/kektechV0.69/packages/backend
scp -r services/ kek:/var/www/kektech/backend/
scp -r shared/ kek:/var/www/kektech/backend/
scp ecosystem.config.js kek:/var/www/kektech/backend/

# Then SSH and rebuild
ssh kek
cd /var/www/kektech/backend
npm run build
pm2 restart all
```

---

**Last Updated**: 2025-11-12
**Status**: Setup guide ready for VPS git initialization
