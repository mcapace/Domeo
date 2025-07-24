# Authentication Setup Guide

## Overview
The signup integrations are now set up with NextAuth.js and ready for testing. The system includes:

- **Social Login Providers**: Google, Apple, Facebook
- **Email/Phone Authentication**: Custom credentials provider
- **Form Validation**: Complete signup flow validation
- **Session Management**: Secure session handling

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3006
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Apple OAuth
APPLE_ID=your-apple-client-id
APPLE_SECRET=your-apple-client-secret

# Facebook OAuth
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

## Setting Up OAuth Providers

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set authorized redirect URI: `http://localhost:3006/api/auth/callback/google`
6. Copy Client ID and Client Secret to your `.env.local`

### Apple OAuth
1. Go to [Apple Developer Console](https://developer.apple.com/)
2. Create an App ID
3. Enable Sign In with Apple
4. Create a Service ID
5. Configure redirect URI: `http://localhost:3006/api/auth/callback/apple`
6. Generate a client secret and add to `.env.local`

### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Set OAuth redirect URI: `http://localhost:3006/api/auth/callback/facebook`
5. Copy App ID and App Secret to your `.env.local`

## Testing the Integrations

### 1. Social Login Testing
- Click any social login button on the signup page
- You should be redirected to the provider's OAuth flow
- After successful authentication, you'll be redirected to `/dashboard`

### 2. Email/Phone Signup Testing
- Fill out the complete signup form
- The system will validate all required fields
- On completion, you'll be redirected to `/dashboard`

### 3. Session Testing
- Check the dashboard page shows your user information
- Try the sign out button
- Verify you're redirected back to the home page

## Current Features

✅ **Working Features:**
- Social login button handlers
- Form validation and error display
- Loading states and user feedback
- Session management
- Protected dashboard route
- Sign out functionality

🔄 **Mock/Development Features:**
- Credentials provider uses mock user data
- No actual database integration yet
- Social providers will redirect to OAuth flows (requires setup)

## Next Steps

1. **Set up OAuth providers** using the instructions above
2. **Add database integration** (Prisma schema is ready)
3. **Implement actual user creation** in the signup flow
4. **Add email verification** for email signups
5. **Add phone verification** for phone signups
6. **Implement proper error handling** for OAuth failures

## File Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API route
│   ├── auth/signup/page.tsx             # Updated signup page
│   └── dashboard/page.tsx               # Protected dashboard
├── components/
│   └── SessionProvider.tsx              # Auth context provider
├── lib/
│   ├── auth.ts                          # NextAuth configuration
│   └── auth-utils.ts                    # Authentication utilities
└── types/
    └── next-auth.d.ts                   # TypeScript definitions
```

## Troubleshooting

### Common Issues:
1. **"Invalid redirect URI"** - Check your OAuth provider settings
2. **"Missing environment variables"** - Ensure all required env vars are set
3. **"Provider not found"** - Verify provider names in auth configuration

### Development Tips:
- Use browser dev tools to check network requests
- Check console for authentication errors
- Verify session state in React DevTools
- Test with different browsers/devices 