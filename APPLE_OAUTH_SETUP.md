# Apple OAuth Setup Guide

## 🍎 Quick Setup for Apple Sign In

### Step 1: Create Apple Developer Account

1. **Go to Apple Developer Portal**
   - Visit: https://developer.apple.com/
   - Sign in with your Apple ID
   - If you don't have a developer account, you'll need to enroll ($99/year)

### Step 2: Create App ID

1. **Navigate to Certificates, Identifiers & Profiles**
   - Click on "Certificates, Identifiers & Profiles" in the left sidebar

2. **Create New App ID**
   - Click the "+" button next to "Identifiers"
   - Select "App IDs" and click "Continue"
   - Choose "App" and click "Continue"

3. **Configure App ID**
   - **Description**: "Domeo Web App"
   - **Bundle ID**: Use a reverse domain (e.g., `com.yourcompany.domeo`)
   - **Capabilities**: Check "Sign In with Apple"
   - Click "Continue" and "Register"

### Step 3: Create Service ID

1. **Create New Service ID**
   - Click the "+" button next to "Identifiers"
   - Select "Services IDs" and click "Continue"
   - Choose "Services" and click "Continue"

2. **Configure Service ID**
   - **Description**: "Domeo Web Service"
   - **Identifier**: Use your domain (e.g., `com.yourcompany.domeo.web`)
   - Click "Continue" and "Register"

3. **Configure Sign In with Apple**
   - Click on your new Service ID
   - Check "Sign In with Apple"
   - Click "Configure"
   - **Primary App ID**: Select your App ID
   - **Domains and Subdomains**: Add your domains
     - For development: `localhost`
     - For production: `yourdomain.com`
   - **Return URLs**: Add your callback URLs
     - For development: `http://localhost:3006/api/auth/callback/apple`
     - For production: `https://yourdomain.com/api/auth/callback/apple`
   - Click "Save" and "Continue"

### Step 4: Create Private Key

1. **Create New Key**
   - Click the "+" button next to "Keys"
   - Enter a name like "Domeo Apple Sign In Key"
   - Check "Sign In with Apple"
   - Click "Configure"
   - Select your Primary App ID
   - Click "Save" and "Continue"

2. **Download Key**
   - Click "Download" to get the `.p8` file
   - **IMPORTANT**: You can only download this once!
   - Note the Key ID (you'll need this)

### Step 5: Generate Client Secret

Apple requires a JWT token as the client secret. You'll need to generate this using the private key.

**Option A: Use Online Generator (for testing)**
- Visit: https://appleid.apple.com/account/manage
- Generate a client secret for your Service ID

**Option B: Generate Programmatically**
```bash
# Install JWT generator
npm install -g jwt-cli

# Generate JWT (replace with your values)
jwt encode \
  --aud https://appleid.apple.com \
  --iss YOUR_TEAM_ID \
  --sub YOUR_SERVICE_ID \
  --kid YOUR_KEY_ID \
  --exp +6m \
  --iat now \
  --alg ES256 \
  --key-file /path/to/your/AuthKey_KEYID.p8
```

### Step 6: Update Environment Variables

Add these to your `.env.local` file:

```env
# Apple OAuth
APPLE_ID=com.yourcompany.domeo.web
APPLE_SECRET=your-generated-jwt-token
APPLE_TEAM_ID=your-team-id
```

### Step 7: Test Apple Sign In

1. **Start your development server**
   ```bash
   npm run dev -- -p 3006
   ```

2. **Visit your signin page**
   - Go to: `http://localhost:3006/auth/signin`
   - Click "Continue with Apple"

3. **Complete the flow**
   - You should be redirected to Apple's OAuth page
   - After authorization, you'll be redirected back to your app

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid client" error**
   - Check that your Service ID matches `APPLE_ID`
   - Ensure your domain is added to the Service ID configuration

2. **"Invalid redirect URI" error**
   - Verify your callback URL is exactly: `http://localhost:3006/api/auth/callback/apple`
   - Check that `localhost` is added to your Service ID domains

3. **"Invalid client secret" error**
   - Regenerate your JWT client secret
   - Ensure your Team ID, Key ID, and Service ID are correct

4. **"Service not available" error**
   - Make sure "Sign In with Apple" is enabled on your Service ID
   - Verify your App ID has "Sign In with Apple" capability

### Required Values:

- **Team ID**: Found in Apple Developer account (top right)
- **Key ID**: From the private key you created
- **Service ID**: The identifier you created (e.g., `com.yourcompany.domeo.web`)
- **Private Key**: The `.p8` file you downloaded

## 🚀 Production Setup

For production, you'll need to:

1. **Update Service ID domains** to include your production domain
2. **Add production callback URL** to your Service ID
3. **Update environment variables** with production values
4. **Ensure your domain has proper SSL** (Apple requires HTTPS)

## 📱 Testing on Different Devices

- **Desktop**: Works with any modern browser
- **iOS**: Users can use Face ID/Touch ID for faster sign-in
- **Android**: Works through web browser

## 🔒 Security Notes

- Keep your private key secure and never commit it to version control
- Rotate your client secret regularly
- Use environment variables for all sensitive data
- Consider implementing additional security measures for production 