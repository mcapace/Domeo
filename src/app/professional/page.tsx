'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { DomeIcons } from '@/components/DomeIcons';

export default function Professional() {
  const [activeTab, setActiveTab] = useState('network');

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-domeo-gray-200">
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Logo size="xs" theme="dark" linkToHome={false} />
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-700">
                  {DomeIcons.professional}
                </span>
                <h1 className="text-xl font-light text-domeo-black">Professional</h1>
              </div>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-domeo-black mb-4">Network with Chemistry</h2>
          <p className="text-domeo-gray-600 max-w-2xl mx-auto">
            Build meaningful professional relationships. Connect with like-minded professionals 
            who share your career goals and values.
          </p>
        </div>

        {/* Professional Notice */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10 2L3 5V9C3 11.5 5 13.5 10 14C15 13.5 17 11.5 17 9V5L10 2Z" stroke="currentColor"/>
                <circle cx="10" cy="10" r="1.5" stroke="currentColor"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-domeo-black mb-2">Professional Mode Active</h3>
              <p className="text-sm text-domeo-gray-600">
                Your professional profile is separate from personal domes. Only career-relevant 
                information is shared in this space.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-domeo-gray-200">
            <div className="flex space-x-8 px-6">
              {['network', 'opportunities', 'portfolio', 'events'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors capitalize ${
                    activeTab === tab
                      ? 'border-gray-700 text-domeo-black'
                      : 'border-transparent text-domeo-gray-500 hover:text-domeo-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'network' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Professional Network</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                        <circle cx="16" cy="16" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-domeo-black mb-2">Smart Matching</h4>
                    <p className="text-sm text-domeo-gray-600">AI-powered professional compatibility</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M8 16L14 22L24 10" stroke="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-domeo-black mb-2">Verified Professionals</h4>
                    <p className="text-sm text-domeo-gray-600">Authenticated career profiles</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-gray-700" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M10 2L3 5V9C3 11.5 5 13.5 10 14C15 13.5 17 11.5 17 9V5L10 2Z" stroke="currentColor"/>
                        <circle cx="10" cy="10" r="1.5" stroke="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-domeo-black mb-2">Career Focused</h4>
                    <p className="text-sm text-domeo-gray-600">Professional information only</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'opportunities' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Career Opportunities</h3>
                <p className="text-domeo-gray-600">Discover job opportunities and career connections.</p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-sm text-domeo-gray-600">Opportunity features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Professional Portfolio</h3>
                <p className="text-domeo-gray-600">Showcase your work and professional achievements.</p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-sm text-domeo-gray-600">Portfolio features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Professional Events</h3>
                <p className="text-domeo-gray-600">Join networking events and professional meetups.</p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <p className="text-sm text-domeo-gray-600">Event features coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center">
          <Link href="/dashboard">
            <button className="px-6 py-3 bg-domeo-black text-white rounded-lg hover:bg-domeo-charcoal transition-colors">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 