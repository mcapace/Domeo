'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function VerifyEmail() {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [email] = useState('user@example.com'); // TODO: Get from auth state

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleResend = async () => {
    setIsResending(true);
    setResendTimer(60);
    
    // TODO: Implement resend logic
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  const handleCheckEmail = () => {
    // Open email client
    window.location.href = 'mailto:';
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-12">
          <Logo size="md" className="mx-auto mb-8" />
          
          {!isVerified ? (
            <>
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
                Check your email
              </h1>
              <p className="text-domeo-gray-600 font-light mb-2">
                We sent a verification link to
              </p>
              <p className="text-domeo-black font-medium mb-8">
                {email}
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h1 className="text-3xl font-extralight text-domeo-black tracking-[-0.02em] mb-2">
                Email verified!
              </h1>
              <p className="text-domeo-gray-600 font-light mb-8">
                Your account has been verified successfully
              </p>
            </>
          )}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {!isVerified ? (
            <>
              <button
                onClick={handleCheckEmail}
                className="w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300"
              >
                Open Email App
              </button>

              <div className="text-center mt-6">
                <p className="text-sm text-domeo-gray-600 mb-4">
                  Didn't receive the email? Check your spam folder or
                </p>
                {resendTimer > 0 ? (
                  <p className="text-sm text-domeo-gray-500">
                    Resend available in {resendTimer}s
                  </p>
                ) : (
                  <button
                    onClick={handleResend}
                    disabled={isResending}
                    className="text-domeo-accent font-medium hover:text-domeo-accent/80 transition-colors disabled:opacity-50"
                  >
                    {isResending ? 'Sending...' : 'Resend verification email'}
                  </button>
                )}
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-domeo-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-domeo-gray-500">Or</span>
                </div>
              </div>

              <Link
                href="/auth/signin"
                className="block w-full px-8 py-4 border border-domeo-gray-300 text-domeo-black text-sm font-medium tracking-wider uppercase rounded-lg hover:border-domeo-black transition-all duration-300 text-center"
              >
                Back to Sign In
              </Link>
            </>
          ) : (
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300"
            >
              Continue to Dashboard
            </button>
          )}
        </div>

        <p className="text-center text-xs text-domeo-gray-500 mt-8">
          Having trouble?{' '}
          <Link href="/support" className="text-domeo-accent hover:underline">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
} 