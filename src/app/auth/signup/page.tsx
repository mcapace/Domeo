'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import { SocialIcons } from '@/components/SocialIcons';

const TOTAL_STEPS = 5;

export default function SignUp() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    selectedDomes: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete signup
      router.push('/auth/verify');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-domeo-gray-200">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo size="sm" />
          <Link href="/auth/signin" className="text-sm text-domeo-gray-600 hover:text-domeo-black transition-colors">
            Already have an account?
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-domeo-gray-100">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-domeo-gray-600 uppercase tracking-wider">
              Step {currentStep} of {TOTAL_STEPS}
            </span>
            <span className="text-xs text-domeo-gray-500">
              {currentStep === 1 && 'Account Setup'}
              {currentStep === 2 && 'Basic Information'}
              {currentStep === 3 && 'Identity Verification'}
              {currentStep === 4 && 'Choose Your Domes'}
              {currentStep === 5 && 'Founding Member Benefits'}
            </span>
          </div>
          <div className="h-1 bg-domeo-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-domeo-accent transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Step 1: Account Setup */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-light text-domeo-black mb-2">Create your account</h2>
            <p className="text-domeo-gray-600 mb-8">Join 2,153 founding members building a better way to connect</p>

            {/* Social Sign Up */}
            <div className="space-y-3 mb-8">
              <button className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 transition-all duration-200 flex items-center justify-center gap-3">
                {SocialIcons.google}
                <span className="text-sm font-medium text-domeo-gray-700">Continue with Google</span>
              </button>
              <button className="w-full px-4 py-3 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-all duration-200 flex items-center justify-center gap-3">
                <span className="text-white">{SocialIcons.apple}</span>
                <span className="text-sm font-medium">Continue with Apple</span>
              </button>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-domeo-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-domeo-gray-500">Or sign up with email</span>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                  placeholder="Min 8 characters"
                />
                <p className="text-xs text-domeo-gray-500 mt-2">Must contain uppercase, lowercase, and numbers</p>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Basic Information */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-light text-domeo-black mb-2">Tell us about yourself</h2>
            <p className="text-domeo-gray-600 mb-8">This helps us create your verified profile</p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg focus:outline-none focus:border-domeo-accent transition-colors"
                />
                <p className="text-xs text-domeo-gray-500 mt-2">You must be 18+ to join Domeo</p>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Identity Verification */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="w-20 h-20 bg-domeo-accent-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-domeo-accent" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-light text-domeo-black mb-2">Verify your identity</h2>
            <p className="text-domeo-gray-600 mb-8 max-w-md mx-auto">
              We use AI and human review to ensure every member is real. Your ID is encrypted and never shared.
            </p>

            <div className="space-y-4 max-w-md mx-auto">
              <button className="w-full px-6 py-4 bg-domeo-gray-50 rounded-lg border border-domeo-gray-200 hover:border-domeo-gray-300 transition-all text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-domeo-gray-600" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M15 9H17M15 12H17M15 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-domeo-black">Upload Government ID</p>
                    <p className="text-sm text-domeo-gray-600">Driver's license or passport</p>
                  </div>
                </div>
              </button>

              <button className="w-full px-6 py-4 bg-domeo-gray-50 rounded-lg border border-domeo-gray-200 hover:border-domeo-gray-300 transition-all text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-domeo-gray-600" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 13V16" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-domeo-black">Take a Selfie</p>
                    <p className="text-sm text-domeo-gray-600">We'll match it with your ID</p>
                  </div>
                </div>
              </button>
            </div>

            <p className="text-xs text-domeo-gray-500 mt-8">
              Your information is encrypted and stored securely. Read our{' '}
              <Link href="/privacy" className="text-domeo-accent hover:underline">
                privacy policy
              </Link>
            </p>
          </div>
        )}

        {/* Step 4: Choose Your Domes */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-light text-domeo-black mb-2">Choose your domes</h2>
            <p className="text-domeo-gray-600 mb-8">Select the communities you want to join (you can change this later)</p>

            <div className="space-y-4">
              {/* Dome selection cards */}
              {/* Add the dome selection UI here */}
            </div>
          </div>
        )}

        {/* Step 5: Founding Member Benefits */}
        {currentStep === 5 && (
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
            <div className="inline-flex items-center gap-2 bg-domeo-accent-muted px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-domeo-accent">🎉 Founding Member #2,154</span>
            </div>
            <h2 className="text-3xl font-light text-domeo-black mb-2">Welcome to Domeo!</h2>
            <p className="text-domeo-gray-600 mb-8">You've claimed your founding membership</p>

            <div className="bg-domeo-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-medium text-domeo-black mb-4">Your Benefits</h3>
              <ul className="space-y-3 text-left max-w-sm mx-auto">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-domeo-gray-700">3 months free (valued at $87)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-domeo-gray-700">Founding member badge forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-domeo-gray-700">Direct input on new features</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="ml-auto px-8 py-3 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-all duration-300 text-sm font-medium uppercase tracking-wider"
          >
            {currentStep === TOTAL_STEPS ? 'Complete Setup' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
} 