'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { SocialIcons } from '@/components/SocialIcons';

export default function SignIn() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { loginMethod, email, phone, password });
  };

  console.log('Current loginMethod:', loginMethod);

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12">
      <div className="w-full max-w-md mx-auto">
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <Logo size="md" className="mx-auto mb-8" />
          <h1 className="text-3xl font-extralight text-domeo-black tracking-[-0.02em]">
            Welcome back
          </h1>
          <p className="text-domeo-gray-600 font-light mt-2">
            Sign in to access your domes
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8">
          {/* Social Login Options */}
          <div className="space-y-3">
            <button
              onClick={() => handleSocialLogin('google')}
              className="w-full px-4 py-3.5 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center gap-3"
            >
              {SocialIcons.google}
              <span className="text-[15px] font-medium text-domeo-gray-700">
                Continue with Google
              </span>
            </button>

            <button
              onClick={() => handleSocialLogin('apple')}
              className="w-full px-4 py-3.5 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-all duration-200 flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <span className="text-[15px] font-medium">
                Continue with Apple
              </span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialLogin('facebook')}
                className="px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center"
                aria-label="Continue with Facebook"
              >
                {SocialIcons.facebook}
              </button>
              <button
                onClick={() => handleSocialLogin('microsoft')}
                className="px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center"
                aria-label="Continue with Microsoft"
              >
                {SocialIcons.microsoft}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-domeo-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-domeo-gray-500 text-xs uppercase tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          {/* Email/Phone Toggle */}
          <div className="flex bg-domeo-gray-50 rounded-lg p-1 mb-6">
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="loginMethod"
                value="email"
                checked={loginMethod === 'email'}
                onChange={() => setLoginMethod('email')}
                className="sr-only"
              />
              <div className={`py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200 text-center ${
                loginMethod === 'email'
                  ? 'bg-white text-domeo-black shadow-sm'
                  : 'text-domeo-gray-600 hover:text-domeo-gray-800 hover:bg-domeo-gray-100'
              }`}>
                Email
              </div>
            </label>
            <label className="flex-1 cursor-pointer">
              <input
                type="radio"
                name="loginMethod"
                value="phone"
                checked={loginMethod === 'phone'}
                onChange={() => setLoginMethod('phone')}
                className="sr-only"
              />
              <div className={`py-2.5 px-4 rounded-md text-sm font-medium transition-all duration-200 text-center ${
                loginMethod === 'phone'
                  ? 'bg-white text-domeo-black shadow-sm'
                  : 'text-domeo-gray-600 hover:text-domeo-gray-800 hover:bg-domeo-gray-100'
              }`}>
                Phone
              </div>
            </label>
          </div>

          {/* Debug Info */}
          <div className="mb-4 p-2 bg-gray-100 rounded text-xs">
            Current method: {loginMethod}
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {loginMethod === 'email' ? (
              <>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent transition-all"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-xs font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="mr-2 rounded border-domeo-gray-300 text-domeo-accent focus:ring-domeo-accent focus:ring-offset-0" 
                    />
                    <span className="text-sm text-domeo-gray-600">Remember me</span>
                  </label>
                  <Link 
                    href="/auth/forgot-password" 
                    className="text-sm text-domeo-accent hover:text-domeo-accent/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent transition-all">
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+81">🇯🇵 +81</option>
                    </select>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-domeo-accent/20 focus:border-domeo-accent transition-all"
                      placeholder="(555) 000-0000"
                      required
                    />
                  </div>
                </div>
                
                <div className="bg-domeo-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-domeo-gray-600">
                    We'll send you a verification code
                  </p>
                  <p className="text-xs text-domeo-gray-500 mt-1">
                    Standard messaging rates may apply
                  </p>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full px-6 py-3.5 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300"
            >
              {loginMethod === 'email' ? 'Sign In' : 'Send Code'}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-domeo-gray-600 mt-8">
          New to Domeo?{' '}
          <Link 
            href="/auth/signup" 
            className="text-domeo-accent font-medium hover:text-domeo-accent/80 transition-colors"
          >
            Claim your founding membership
          </Link>
        </p>

        {/* Footer */}
        <p className="text-center text-xs text-domeo-gray-500 mt-6">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="text-domeo-accent hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-domeo-accent hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
} 