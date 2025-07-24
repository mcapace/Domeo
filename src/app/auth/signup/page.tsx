'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SocialIcons } from '@/components/SocialIcons';
import { DomeIcons } from '@/components/DomeIcons';
import Logo from '@/components/Logo';

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

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/auth/verify');
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
        {/* Step 1: Account Setup */}
        {currentStep === 1 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-md mx-auto">
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
              <button className="w-full px-4 py-3.5 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center gap-3">
                {SocialIcons.google}
                <span className="text-[15px] font-medium text-domeo-gray-700">
                  Continue with Google
                </span>
              </button>

              <button className="w-full px-4 py-3.5 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-all duration-200 flex items-center justify-center gap-3">
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
                <button className="px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center" aria-label="Continue with Facebook">
                  {SocialIcons.facebook}
                </button>
                <button className="px-4 py-3 bg-white border border-domeo-gray-200 rounded-lg hover:border-domeo-gray-300 hover:bg-domeo-gray-50 transition-all duration-200 flex items-center justify-center" aria-label="Continue with Microsoft">
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
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-md mx-auto">
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
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-md mx-auto text-center">
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
              <Link href="/privacy" className="text-domeo-accent hover:underline">
                privacy policy
              </Link>
            </p>
          </div>
        )}

        {/* Step 4: Choose Your Domes */}
        {currentStep === 4 && (
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-[28px] font-extralight text-domeo-black tracking-[-0.02em] mb-2">
                Choose your domes
              </h2>
              <p className="text-[15px] text-domeo-gray-600 font-light">
                Select the communities you want to join (you can change this later)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  id: 'connect',
                  name: 'Connect',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  description: 'Traditional dating with intention',
                  color: 'bg-pink-50',
                  borderColor: 'border-pink-200',
                  iconColor: 'text-pink-600',
                },
                {
                  id: 'explore',
                  name: 'Explore',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  description: 'Alternative lifestyles & modern relationships',
                  color: 'bg-purple-50',
                  borderColor: 'border-purple-200',
                  iconColor: 'text-purple-600',
                },
                {
                  id: 'social',
                  name: 'Social',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M23 21V19C23 18.1137 22.6489 17.2528 22.0168 16.5959C21.3847 15.939 20.5147 15.5304 19.6 15.46" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  ),
                  description: 'Platonic connections & friendships',
                  color: 'bg-blue-50',
                  borderColor: 'border-blue-200',
                  iconColor: 'text-blue-600',
                },
                {
                  id: 'professional',
                  name: 'Professional',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  ),
                  description: 'Network with chemistry',
                  color: 'bg-gray-50',
                  borderColor: 'border-gray-300',
                  iconColor: 'text-gray-700',
                },
                {
                  id: 'private',
                  name: 'Private',
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2579 9.77251 19.9887C9.5799 19.7195 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.74206 9.96512 4.01128 9.77251C4.2805 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  ),
                  description: 'Discreet connections',
                  color: 'bg-domeo-gray-900',
                  borderColor: 'border-domeo-gray-700',
                  iconColor: 'text-white',
                },
              ].map((dome) => (
                <button
                  key={dome.id}
                  onClick={() => handleDomeToggle(dome.id)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    formData.selectedDomes.includes(dome.id)
                      ? `${dome.color} ${dome.borderColor} ring-2 ring-offset-2 ring-domeo-accent`
                      : 'bg-white border-domeo-gray-200 hover:border-domeo-gray-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      dome.id === 'private' && formData.selectedDomes.includes(dome.id) ? dome.color : ''
                    }`}>
                      <span className={dome.iconColor}>{dome.icon}</span>
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
          <div className="bg-white rounded-2xl shadow-sm border border-domeo-gray-100 p-8 max-w-md mx-auto text-center">
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
              (currentStep === 3 && (!formData.idUploaded || !formData.selfieUploaded)) ||
              (currentStep === 4 && formData.selectedDomes.length === 0)
            }
            className="px-8 py-3.5 bg-domeo-black text-white rounded-xl hover:bg-domeo-charcoal transition-all duration-300 text-[13px] font-medium uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === TOTAL_STEPS ? 'Complete Setup' : 'Continue'}
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