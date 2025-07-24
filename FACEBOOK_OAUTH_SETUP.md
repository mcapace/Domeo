# Facebook OAuth Setup Guide

## 📘 Quick Setup for Facebook Login

### Step 1: Create Facebook Developer Account

1. **Go to Facebook Developers**
   - Visit: https://developers.facebook.com/
   - Sign in with your Facebook account
   - Click "Get Started" if you haven't used Facebook for developers before

2. **Create a New App**
   - Click "Create App" or "My Apps" → "Create App"
   - Choose "Consumer" as the app type
   - Enter your app name (e.g., "Domeo")
   - Add your contact email
   - Click "Create App"

### Step 2: Configure Facebook Login

1. **Add Facebook Login Product**
   - In your app dashboard, click "Add Product"
   - Find "Facebook Login" and click "Set Up"
   - Choose "Web" as your platform

2. **Configure OAuth Settings**
   - In the Facebook Login settings, go to "Settings" → "Basic"
   - **App Domains**: Add your domains
     - For development: `localhost`
     - For production: `yourdomain.com`
   - **Privacy Policy URL**: Add your privacy policy URL
   - **Terms of Service URL**: Add your terms of service URL

3. **Add OAuth Redirect URIs**
   - Go to "Facebook Login" → "Settings"
   - **Valid OAuth Redirect URIs**: Add these URLs:
     - For development: `http://localhost:3006/api/auth/callback/facebook`
     - For production: `https://yourdomain.com/api/auth/callback/facebook`
   - **Client OAuth Login**: Enable
   - **Web OAuth Login**: Enable
   - **Enforce HTTPS**: Disable for development, enable for production

### Step 3: Get Your App Credentials

1. **Find App ID and App Secret**
   - Go to "Settings" → "Basic"
   - Copy your **App ID** (this is your `FACEBOOK_CLIENT_ID`)
   - Click "Show" next to App Secret to reveal your **App Secret** (this is your `FACEBOOK_CLIENT_SECRET`)

2. **Note Important Information**
   - **App ID**: Looks like `123456789012345`
   - **App Secret**: Looks like `abcdef123456789abcdef123456789ab`
   - **App Status**: Make sure your app is not in "Development Mode" for production

### Step 4: Configure App Permissions

1. **Add Required Permissions**
   - Go to "Facebook Login" → "Permissions and Features"
   - Add these permissions:
     - `email` (to get user's email address)
     - `public_profile` (to get user's name and profile picture)

2. **Test Permissions**
   - Go to "Facebook Login" → "Settings" → "Advanced"
   - Add test users if your app is in development mode

### Step 5: Update Environment Variables

Add these to your `.env.local` file:

```env
# Facebook OAuth
FACEBOOK_CLIENT_ID=your-app-id-here
FACEBOOK_CLIENT_SECRET=your-app-secret-here
```

### Step 6: Test Facebook Login

1. **Start your development server**
   ```bash
   npm run dev -- -p 3006
   ```

2. **Visit your signin page**
   - Go to: `http://localhost:3006/auth/signin`
   - Click "Continue with Facebook"

3. **Complete the flow**
   - You should be redirected to Facebook's OAuth page
   - After authorization, you'll be redirected back to your app

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid OAuth redirect URI" error**
   - Check that your redirect URI exactly matches: `http://localhost:3006/api/auth/callback/facebook`
   - Ensure `localhost` is added to your app domains

2. **"App not configured for this domain" error**
   - Add `localhost` to your App Domains in Facebook app settings
   - Make sure your app is not in "Development Mode" if testing with non-admin users

3. **"Permissions error" error**
   - Ensure you've added the required permissions (`email`, `public_profile`)
   - Check that your app has been reviewed if you're requesting additional permissions

4. **"App not found" error**
   - Verify your App ID and App Secret are correct
   - Make sure your app is active and not disabled

### Required Values:

- **App ID**: Found in Facebook app settings under "Basic"
- **App Secret**: Found in Facebook app settings under "Basic" (click "Show" to reveal)
- **App Domains**: Your domain (e.g., `localhost` for development)
- **OAuth Redirect URIs**: Your callback URLs

## 🚀 Production Setup

For production, you'll need to:

1. **Update App Domains** to include your production domain
2. **Add production OAuth redirect URI** to your Facebook app
3. **Enable "Enforce HTTPS"** in Facebook app settings
4. **Submit your app for review** if you want to go live (optional for basic login)
5. **Update environment variables** with production values
6. **Ensure your domain has proper SSL** (Facebook requires HTTPS)

## 📱 Testing on Different Devices

- **Desktop**: Works with any modern browser
- **Mobile**: Works through web browser
- **Facebook App**: Users can use the Facebook app for faster sign-in on mobile

## 🔒 Security Notes

- Keep your App Secret secure and never commit it to version control
- Use environment variables for all sensitive data
- Regularly review your app's permissions and remove unused ones
- Consider implementing additional security measures for production

## 📊 App Review Process

If you want to go live with your app:

1. **Complete App Review** (optional for basic login)
2. **Add Privacy Policy and Terms of Service URLs**
3. **Submit for review** in Facebook app settings
4. **Wait for approval** (can take several days)

## 🎯 Quick Test

You can test your Facebook configuration by visiting:
```
http://localhost:3006/api/test-facebook
```

This will show you if your Facebook OAuth is properly configured. 