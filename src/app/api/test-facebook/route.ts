import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const facebookClientId = process.env.FACEBOOK_CLIENT_ID;
  const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

  return NextResponse.json({
    status: 'Facebook OAuth Configuration Test',
    configured: {
      facebookClientId: !!facebookClientId,
      facebookClientSecret: !!facebookClientSecret,
    },
    values: {
      facebookClientId: facebookClientId ? `${facebookClientId.substring(0, 10)}...` : 'Not set',
      facebookClientSecret: facebookClientSecret ? `${facebookClientSecret.substring(0, 10)}...` : 'Not set',
    },
    nextSteps: {
      ifNotConfigured: [
        '1. Follow the Facebook OAuth setup guide in FACEBOOK_OAUTH_SETUP.md',
        '2. Create a Facebook app at https://developers.facebook.com/',
        '3. Add Facebook Login product to your app',
        '4. Configure OAuth redirect URIs',
        '5. Add environment variables to .env.local',
      ],
      ifConfigured: [
        '1. Test Facebook Sign In on /auth/signin page',
        '2. Check browser console for any errors',
        '3. Verify callback URL is working',
        '4. Ensure your Facebook app is not in development mode',
      ]
    },
    facebookAppSetup: {
      requiredSettings: [
        'App Domains: localhost (for development)',
        'OAuth Redirect URIs: http://localhost:3006/api/auth/callback/facebook',
        'Client OAuth Login: Enabled',
        'Web OAuth Login: Enabled',
        'Enforce HTTPS: Disabled (for development)',
      ],
      permissions: [
        'email (to get user email)',
        'public_profile (to get user name and picture)',
      ]
    }
  });
} 