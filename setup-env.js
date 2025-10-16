#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const envContent = `# Database
DATABASE_URL="file:./dev.db"

# Admin credentials (change these!)
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="change_this_password"
ADMIN_EMAIL="your_email@example.com"
`;

const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env.local file');
  console.log('📝 Please update the values in .env.local with your actual credentials');
} else {
  console.log('⚠️  .env.local already exists');
}
