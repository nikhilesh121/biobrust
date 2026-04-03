// PM2 Ecosystem Config — BIOBRUST AWS Deployment
// Usage: pm2 start ecosystem.config.js --env production

module.exports = {
  apps: [
    {
      name: 'biobrust',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/var/www/biobrust',
      instances: 'max',           // uses all CPU cores
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/biobrust-error.log',
      out_file: '/var/log/pm2/biobrust-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
