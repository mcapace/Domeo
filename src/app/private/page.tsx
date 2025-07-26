'use client';

import Link from 'next/link';

export default function Private() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-white mb-4">Private Mode</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect anonymously and securely. Your privacy is our priority.
          </p>
        </div>

        {/* Privacy Status */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-white">Privacy Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Secure</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                feature: 'End-to-End Encryption', 
                status: 'Active', 
                icon: (
                  <svg className="w-8 h-8 text-green-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                    <path d="M12 8V6C12 4.89543 12.8954 4 14 4H18C19.1046 4 20 4.89543 20 6V8" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                feature: 'Anonymous Mode', 
                status: 'Enabled', 
                icon: (
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="12" r="6" stroke="currentColor"/>
                    <path d="M8 24C8 20.6863 10.6863 18 14 18H18C21.3137 18 24 20.6863 24 24" stroke="currentColor" strokeLinecap="round"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              { 
                feature: 'No Data Tracking', 
                status: 'Confirmed', 
                icon: (
                  <svg className="w-8 h-8 text-red-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                    <path d="M8 8L24 24" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M24 8L8 24" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((item) => (
              <div key={item.feature} className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <span className="text-sm font-medium text-white">{item.feature}</span>
                </div>
                <p className="text-xs text-green-400">{item.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Anonymous Connections */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-medium text-white mb-6">Anonymous Connections</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                alias: 'Shadow',
                interests: ['Privacy', 'Technology', 'Philosophy'],
                compatibility: '94%',
                lastSeen: '2 hours ago',
                icon: (
                  <svg className="w-8 h-8 text-gray-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                alias: 'Echo',
                interests: ['Art', 'Music', 'Travel'],
                compatibility: '87%',
                lastSeen: '1 day ago',
                icon: (
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  </svg>
                )
              },
              {
                alias: 'Phoenix',
                interests: ['Writing', 'Nature', 'Meditation'],
                compatibility: '91%',
                lastSeen: 'Online now',
                icon: (
                  <svg className="w-8 h-8 text-orange-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 2L20 10L28 12L20 14L16 22L12 14L4 12L12 10L16 2Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((profile) => (
              <div key={profile.alias} className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    {profile.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{profile.alias}</h4>
                    <p className="text-sm text-gray-400">{profile.lastSeen}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Compatibility</span>
                    <span className="text-sm font-medium text-green-400">{profile.compatibility}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: profile.compatibility }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span key={interest} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Features */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-medium text-white mb-6">Privacy Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Anonymous Messaging',
                description: 'Send messages without revealing your identity',
                icon: (
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 8L16 16L28 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Secure Voice Calls',
                description: 'End-to-end encrypted voice communication',
                icon: (
                  <svg className="w-8 h-8 text-green-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8V16L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'No Profile Photos',
                description: 'Connect based on interests, not appearance',
                icon: (
                  <svg className="w-8 h-8 text-purple-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="12" r="6" stroke="currentColor"/>
                    <path d="M8 24C8 20.6863 10.6863 18 14 18H18C21.3137 18 24 20.6863 24 24" stroke="currentColor" strokeLinecap="round"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Auto-Delete Messages',
                description: 'Messages disappear after 24 hours',
                icon: (
                  <svg className="w-8 h-8 text-red-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4L20 12L28 16L20 20L16 28L12 20L4 16L12 12L16 4Z" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h4 className="font-medium text-white">{feature.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Guidelines */}
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-medium text-white mb-4">Privacy Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Stay Anonymous',
                description: 'Never share personal identifying information',
                icon: (
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="12" r="6" stroke="currentColor"/>
                    <path d="M8 24C8 20.6863 10.6863 18 14 18H18C21.3137 18 24 20.6863 24 24" stroke="currentColor" strokeLinecap="round"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Trust Your Instincts',
                description: 'If something feels off, trust your gut',
                icon: (
                  <svg className="w-8 h-8 text-green-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 16L14 22L24 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                  </svg>
                )
              },
              {
                title: 'Respect Boundaries',
                description: 'Always ask before sharing sensitive topics',
                icon: (
                  <svg className="w-8 h-8 text-purple-400" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  </svg>
                )
              }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-medium text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 