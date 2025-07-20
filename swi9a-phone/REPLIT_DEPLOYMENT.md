# Deploying Swi9a Phone to Replit

## Option 1: Frontend Only (Recommended for Quick Start)

### Steps:
1. **Create a new Replit from GitHub:**
   - Go to [Replit](https://replit.com)
   - Click "Create Repl"
   - Choose "Import from GitHub"
   - Paste your GitHub repository URL
   - Select the `frontend` folder as the root directory

2. **Configure Environment Variables:**
   - In your Repl, go to the "Secrets" tab
   - Add these environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.com
     NEXT_PUBLIC_SITE_URL=https://your-frontend-repl.replit.app
     ```

3. **Deploy:**
   - Replit will automatically detect the Next.js project
   - Click "Run" to start the development server
   - For production deployment, go to the "Deploy" tab

### Frontend URL Structure:
- Your frontend will be available at: `https://your-repl-name.your-username.repl.co`

## Option 2: Full-Stack Deployment

### Prerequisites:
1. **Setup MongoDB Atlas** (Free Tier):
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get your connection string
   - Whitelist Replit IP addresses (or use 0.0.0.0/0 for all IPs)

### Steps:
1. **Create Replit from Root:**
   - Import the entire `swi9a-phone` directory
   - Replit will use the root `.replit` configuration

2. **Environment Variables:**
   Add these secrets in Replit:
   ```
   # Backend Environment Variables
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/swi9a-phone
   JWT_SECRET=your-super-secret-jwt-key-here
   CORS_ORIGIN=https://your-repl-name.your-username.repl.co

   # Frontend Environment Variables  
   NEXT_PUBLIC_API_URL=https://your-repl-name.your-username.repl.co:3001
   NEXT_PUBLIC_SITE_URL=https://your-repl-name.your-username.repl.co
   ```

3. **Manual Setup (if needed):**
   ```bash
   # Install dependencies
   npm run install:all
   
   # Build the project
   npm run build
   
   # Start production server
   npm run start:prod
   ```

### Port Configuration:
- Frontend: `3000` (mapped to external port `80`)
- Backend API: `5000` (mapped to external port `3001`)

## Troubleshooting

### Common Issues:

1. **Build Failures:**
   - Ensure Node.js version is 18+ in your `.replit` file
   - Clear cache: Delete `node_modules` and run `npm install`

2. **Environment Variables:**
   - Use Replit Secrets tab, not `.env` files for production
   - Restart your Repl after adding new secrets

3. **Memory Issues:**
   - Replit free tier has memory limitations
   - Consider upgrading to Replit Pro for better performance

4. **Database Connection:**
   - For MongoDB Atlas, ensure IP whitelist includes `0.0.0.0/0`
   - Test connection string locally first

### Performance Tips:
- Use `npm run build` before deploying to production
- Enable Replit's "Always On" feature for 24/7 availability
- Consider using Replit's "Deployments" feature for better performance

## Alternative Database Options for Replit:

1. **MongoDB Atlas** (Recommended)
   - Free tier: 512MB storage
   - Easy setup and management
   - Works well with Replit

2. **Replit Database** (Simple key-value store)
   - Built into Replit
   - Good for simple data storage
   - Requires code modifications

3. **Railway PostgreSQL**
   - Free tier available
   - SQL-based alternative

## Post-Deployment Steps:

1. **Test All Features:**
   - Language switching (Arabic RTL, French, English)
   - Mobile responsiveness
   - Contact form (if backend is deployed)

2. **Configure Custom Domain** (Optional):
   - Available with Replit Pro
   - Better for production use

3. **Monitor Performance:**
   - Use Replit's analytics
   - Monitor API response times

## Security Considerations:

- Never commit actual API keys to GitHub
- Use Replit Secrets for all sensitive data
- Regularly update dependencies
- Enable HTTPS in production (automatic with Replit)

## Support:
- [Replit Documentation](https://docs.replit.com)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/getting-started/)