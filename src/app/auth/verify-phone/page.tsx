'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function VerifyPhone() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1);
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newCode.every(digit => digit) && index === 5) {
      handleVerify(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (verificationCode: string) => {
    setIsLoading(true);
    // TODO: Implement verification
    console.log('Verifying code:', verificationCode);
    
    // Simulate API call
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(30);
      // TODO: Implement resend logic
      console.log('Resending code...');
    }
  };

  return (
    <div className="min-h-screen bg-domeo-gray-50 flex flex-col justify-center px-6">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-12">
          <Logo size="md" className="mx-auto mb-8" />
          <h1 className="text-3xl font-extralight text-domeo-black tracking-[-0.02em] mb-2">
            Verify your phone
          </h1>
          <p className="text-domeo-gray-600 font-light">
            We sent a code to +1 (555) 000-0000
          </p>
          <Link href="/auth/signin" className="text-sm text-domeo-accent hover:text-domeo-accent/80 transition-colors">
            Wrong number?
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex gap-2 justify-center mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-2xl font-light border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                autoFocus={index === 0}
              />
            ))}
          </div>

          <button
            onClick={() => handleVerify(code.join(''))}
            disabled={isLoading || code.some(digit => !digit)}
            className="w-full px-8 py-4 bg-domeo-black text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-domeo-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Verifying...' : 'Verify & Continue'}
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-domeo-gray-600">
              Didn't receive the code?{' '}
              {resendTimer > 0 ? (
                <span className="text-domeo-gray-500">
                  Resend in {resendTimer}s
                </span>
              ) : (
                <button
                  onClick={handleResend}
                  className="text-domeo-accent font-medium hover:text-domeo-accent/80 transition-colors"
                >
                  Resend code
                </button>
              )}
            </p>
          </div>
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