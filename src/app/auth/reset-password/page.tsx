'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Logo from '@/components/Logo';

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const passwordRequirements = [
    { met: password.length >= 8, text: 'At least 8 characters' },
    { met: /[A-Z]/.test(password), text: 'One uppercase letter' },
    { met: /[a-z]/.test(password), text: 'One lowercase letter' },
    { met: /[0-9]/.test(password), text: 'One number' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    // TODO: Implement password reset
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col justify-center px-6">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-12">
            <Logo size="md" className="mx-auto mb-8" />
            
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h1 className="text-3xl font-extralight text-domeo-black tracking-[-0.02em] mb-2">
              Password reset successfully
            </h1>
            <p className="text-domeo-gray-600 font-light">
              Your password has been updated
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <button
              onClick={() => router.push('/auth/signin')}
              className="w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300"
            >
              Sign In with New Password
            </button>
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
            Set new password
          </h1>
          <p className="text-domeo-gray-600 font-light">
            Your new password must be different from previous ones
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors pr-12"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-domeo-gray-400 hover:text-domeo-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M3.98 8.223A10.477 10.477 0 001.934 10C3.226 13.338 6.244 15.5 10 15.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A4.977 4.977 0 0110 5c2.761 0 5 2.239 5 5 0 1.381-.559 2.631-1.464 3.536m-7.072-7.072l7.072 7.072" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 3l14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 4.5C6.244 4.5 3.226 6.662 1.934 10c1.292 3.338 4.31 5.5 8.066 5.5 3.756 0 6.774-2.162 8.066-5.5-1.292-3.338-4.31-5.5-8.066-5.5z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-domeo-gray-700 uppercase tracking-wider">
                Password Requirements
              </p>
              {passwordRequirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg 
                    className={`w-4 h-4 ${req.met ? 'text-green-500' : 'text-domeo-gray-300'}`} 
                    viewBox="0 0 20 20" 
                    fill="none"
                  >
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                    {req.met && (
                      <path d="M6 10L9 13L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                  </svg>
                  <span className={`text-sm ${req.met ? 'text-domeo-gray-700' : 'text-domeo-gray-500'}`}>
                    {req.text}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !passwordRequirements.every(req => req.met)}
              className="w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 