# BIOBRUST — AWS Server Deployment Guide

## Prerequisites (on your AWS EC2 instance)
- Ubuntu 20.04 / 22.04
- Node.js 18+
- Nginx
- PM2
- Git
- Certbot (for HTTPS/SSL)

---

## Step 1 — Install Node.js 18 on your AWS server
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # should print v18.x.x
```

## Step 2 — Install PM2 globally
```bash
sudo npm install -g pm2
pm2 startup   # run the command it gives you to enable auto-start on reboot
```

## Step 3 — Install Nginx
```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

## Step 4 — Upload your .env.local to the server
From your local machine (Windows), run in PowerShell:
```powershell
scp -i "your-key.pem" .env.local ubuntu@YOUR_AWS_IP:/var/www/biobrust/.env.local
```
Or create it manually on the server:
```bash
sudo mkdir -p /var/www/biobrust
nano /var/www/biobrust/.env.local
# paste your .env.local contents and save
```

## Step 5 — Clone and deploy the app
```bash
# Run the deploy script
cd /var/www/biobrust
curl -O https://raw.githubusercontent.com/nikhilesh121/biobrust/main/deploy.sh
bash deploy.sh
```

Or manually:
```bash
sudo mkdir -p /var/www/biobrust
sudo chown -R $USER:$USER /var/www/biobrust
git clone https://github.com/nikhilesh121/biobrust.git /var/www/biobrust
cd /var/www/biobrust
npm ci
npm run build
pm2 start ecosystem.config.js --env production
pm2 save
```

## Step 6 — Configure Nginx
```bash
sudo cp /var/www/biobrust/nginx.conf /etc/nginx/sites-available/biobrust
sudo ln -s /etc/nginx/sites-available/biobrust /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default   # remove default site
sudo nginx -t                                  # test config
sudo systemctl reload nginx
```

## Step 7 — Point your domain DNS to AWS
In your domain registrar (GoDaddy, Namecheap, etc.):
- Add an **A record**: `biobrust.com` → `YOUR_AWS_EC2_IP`
- Add an **A record**: `www.biobrust.com` → `YOUR_AWS_EC2_IP`

Wait 5–30 minutes for DNS to propagate.

## Step 8 — Install FREE SSL certificate (HTTPS)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d biobrust.com -d www.biobrust.com
# Follow the prompts — certbot auto-updates your nginx.conf
sudo systemctl reload nginx
```

## Step 9 — Open AWS Security Group ports
In AWS Console → EC2 → Security Groups → Inbound Rules, ensure these ports are open:
| Port | Protocol | Source |
|------|----------|--------|
| 22   | TCP      | Your IP (for SSH) |
| 80   | TCP      | 0.0.0.0/0 (HTTP) |
| 443  | TCP      | 0.0.0.0/0 (HTTPS) |

---

## Updating the site after code changes

On your AWS server:
```bash
cd /var/www/biobrust
git pull origin main
npm ci
npm run build
pm2 reload ecosystem.config.js --env production
```

Or just run: `bash deploy.sh`

---

## After the site is live — Fix Google Search Console

1. Go to **https://search.google.com/search-console**
2. Your site `https://biobrust.com` must be reachable publicly
3. Re-submit sitemap: `https://biobrust.com/sitemap.xml`
4. Use **URL Inspection** tool to request indexing of key pages:
   - `https://biobrust.com/`
   - `https://biobrust.com/products`
   - `https://biobrust.com/contact`

---

## Verify everything is working
```bash
# Check app is running
pm2 status

# Check Nginx
sudo systemctl status nginx

# Test sitemap locally on server
curl http://localhost:3000/sitemap.xml

# Test robots.txt
curl https://biobrust.com/robots.txt
```
