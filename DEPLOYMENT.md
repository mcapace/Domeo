# Domeo Deployment Guide

## 🚀 Deployment to Vercel

### Prerequisites
- Vercel account connected to GitHub
- Node.js 18+ installed locally
- Git repository set up

### Automatic Deployment (Recommended)

1. **Connect Repository to Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   ```

2. **Deploy from Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure build settings:
     - **Framework Preset**: Next.js
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`
     - **Install Command**: `npm install`

3. **Environment Variables**
   Set the following in Vercel dashboard:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=https://your-domain.vercel.app
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_secret
   FACEBOOK_CLIENT_ID=your_facebook_app_id
   FACEBOOK_CLIENT_SECRET=your_facebook_app_secret
   ```

### Manual Deployment

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 📦 Git Workflow

### Initial Setup

1. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete Domeo application with all dome pages"
   ```

2. **Add Remote Repository**
   ```bash
   git remote add origin https://github.com/yourusername/domeo-new.git
   git branch -M main
   git push -u origin main
   ```

### Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes and Commit**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **Push and Create Pull Request**
   ```bash
   git push origin feature/new-feature
   # Create PR on GitHub
   ```

### Production Deployment

1. **Merge to Main**
   ```bash
   git checkout main
   git merge feature/new-feature
   git push origin main
   ```

2. **Vercel Auto-Deploy**
   - Vercel automatically deploys on push to main branch
   - Check deployment status at [vercel.com/dashboard](https://vercel.com/dashboard)

## 🔧 Build Configuration

### Next.js Configuration
```javascript
// next.config.ts
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'your-domain.vercel.app'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev -p 3006",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Update Environment Variables**
   ```bash
   NEXTAUTH_URL=https://your-custom-domain.com
   ```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to git
- Use Vercel's environment variable system
- Rotate secrets regularly

### Database Security
- Use connection pooling
- Enable SSL for database connections
- Implement proper access controls

### Authentication
- Use secure session management
- Implement rate limiting
- Enable CSRF protection

## 📊 Monitoring and Analytics

### Vercel Analytics
- Enable Vercel Analytics in project settings
- Monitor Core Web Vitals
- Track user engagement

### Error Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor API response times
- Track user experience metrics

## 🔄 CI/CD Pipeline

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run type-check
      - run: npm run lint
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and rebuild
   rm -rf .next
   npm run build
   ```

2. **Environment Variables**
   - Check Vercel dashboard for correct values
   - Ensure all required variables are set

3. **Database Connection**
   - Verify DATABASE_URL format
   - Check database server accessibility
   - Ensure SSL is properly configured

4. **Authentication Issues**
   - Verify OAuth provider settings
   - Check NEXTAUTH_SECRET is set
   - Ensure NEXTAUTH_URL matches deployment URL

### Performance Optimization

1. **Image Optimization**
   - Use Next.js Image component
   - Implement proper image sizing
   - Enable WebP format

2. **Code Splitting**
   - Use dynamic imports for large components
   - Implement proper lazy loading
   - Optimize bundle size

3. **Caching Strategy**
   - Implement proper cache headers
   - Use CDN for static assets
   - Optimize API responses

## 📈 Scaling Considerations

### Database Scaling
- Consider connection pooling
- Implement read replicas
- Use database migrations

### Application Scaling
- Implement proper caching
- Use edge functions for global performance
- Consider microservices architecture

### Monitoring
- Set up alerting for critical metrics
- Monitor resource usage
- Track user experience metrics

---

## 📞 Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs
3. Contact Vercel support
4. Check GitHub issues

For application issues:
1. Review error logs
2. Check environment variables
3. Verify database connectivity
4. Test locally first 