#!/bin/bash
# =============================================================================
# BIOBRUST — AWS Deployment Script
# Run this on your AWS server to deploy / update the app
# Usage: bash deploy.sh
# =============================================================================

set -e  # exit on any error

APP_DIR="/var/www/biobrust"
REPO_URL="https://github.com/nikhilesh121/biobrust.git"
BRANCH="main"

echo "=============================="
echo " BIOBRUST Deployment Starting"
echo "=============================="

# 1. Go to app directory (or clone if first time)
if [ -d "$APP_DIR/.git" ]; then
  echo "[1/6] Pulling latest code from GitHub..."
  cd "$APP_DIR"
  git fetch origin
  git reset --hard origin/$BRANCH
else
  echo "[1/6] Cloning repository..."
  sudo mkdir -p "$APP_DIR"
  sudo chown -R $USER:$USER "$APP_DIR"
  git clone -b "$BRANCH" "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

# 2. Copy .env.local if it doesn't exist
if [ ! -f "$APP_DIR/.env.local" ]; then
  echo "[2/6] WARNING: .env.local not found!"
  echo "      Copy your .env.local file to $APP_DIR/.env.local before continuing."
  echo "      Example: scp .env.local ubuntu@your-server:$APP_DIR/.env.local"
  exit 1
else
  echo "[2/6] .env.local found — OK"
fi

# 3. Install dependencies
echo "[3/6] Installing dependencies..."
npm ci --production=false

# 4. Build Next.js app
echo "[4/6] Building Next.js app..."
npm run build

# 5. Create PM2 log directory
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# 6. Start / reload with PM2
echo "[5/6] Starting app with PM2..."
if pm2 list | grep -q "biobrust"; then
  pm2 reload ecosystem.config.js --env production
else
  pm2 start ecosystem.config.js --env production
fi

# Save PM2 process list so it survives reboots
pm2 save

echo ""
echo "=============================="
echo " Deployment Complete!"
echo " App running at http://localhost:3000"
echo " Configure Nginx to proxy to port 3000"
echo "=============================="
