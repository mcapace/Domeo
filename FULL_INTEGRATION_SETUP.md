# Full Integration Setup Guide

## 🚀 Complete Domeo Authentication & Database Integration

Your Domeo application now has full integrations with:
- **NextAuth.js** for authentication
- **Prisma** for database management
- **PostgreSQL** for data storage
- **Social login providers** (Google, Apple, Facebook)
- **User registration and profile management**
- **Dome selection and management**
- **API routes for all functionality**

## 📋 Prerequisites

1. **PostgreSQL Database** (local or cloud)
2. **Social OAuth Apps** (Google, Apple, Facebook)
3. **Environment Variables**

## 🔧 Database Setup

### Option 1: Local PostgreSQL (Recommended for Development)

1. **Install PostgreSQL locally:**
   ```bash
   # macOS with Homebrew
   brew install postgresql
   brew services start postgresql
   
   # Create database
   createdb domeo_dev
   ```

2. **Update your `.env.local`:**
   ```env
   DATABASE_URL="postgresql://your_username:your_password@localhost:5432/domeo_dev"
   ```

### Option 2: Cloud Database (Production)

Use services like:
- **Supabase** (Free tier available)
- **Neon** (Free tier available)
- **Railway** (Free tier available)
- **PlanetScale** (Free tier available)

## 🗄️ Database Migration & Seeding

1. **Generate Prisma client:**
   ```bash
   npm run db:generate
   ```

2. **Push schema to database:**
   ```bash
   npm run db:push
   ```

3. **Seed the database with initial data:**
   ```bash
   npm run db:seed
   ```

## 🔐 Authentication Setup

### 1. Environment Variables

Add these to your `.env.local`:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3006
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production-123456789

# Database
DATABASE_URL="postgresql://username:password@localhost:5432/domeo_dev"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Apple OAuth (Optional)
APPLE_ID=your-apple-client-id
APPLE_SECRET=your-apple-client-secret

# Facebook OAuth (Optional)
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

### 2. Social OAuth Setup

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3006/api/auth/callback/google`

#### Apple OAuth
1. Go to [Apple Developer Console](https://developer.apple.com/)
2. Create an App ID
3. Enable Sign In with Apple
4. Create a Service ID
5. Add redirect URI: `http://localhost:3006/api/auth/callback/apple`

#### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure OAuth redirect URI: `http://localhost:3006/api/auth/callback/facebook`

## 🧪 Testing the Integrations

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Test User Registration
1. Navigate to `http://localhost:3006/auth/signup`
2. Complete the 5-step registration process
3. Verify user is created in database
4. Check dome selection functionality

### 3. Test Authentication
1. Navigate to `http://localhost:3006/auth/signin`
2. Test email/password login
3. Test social login buttons (when configured)
4. Verify session management

### 4. Test API Endpoints
```bash
# Get all domes
curl http://localhost:3006/api/domes

# Register a user
curl -X POST http://localhost:3006/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","firstName":"John","lastName":"Doe","birthDate":"1990-01-01"}'

# Get user domes (requires authentication)
curl http://localhost:3006/api/user/domes
```

## 📊 Database Schema

The application includes these models:

### Core Models
- **User** - User accounts and profiles
- **Account** - OAuth provider accounts
- **Session** - User sessions
- **Profile** - Extended user profiles

### Feature Models
- **Dome** - Community categories
- **UserDome** - User-dome relationships
- **Verification** - Identity verification records
- **Message** - User messaging system

## 🔄 API Routes

### Authentication
- `POST /api/auth/register` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth endpoints

### User Management
- `GET /api/user/domes` - Get user's selected domes
- `POST /api/user/domes` - Update user's dome selections

### Content
- `GET /api/domes` - Get all available domes

## 🎯 Key Features Working

✅ **User Registration** - Complete 5-step signup process
✅ **Email/Phone Authentication** - Credentials-based login
✅ **Social Login** - Google, Apple, Facebook integration
✅ **Database Integration** - Full CRUD operations
✅ **Dome Selection** - Dynamic community selection
✅ **Session Management** - Secure session handling
✅ **API Routes** - RESTful API endpoints
✅ **Form Validation** - Client and server-side validation
✅ **Error Handling** - Comprehensive error management

## 🚀 Production Deployment

### 1. Environment Variables
Update all environment variables for production:
- Use strong `NEXTAUTH_SECRET`
- Configure production database URL
- Set up production OAuth redirect URIs

### 2. Database
- Use production PostgreSQL instance
- Run migrations: `npm run db:push`
- Seed data: `npm run db:seed`

### 3. Deployment Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check `DATABASE_URL` format
   - Verify database is running
   - Check network connectivity

2. **NextAuth Errors**
   - Verify `NEXTAUTH_SECRET` is set
   - Check `NEXTAUTH_URL` matches deployment URL
   - Ensure OAuth redirect URIs are correct

3. **Prisma Errors**
   - Run `npm run db:generate` after schema changes
   - Check database permissions
   - Verify schema syntax

4. **Social Login Not Working**
   - Verify OAuth app configuration
   - Check redirect URIs
   - Ensure API keys are correct

### Debug Commands
```bash
# Check database connection
npx prisma db pull

# View database in browser
npx prisma studio

# Reset database
npx prisma db push --force-reset

# Check Prisma client
npx prisma generate
```

## 📈 Next Steps

1. **Add more social providers** (Twitter, LinkedIn, etc.)
2. **Implement email verification**
3. **Add phone verification (SMS)**
4. **Create user profile management**
5. **Add messaging system**
6. **Implement matching algorithm**
7. **Add payment integration**
8. **Create admin dashboard**

## 🆘 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review NextAuth.js documentation
3. Check Prisma documentation
4. Verify environment variables
5. Check browser console for errors

Your Domeo application is now fully integrated and ready for testing! 🎉 