'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { DomeIcons } from '@/components/DomeIcons';

export default function Private() {
  const [activeTab, setActiveTab] = useState('anonymous');

  return (
    <div className="min-h-screen bg-domeo-gray-900">
      {/* Header */}
      <header className="bg-domeo-charcoal border-b border-domeo-gray-700">
        <div className="px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Logo size="xs" theme="light" linkToHome={false} />
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-white">
                  {DomeIcons.private}
                </span>
                <h1 className="text-xl font-light text-white">Private</h1>
              </div>
            </div>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-white mb-4">Your Secrets, Protected</h2>
          <p className="text-domeo-gray-300 max-w-2xl mx-auto">
            Connect discreetly with enhanced privacy controls. Your activity in Private 
            is completely anonymous and separate from other domes.
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-domeo-gray-800 rounded-2xl p-6 mb-8 border border-domeo-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-red-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10 2L3 5V9C3 11.5 5 13.5 10 14C15 13.5 17 11.5 17 9V5L10 2Z" stroke="currentColor"/>
                <circle cx="10" cy="10" r="1.5" stroke="currentColor"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">Enhanced Privacy Active</h3>
              <p className="text-sm text-domeo-gray-300">
                Your profile in Private is completely anonymous. No personal information is shared, 
                and your activity is not visible to other domes or your contacts.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-domeo-gray-800 rounded-2xl shadow-sm mb-8 border border-domeo-gray-700">
          <div className="border-b border-domeo-gray-700">
            <div className="flex space-x-8 px-6">
              {['anonymous', 'connections', 'settings', 'safety'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors capitalize ${
                    activeTab === tab
                      ? 'border-white text-white'
                      : 'border-transparent text-domeo-gray-400 hover:text-domeo-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'anonymous' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-white">Anonymous Connections</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-domeo-gray-700 rounded-xl p-6 text-center border border-domeo-gray-600">
                    <div className="w-12 h-12 bg-domeo-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                        <circle cx="16" cy="16" r="2" fill="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-white mb-2">No Photos</h4>
                    <p className="text-sm text-domeo-gray-300">Connect without sharing your identity</p>
                  </div>
                  
                  <div className="bg-domeo-gray-700 rounded-xl p-6 text-center border border-domeo-gray-600">
                    <div className="w-12 h-12 bg-domeo-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M8 16L14 22L24 10" stroke="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-white mb-2">Verified Anonymously</h4>
                    <p className="text-sm text-domeo-gray-300">Real people, anonymous profiles</p>
                  </div>
                  
                  <div className="bg-domeo-gray-700 rounded-xl p-6 text-center border border-domeo-gray-600">
                    <div className="w-12 h-12 bg-domeo-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M10 2L3 5V9C3 11.5 5 13.5 10 14C15 13.5 17 11.5 17 9V5L10 2Z" stroke="currentColor"/>
                        <circle cx="10" cy="10" r="1.5" stroke="currentColor"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-white mb-2">Enhanced Privacy</h4>
                    <p className="text-sm text-domeo-gray-300">Maximum privacy controls active</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'connections' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-white">Your Connections</h3>
                <p className="text-domeo-gray-300">Manage your anonymous connections in Private.</p>
                <div className="bg-domeo-gray-700 rounded-xl p-6 border border-domeo-gray-600">
                  <p className="text-sm text-domeo-gray-300">Connection features coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-white">Privacy Settings</h3>
                <p className="text-domeo-gray-300">Configure your anonymous profile settings.</p>
                <div className="bg-domeo-gray-700 rounded-xl p-6 border border-domeo-gray-600">
                  <p className="text-sm text-domeo-gray-300">Privacy settings coming soon...</p>
                </div>
              </div>
            )}

            {activeTab === 'safety' && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-white">Safety & Guidelines</h3>
                <p className="text-domeo-gray-300">Learn about safety practices for anonymous connections.</p>
                <div className="bg-domeo-gray-700 rounded-xl p-6 border border-domeo-gray-600">
                  <p className="text-sm text-domeo-gray-300">Safety guidelines coming soon...</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center">
          <Link href="/dashboard">
            <button className="px-6 py-3 bg-white text-domeo-black rounded-lg hover:bg-domeo-gray-100 transition-colors">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
} 