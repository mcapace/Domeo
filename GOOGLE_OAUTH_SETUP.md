# Google OAuth Setup Guide

## 🚀 Quick Setup for Google Login

### Step 1: Create Google OAuth App

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click on the project dropdown at the top
   - Click "New Project"
   - Name it "Domeo" or similar
   - Click "Create"

3. **Enable Google+ API**
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" or "Google Identity"
   - Click on it and click "Enable"

4. **Create OAuth 2.0 Credentials**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Name: "Domeo Web Client"

5. **Add Authorized Redirect URIs**
   - For development: `http://localhost:3006/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`
   - Click "Create"

6. **Copy Your Credentials**
   - You'll get a **Client ID** and **Client Secret**
   - Save these for the next step

### Step 2: Update Environment Variables

Add these to your `.env.local` file:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

### Step 3: Test Google Login

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to signin page:**
   - Go to `http://localhost:3006/auth/signin`

3. **Click "Continue with Google"**
   - You should be redirected to Google's OAuth page
   - After authorization, you'll be redirected back to your app

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid redirect URI" error**
   - Make sure the redirect URI in Google Console exactly matches your app
   - Check for typos in the URL

2. **"Client ID not found" error**
   - Verify your `GOOGLE_CLIENT_ID` is correct
   - Make sure there are no extra spaces

3. **"Client secret mismatch" error**
   - Verify your `GOOGLE_CLIENT_SECRET` is correct
   - Regenerate the secret if needed

4. **"API not enabled" error**
   - Make sure Google+ API is enabled in your project
   - Try enabling "Google Identity" API instead

### Debug Steps:

1. **Check environment variables:**
   ```bash
   cat .env.local
   ```

2. **Restart your development server:**
   ```bash
   npm run dev
   ```

3. **Check browser console for errors**

4. **Verify Google Console settings:**
   - Authorized JavaScript origins: `http://localhost:3006`
   - Authorized redirect URIs: `http://localhost:3006/api/auth/callback/google`

## 🎯 Production Setup

For production deployment:

1. **Update redirect URIs in Google Console:**
   - Add your production domain
   - Remove localhost URIs

2. **Update environment variables:**
   - Use production values
   - Keep secrets secure

3. **Test on production domain**

## 📞 Support

If you're still having issues:
1. Check the NextAuth.js documentation
2. Verify all environment variables are set
3. Check the browser console for detailed error messages
4. Ensure your Google project is properly configured

Your Google OAuth should now be working! 🎉 