# Deployment Guide for Vercel

## Prerequisites
1. GitHub account
2. Vercel account (free)
3. Database provider account (PlanetScale or Neon - both have free tiers)

## Step 1: Database Setup

### Option A: PlanetScale (MySQL - Recommended)
1. Go to [planetscale.com](https://planetscale.com)
2. Sign up for free account
3. Create a new database
4. Get your connection string from the "Connect" tab
5. Copy the connection string (it looks like: `mysql://username:password@host/database?sslaccept=strict`)

### Option B: Neon (PostgreSQL)
1. Go to [neon.tech](https://neon.tech)
2. Sign up for free account
3. Create a new project
4. Get your connection string from the dashboard
5. Update `prisma/schema.prisma` to use `provider = "postgresql"` instead of `mysql`

## Step 2: Environment Variables

Create a `.env.local` file in your project root with:

```env
# Database
DATABASE_URL="your_database_connection_string_here"

# Admin credentials (change these!)
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your_secure_password"
ADMIN_EMAIL="your_email@example.com"
```

## Step 3: Deploy to Vercel

### Method 1: GitHub Integration (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your GitHub repository
6. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`: Your database connection string
   - `ADMIN_USERNAME`: Your admin username
   - `ADMIN_PASSWORD`: Your admin password
   - `ADMIN_EMAIL`: Your admin email
7. Click "Deploy"

### Method 2: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Add environment variables when prompted

## Step 4: Post-Deployment

After deployment:
1. Your database will be automatically migrated
2. Visit your deployed URL
3. Go to `/admin` to access the admin dashboard
4. Login with your admin credentials

## Free Tier Limits

### Vercel Free Tier:
- 100GB bandwidth/month
- Unlimited static deployments
- 100 serverless function executions/day
- 1,000 build minutes/month

### PlanetScale Free Tier:
- 1 database
- 1 billion reads/month
- 10 million writes/month
- 1GB storage

### Neon Free Tier:
- 0.5GB storage
- 10GB transfer/month
- 3 databases

## Making Changes Later

1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub
4. Vercel will automatically redeploy
5. Database changes will be applied automatically

## Troubleshooting

- If build fails, check environment variables are set correctly
- If database connection fails, verify your connection string
- Check Vercel function logs for detailed error messages
