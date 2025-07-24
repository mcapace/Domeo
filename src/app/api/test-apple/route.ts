import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const appleId = process.env.APPLE_ID;
  const appleSecret = process.env.APPLE_SECRET;
  const appleTeamId = process.env.APPLE_TEAM_ID;

  return NextResponse.json({
    status: 'Apple OAuth Configuration Test',
    configured: {
      appleId: !!appleId,
      appleSecret: !!appleSecret,
      appleTeamId: !!appleTeamId,
    },
    values: {
      appleId: appleId ? `${appleId.substring(0, 10)}...` : 'Not set',
      appleSecret: appleSecret ? `${appleSecret.substring(0, 20)}...` : 'Not set',
      appleTeamId: appleTeamId ? `${appleTeamId.substring(0, 5)}...` : 'Not set',
    },
    nextSteps: {
      ifNotConfigured: [
        '1. Follow the Apple OAuth setup guide in APPLE_OAUTH_SETUP.md',
        '2. Create a Service ID in Apple Developer Portal',
        '3. Generate a private key and client secret',
        '4. Add environment variables to .env.local',
      ],
      ifConfigured: [
        '1. Test Apple Sign In on /auth/signin page',
        '2. Check browser console for any errors',
        '3. Verify callback URL is working',
      ]
    }
  });
} 