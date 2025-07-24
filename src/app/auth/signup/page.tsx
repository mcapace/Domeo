'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SocialIcons } from '@/components/SocialIcons';
import { DomeIcons } from '@/components/DomeIcons';
import Logo from '@/components/Logo';
import { authUtils } from '@/lib/auth-utils';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';

const TOTAL_STEPS = 5;

export default function SignUp() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    birthDate: '',
    selectedDomes: [] as string[],
    idUploaded: false,
    selfieUploaded: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availableDomes, setAvailableDomes] = useState<any[]>([]);

  const handleNext = async () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete signup process
      await handleCompleteSignup();
    }
  };

  const handleCompleteSignup = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate required fields
      if (!formData.email && !formData.phone) {
        setError("Email or phone number is required");
        return;
      }

      if (!formData.password) {
        setError("Password is required");
        return;
      }

      if (!formData.firstName || !formData.lastName) {
        setError("First and last name are required");
        return;
      }

      if (!formData.birthDate) {
        setError("Date of birth is required");
        return;
      }

      if (!formData.idUploaded || !formData.selfieUploaded) {
        setError("Identity verification is required");
        return;
      }

      if (formData.selectedDomes.length === 0) {
        setError("Please select at least one dome");
        return;
      }

      // Create account
      const result = await authUtils.signUp({
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
      });

      if (result.success) {
        // Redirect to dashboard or onboarding
        router.push('/dashboard');
      } else {
        setError(result.error || "Failed to create account");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: "google" | "apple" | "facebook") => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.error) {
        setError(`Failed to sign in with ${provider}`);
      } else if (result?.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(`${provider} sign in error:`, error);
      setError(`Failed to sign in with ${provider}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDomeToggle = (dome: string) => {
    if (formData.selectedDomes.includes(dome)) {
      setFormData({
        ...formData,
        selectedDomes: formData.selectedDomes.filter(d => d !== dome),
      });
    } else {
      setFormData({
        ...formData,
        selectedDomes: [...formData.selectedDomes, dome],
      });
    }
  };

  // Load available domes on component mount
  useEffect(() => {
    const loadDomes = async () => {
      const result = await authUtils.getAllDomes();
      if (result.success) {
        setAvailableDomes(result.domes);
      }
    };
    loadDomes();
  }, []);

  const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Progress Bar */}
      <div className="bg-white border-b border-domeo-gray-100 sticky top-0 z-40 pt-24">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-medium text-pink-500 uppercase tracking-wider">
              Step {currentStep} of {TOTAL_STEPS}
            </span>
            <a 
              href="/auth/signin"
              className="text-[13px] text-blue-600 hover:text-blue-800 transition-colors cursor-pointer font-medium"
            >
              Already have an account?
            </a>
          </div>
          <div className="h-1 bg-domeo-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-pink-500 transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-[12px] text-domeo-gray-500 mt-2">
            {currentStep === 1 && 'Create your account'}
            {currentStep === 2 && 'Tell us about yourself'}
            {currentStep === 3 && 'Verify your identity'}
            {currentStep === 4 && 'Choose your communities'}
            {currentStep === 5 && 'Welcome to Domeo'}
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 max-w-xl mx-auto">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-[14px] text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Step 1: Account Setup */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[28px] font-extralight text-domeo-black tracking-[-0.02em] mb-2">
                Create your account
              </h2>
              <p className="text-[15px] text-domeo-gray-600 font-light">
                Join 2,153 founding members building a better way to connect
              </p>
            </div>

            {/* Social Sign Up */}
            <div className="space-y-3 mb-8">
              <button 
                onClick={() => handleSocialSignIn("google")}
                disabled={isLoading}
                className="w-full px-4 py-3.5 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {SocialIcons.google}
                <span className="text-[15px] font-medium text-domeo-gray-700">
                  Continue with Google
                </span>
              </button>

              <button 
                onClick={() => handleSocialSignIn("apple")}
                disabled={isLoading}
                className="w-full px-4 py-3.5 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  onClick={() => handleSocialSignIn("facebook")}
                  disabled={isLoading}
                  className="px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" 
                  aria-label="Continue with Facebook"
                >
                  {SocialIcons.facebook}
                </button>
                <button 
                  onClick={() => handleSocialSignIn("facebook")}
                  disabled={isLoading}
                  className="px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" 
                  aria-label="Continue with Microsoft"
                >
                  {SocialIcons.microsoft}
                </button>
              </div>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-domeo-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-[11px] font-medium text-domeo-gray-500 uppercase tracking-wider">
                  Or sign up with email
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

            <form className="space-y-5">
              {loginMethod === 'email' ? (
                <div>
                  <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                    placeholder="you@example.com"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select className="px-3 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all">
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+81">🇯🇵 +81</option>
                    </select>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="flex-1 px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                  placeholder="Min 8 characters"
                />
                <p className="text-[11px] text-domeo-gray-500 mt-2">
                  Must contain uppercase, lowercase, and numbers
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Basic Information */}
        {currentStep === 2 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[28px] font-extralight text-domeo-black tracking-[-0.02em] mb-2">
                Tell us about yourself
              </h2>
              <p className="text-[15px] text-domeo-gray-600 font-light">
                This helps us create your verified profile
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select className="px-3 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-domeo-gray-700 mb-2 uppercase tracking-wider">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="w-full px-4 py-3 bg-domeo-gray-50 border border-domeo-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-pink-400/20 focus:border-pink-400 transition-all text-[15px]"
                />
                <p className="text-[11px] text-domeo-gray-500 mt-2">
                  You must be 18+ to join Domeo
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Identity Verification */}
        {currentStep === 3 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-domeo-accent-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-domeo-accent" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <h2 className="text-[28px] font-extralight text-domeo-black tracking-[-0.02em] mb-2">
              Verify your identity
            </h2>
            <p className="text-[15px] text-domeo-gray-600 font-light mb-8 max-w-sm mx-auto">
              We use AI and human review to ensure every member is real. Your ID is encrypted and never shared.
            </p>

            <div className="space-y-4">
              <button 
                onClick={() => setFormData({ ...formData, idUploaded: true })}
                className={`w-full px-6 py-4 rounded-xl border transition-all text-left ${
                  formData.idUploaded 
                    ? 'bg-domeo-accent-muted border-domeo-accent' 
                    : 'bg-domeo-gray-50 border-domeo-gray-200 hover:border-domeo-gray-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    formData.idUploaded ? 'bg-domeo-accent/10' : 'bg-white'
                  }`}>
                    {formData.idUploaded ? (
                      <svg className="w-6 h-6 text-domeo-accent" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-domeo-gray-600" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M15 9H17M15 12H17M15 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-domeo-black text-[15px]">
                      {formData.idUploaded ? 'Government ID uploaded' : 'Upload Government ID'}
                    </p>
                    <p className="text-[13px] text-domeo-gray-600">
                      Driver's license or passport
                    </p>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => setFormData({ ...formData, selfieUploaded: true })}
                className={`w-full px-6 py-4 rounded-xl border transition-all text-left ${
                  formData.selfieUploaded 
                    ? 'bg-domeo-accent-muted border-domeo-accent' 
                    : 'bg-domeo-gray-50 border-domeo-gray-200 hover:border-domeo-gray-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    formData.selfieUploaded ? 'bg-domeo-accent/10' : 'bg-white'
                  }`}>
                    {formData.selfieUploaded ? (
                      <svg className="w-6 h-6 text-domeo-accent" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-domeo-gray-600" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 13V16" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-domeo-black text-[15px]">
                      {formData.selfieUploaded ? 'Selfie uploaded' : 'Take a Selfie'}
                    </p>
                    <p className="text-[13px] text-domeo-gray-600">
                      We'll match it with your ID
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <p className="text-[11px] text-domeo-gray-500 mt-8">
              Your information is encrypted and stored securely. Read our{' '}
              <Link href="/settings" className="text-domeo-accent hover:underline">
                privacy policy
              </Link>
            </p>
          </div>
        )}

        {/* Step 4: Choose Your Domes */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[28px] font-extralight text-domeo-black tracking-[-0.02em] mb-2">
                Choose your domes
              </h2>
              <p className="text-[15px] text-domeo-gray-600 font-light">
                Select the communities you want to join (you can change this later)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {availableDomes.map((dome) => (
                <button
                  key={dome.id}
                  onClick={() => handleDomeToggle(dome.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    formData.selectedDomes.includes(dome.id)
                      ? `bg-${dome.color} border-${dome.color} ring-2 ring-offset-2 ring-domeo-accent`
                      : 'bg-white border-domeo-gray-200 hover:border-domeo-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center`}
                         style={{ backgroundColor: dome.color }}>
                      <span style={{ color: dome.iconColor }}>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-domeo-black text-[16px] mb-1">
                        {dome.name}
                      </h3>
                      <p className="text-[13px] text-domeo-gray-600">
                        {dome.description}
                      </p>
                    </div>
                    {formData.selectedDomes.includes(dome.id) && (
                      <svg className="w-5 h-5 text-domeo-accent mt-0.5" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" fill="currentColor"/>
                        <path d="M6 10L9 13L14 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[13px] text-domeo-gray-600 text-center">
              Select at least one dome to continue • {formData.selectedDomes.length} selected
            </p>
          </div>
        )}

        {/* Step 5: Welcome */}
        {currentStep === 5 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-domeo-accent-muted px-4 py-2 rounded-full mb-6">
              <span className="text-[13px] font-medium text-domeo-accent uppercase tracking-wider">
                Founding Member #2,154
              </span>
            </div>
            
            <h2 className="text-[32px] font-extralight text-domeo-black tracking-[-0.02em] mb-2">
              Welcome to Domeo!
            </h2>
            <p className="text-[15px] text-domeo-gray-600 font-light mb-8">
              You've claimed your founding membership
            </p>

            <div className="bg-domeo-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-medium text-domeo-black text-[16px] mb-4">Your Benefits</h3>
              <ul className="space-y-3 text-left max-w-xs mx-auto">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[14px] text-domeo-gray-700">
                    3 months free (valued at $87)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[14px] text-domeo-gray-700">
                    Founding member badge forever
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[14px] text-domeo-gray-700">
                    Direct input on new features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-domeo-accent mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10L8 13L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[14px] text-domeo-gray-700">
                    Priority customer support
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-domeo-accent-muted rounded-xl p-4 mb-8">
              <p className="text-[13px] text-domeo-gray-700">
                <span className="font-medium">No payment required now</span><br />
                We'll remind you before your trial ends
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center mt-8 max-w-2xl mx-auto relative">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="absolute left-0 px-6 py-3 text-[14px] text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              ← Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={
              isLoading ||
              (currentStep === 3 && (!formData.idUploaded || !formData.selfieUploaded)) ||
              (currentStep === 4 && formData.selectedDomes.length === 0)
            }
            className="px-8 py-3.5 bg-domeo-black text-white rounded-xl hover:bg-domeo-charcoal transition-all duration-300 text-[13px] font-medium uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading && (
              <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {currentStep === TOTAL_STEPS ? (isLoading ? 'Creating Account...' : 'Complete Setup') : 'Continue'}
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-domeo-gray-100 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <div>
                <Logo theme="dark" size="sm" className="mb-6" />
                <p className="text-[13px] text-domeo-gray-500 leading-relaxed">
                  One profile. Five communities.<br />
                  Endless authentic connections.
                </p>
              </div>
              
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-domeo-gray-700 mb-6">Product</h4>
                <ul className="space-y-3">
                  {['How It Works', 'The Domes', 'Pricing', 'Success Stories'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-domeo-gray-700 mb-6">Company</h4>
                <ul className="space-y-3">
                  {['About Us', 'Careers', 'Press', 'Blog'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase text-domeo-gray-700 mb-6">Trust & Safety</h4>
                <ul className="space-y-3">
                  {['Safety Center', 'Community Guidelines', 'Privacy Policy', 'Terms of Service'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-[13px] text-domeo-gray-500 hover:text-domeo-black transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-domeo-gray-100 mt-16 pt-8">
              <p className="text-[11px] text-domeo-gray-400 text-center tracking-wider uppercase">
                © 2024 Domeo. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
} 