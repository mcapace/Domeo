'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-domeo-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-8 h-8 animate-spin mx-auto mb-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-domeo-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-[32px] font-extralight text-domeo-black tracking-[-0.02em]">
              Welcome to Domeo!
            </h1>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="px-6 py-2 bg-domeo-gray-100 text-domeo-gray-700 rounded-lg hover:bg-domeo-gray-200 transition-colors text-[14px] font-medium"
            >
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-domeo-gray-50 rounded-xl p-6">
              <h2 className="text-[20px] font-medium text-domeo-black mb-4">Your Profile</h2>
              <div className="space-y-3">
                <div>
                  <label className="text-[12px] font-medium text-domeo-gray-600 uppercase tracking-wider">Name</label>
                  <p className="text-[15px] text-domeo-black">{session.user?.name || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-domeo-gray-600 uppercase tracking-wider">Email</label>
                  <p className="text-[15px] text-domeo-black">{session.user?.email || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-[12px] font-medium text-domeo-gray-600 uppercase tracking-wider">Phone</label>
                  <p className="text-[15px] text-domeo-black">{session.user?.phone || 'Not provided'}</p>
                </div>
              </div>
            </div>

            <div className="bg-domeo-gray-50 rounded-xl p-6">
              <h2 className="text-[20px] font-medium text-domeo-black mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-colors text-[14px] font-medium">
                  Complete Your Profile
                </button>
                <button className="w-full px-4 py-3 bg-white border border-domeo-gray-200 text-domeo-black rounded-lg hover:bg-domeo-gray-50 transition-colors text-[14px] font-medium">
                  Browse Communities
                </button>
                <button className="w-full px-4 py-3 bg-white border border-domeo-gray-200 text-domeo-black rounded-lg hover:bg-domeo-gray-50 transition-colors text-[14px] font-medium">
                  View Settings
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-domeo-accent-muted rounded-xl">
            <h3 className="text-[16px] font-medium text-domeo-black mb-2">🎉 Welcome to Domeo!</h3>
            <p className="text-[14px] text-domeo-gray-700">
              You've successfully signed up and are now part of our founding members. 
              Complete your profile to start connecting with others in your chosen communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 