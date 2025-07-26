'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { DomeIcons } from '@/components/DomeIcons';

export default function Explore() {
  const [activeTab, setActiveTab] = useState('discover');

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
                <span className="text-purple-600">
                  {DomeIcons.explore}
                </span>
                <h1 className="text-xl font-light text-domeo-black">Explore</h1>
              </div>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-domeo-black mb-4">Open Hearts, Open Minds</h2>
          <p className="text-domeo-gray-600 max-w-2xl mx-auto">
            Discover connections beyond traditional boundaries. Explore alternative lifestyles, 
            kinks, and preferences in a safe, judgment-free space.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-domeo-gray-200">
            <div className="flex space-x-8 px-6">
              {['discover', 'preferences', 'communities', 'safety'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors capitalize ${
                    activeTab === tab
                      ? 'border-purple-600 text-domeo-black'
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
            {activeTab === 'discover' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Discover Connections</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                        <circle cx="16" cy="16" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-domeo-black mb-2">AI Matching</h4>
                    <p className="text-sm text-domeo-gray-600">Advanced compatibility based on your preferences</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M8 16L14 22L24 10" stroke="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-domeo-black mb-2">Verified Profiles</h4>
                    <p className="text-sm text-domeo-gray-600">100% verified community members</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M10 2L3 5V9C3 11.5 5 13.5 10 14C15 13.5 17 11.5 17 9V5L10 2Z" stroke="currentColor"/>
                        <circle cx="10" cy="10" r="1.5" stroke="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-domeo-black mb-2">Privacy First</h4>
                    <p className="text-sm text-domeo-gray-600">Your preferences stay in Explore</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Set Your Preferences</h3>
                <p className="text-domeo-gray-600">Configure your matching preferences for the Explore dome.</p>
                <div className="bg-purple-50 rounded-xl p-6">
                  <p className="text-sm text-domeo-gray-600">Preference settings coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'communities' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Explore Communities</h3>
                <p className="text-domeo-gray-600">Join specific communities within the Explore dome.</p>
                <div className="bg-purple-50 rounded-xl p-6">
                  <p className="text-sm text-domeo-gray-600">Community features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'safety' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-domeo-black">Safety & Guidelines</h3>
                <p className="text-domeo-gray-600">Learn about safety practices and community guidelines.</p>
                <div className="bg-purple-50 rounded-xl p-6">
                  <p className="text-sm text-domeo-gray-600">Safety guidelines coming soon...</p>
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