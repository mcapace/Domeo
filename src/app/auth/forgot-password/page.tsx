'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';

export default function ForgotPassword() {
  const router = useRouter();
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement password reset logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center px-6">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-12">
            <Logo size="md" className="mx-auto mb-8" />
            
            <div className="w-16 h-16 bg-domeo-accent-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-domeo-accent" viewBox="0 0 24 24" fill="none">
                <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <h1 className="text-3xl font-extralight text-domeo-black tracking-[-0.02em] mb-2">
              Check your {method === 'email' ? 'email' : 'phone'}
            </h1>
            <p className="text-domeo-gray-600 font-light">
              We sent password reset instructions to<br />
              <span className="text-domeo-black font-medium">
                {method === 'email' ? email : phone}
              </span>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <Link
              href="/auth/signin"
              className="block w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300 text-center"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-12">
          <Logo size="md" className="mx-auto mb-8" />
          <h1 className="text-3xl font-extralight text-domeo-black tracking-[-0.02em] mb-2">
            Forgot your password?
          </h1>
          <p className="text-domeo-gray-600 font-light">
            No worries, we'll send you reset instructions
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {/* Method Toggle */}
          <div className="flex bg-domeo-gray-100 rounded-lg p-1 mb-6">
            <button
              onClick={() => setMethod('email')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                method === 'email'
                  ? 'bg-white text-domeo-black shadow-sm'
                  : 'text-domeo-gray-600 hover:text-domeo-gray-800'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setMethod('phone')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                method === 'phone'
                  ? 'bg-white text-domeo-black shadow-sm'
                  : 'text-domeo-gray-600 hover:text-domeo-gray-800'
              }`}
            >
              Phone
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {method === 'email' ? (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            ) : (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                  </select>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="text-center mt-6">
            <Link href="/auth/signin" className="text-sm text-domeo-gray-600 hover:text-domeo-black transition-colors">
              ← Back to sign in
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-domeo-gray-500 mt-8">
          Remember your password?{' '}
          <Link href="/auth/signin" className="text-domeo-accent hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
} 