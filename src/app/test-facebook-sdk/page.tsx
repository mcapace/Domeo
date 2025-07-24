'use client';

import { useState } from 'react';
import { facebookLogin, getFacebookUserInfo, checkFacebookLoginStatus, facebookLogout } from '@/lib/facebook-utils';

export default function TestFacebookSDK() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loginStatus, setLoginStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleCheckStatus = async () => {
    setLoading(true);
    setError('');
    try {
      const status = await checkFacebookLoginStatus();
      setLoginStatus(status.status);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await facebookLogin();
      setLoginStatus(response.status);
      
      // Get user info after successful login
      const userInfo = await getFacebookUserInfo();
      setUserInfo(userInfo);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError('');
    try {
      await facebookLogout();
      setLoginStatus('unknown');
      setUserInfo(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleGetUserInfo = async () => {
    setLoading(true);
    setError('');
    try {
      const userInfo = await getFacebookUserInfo();
      setUserInfo(userInfo);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Facebook SDK Test</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Current Status</h2>
              <p className="text-sm text-gray-600">Login Status: <span className="font-medium">{loginStatus || 'Not checked'}</span></p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={handleCheckStatus}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Check Login Status'}
              </button>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login with Facebook'}
              </button>

              <button
                onClick={handleGetUserInfo}
                disabled={loading}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Getting info...' : 'Get User Info'}
              </button>

              <button
                onClick={handleLogout}
                disabled={loading}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:opacity-50"
              >
                {loading ? 'Logging out...' : 'Logout'}
              </button>
            </div>

            {userInfo && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">User Info</h3>
                <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                  {JSON.stringify(userInfo, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 