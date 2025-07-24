'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';
import Logo from '@/components/Logo';
import React from 'react';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

interface DomeConfig {
  id: DomeType;
  name: string;
  icon: React.ReactElement;
  tagline: string;
  color: string;
  bgColor: string;
  borderColor: string;
  privacyNote: string;
  quickStats: {
    primary: { label: string; value: number };
    secondary: { label: string; value: number };
    action: { label: string; count?: number };
  };
}

const domeConfigs: DomeConfig[] = [
  {
    id: 'connect',
    name: 'Connect',
    icon: DomeIcons.connect,
    tagline: 'Find your person',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    privacyNote: 'Your dating profile is separate from other domes',
    quickStats: {
      primary: { label: 'New Matches', value: 3 },
      secondary: { label: 'Conversations', value: 5 },
      action: { label: 'Discover Singles', count: 127 }
    }
  },
  {
    id: 'explore',
    name: 'Explore',
    icon: DomeIcons.explore,
    tagline: 'Open hearts, open minds',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    privacyNote: 'Your kinks & preferences stay in Explore',
    quickStats: {
      primary: { label: 'Connections', value: 8 },
      secondary: { label: 'Events Nearby', value: 4 },
      action: { label: 'Browse ENM Profiles', count: 89 }
    }
  },
  {
    id: 'social',
    name: 'Social',
    icon: DomeIcons.social,
    tagline: 'Find your tribe',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    privacyNote: 'Platonic connections only in this dome',
    quickStats: {
      primary: { label: 'New Friends', value: 12 },
      secondary: { label: 'Groups Joined', value: 3 },
      action: { label: 'Discover Events' }
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: DomeIcons.professional,
    tagline: 'Network with chemistry',
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    privacyNote: 'Professional info only - no personal dome data',
    quickStats: {
      primary: { label: 'Connections', value: 24 },
      secondary: { label: 'Opportunities', value: 7 },
      action: { label: 'Find Collaborators' }
    }
  },
  {
    id: 'private',
    name: 'Private',
    icon: DomeIcons.private,
    tagline: 'Your secrets, protected',
    color: 'text-white',
    bgColor: 'bg-domeo-gray-900',
    borderColor: 'border-domeo-gray-700',
    privacyNote: 'Anonymous mode - enhanced privacy active',
    quickStats: {
      primary: { label: 'Discreet Matches', value: 4 },
      secondary: { label: 'Active Now', value: 2 },
      action: { label: 'Browse Privately' }
    }
  }
];

interface Match {
  id: number;
  name: string;
  photo: string;
  lastMessage: string;
  time: string;
  age?: number | string;
  role?: string;
  isNew?: boolean;
  isGroup?: boolean;
}

// Sample matches data (in real app, would be from API)
const sampleMatches: Record<DomeType, Match[]> = {
  connect: [
    { id: 1, name: 'David', age: 32, photo: '👤', lastMessage: 'Dog park this weekend?', time: '2h ago' },
    { id: 2, name: 'Michael', age: 30, photo: '👤', lastMessage: 'That hiking trail looks amazing!', time: '5h ago' },
    { id: 3, name: 'James', age: 34, photo: '👤', lastMessage: 'Just matched!', time: 'Just now', isNew: true }
  ],
  explore: [
    { id: 4, name: 'Jordan & Sam', age: '28 & 30', photo: '👥', lastMessage: 'Dinner Friday?', time: '1h ago' },
    { id: 5, name: 'Alex', age: 31, photo: '👤', lastMessage: 'Have you read Opening Up?', time: '3h ago' }
  ],
  social: [
    { id: 6, name: 'Priya', age: 31, photo: '👤', lastMessage: 'Wine bar at 7?', time: '30m ago' },
    { id: 7, name: "Women's Hiking Group", photo: '⛰️', lastMessage: 'Saturday morning hike!', time: '2h ago', isGroup: true }
  ],
  professional: [
    { id: 8, name: 'Alex Kim', role: 'Founder', photo: '👤', lastMessage: 'Coffee Thursday?', time: '4h ago' }
  ],
  private: [
    { id: 9, name: 'Anonymous Match', photo: '🎭', lastMessage: 'Verified ✓', time: '1h ago' }
  ]
};

export default function Dashboard() {
  const router = useRouter();
  const [activeDome, setActiveDome] = useState<DomeType>('connect');
  const [showProfileCompletion, setShowProfileCompletion] = useState(true);
  
  const currentDome = domeConfigs.find(d => d.id === activeDome)!;
  const currentMatches = sampleMatches[activeDome] || [];

  const handleDomeSwitch = (domeId: DomeType) => {
    setActiveDome(domeId);
    // In real app: Update URL, load dome-specific data
  };

  return (
    <div className="min-h-screen bg-domeo-gray-50">
      {/* Dome Switcher - Always Visible */}
      <div className="bg-white border-b border-domeo-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo size="sm" theme="dark" linkToHome={true} />

            {/* Dome Switcher */}
            <div className="flex items-center gap-1 bg-domeo-gray-50 rounded-full p-1">
              {domeConfigs.map((dome) => (
                <button
                  key={dome.id}
                  onClick={() => handleDomeSwitch(dome.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    activeDome === dome.id
                      ? 'bg-white shadow-sm'
                      : 'hover:bg-domeo-gray-100'
                  }`}
                >
                  <span className={`${activeDome === dome.id ? dome.color : 'text-domeo-gray-500'} transition-colors`}>
                    {dome.icon}
                  </span>
                  <span className={`text-sm font-medium ${
                    activeDome === dome.id ? 'text-domeo-black' : 'text-domeo-gray-600'
                  }`}>
                    {dome.name}
                  </span>
                </button>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-domeo-gray-600 hover:text-domeo-black transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C13.866 2 17 5.13401 17 9C17 12.866 13.866 16 10 16C9.16669 16 8.37488 15.8241 7.65823 15.5053L3 17L4.49467 12.3418C4.17588 11.6251 4 10.8333 4 10C4 6.13401 7.13401 3 11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-domeo-accent rounded-full"></span>
              </button>
              
              <button className="w-10 h-10 rounded-full bg-domeo-gray-200 flex items-center justify-center text-sm font-medium text-domeo-gray-700">
                MC
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Notice Bar */}
        <div className={`${currentDome.bgColor} ${currentDome.borderColor} border-t`}>
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-domeo-gray-600" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L3 5V9C3 11.5 5 13.5 8 14C11 13.5 13 11.5 13 9V5L8 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="text-xs text-domeo-gray-600">{currentDome.privacyNote}</span>
            </div>
            <Link href="/settings/privacy" className="text-xs text-domeo-accent hover:text-domeo-accent/80">
              Privacy settings →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Actions */}
          <div className="space-y-6">
            {/* Profile Completion (Connect dome only) */}
            {activeDome === 'connect' && showProfileCompletion && (
              <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-medium text-domeo-black">Complete Your Profile</h3>
                  <button 
                    onClick={() => setShowProfileCompletion(false)}
                    className="text-domeo-gray-400 hover:text-domeo-gray-600"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-domeo-gray-600">Verified identity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-domeo-gray-100 flex items-center justify-center">
                      <span className="text-sm">4/6</span>
                    </div>
                    <span className="text-sm text-domeo-gray-600">Add 2 more photos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-domeo-gray-100 flex items-center justify-center">
                      <span className="text-sm">!</span>
                    </div>
                    <span className="text-sm text-domeo-gray-600">Write your bio</span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-domeo-black text-white text-xs font-medium uppercase tracking-wider rounded-lg hover:bg-domeo-charcoal transition-colors">
                  Complete Profile
                </button>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
              <h3 className="text-sm font-medium text-domeo-black mb-4">{currentDome.name} Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-domeo-gray-600">{currentDome.quickStats.primary.label}</span>
                  <span className={`text-2xl font-light ${currentDome.color}`}>
                    {currentDome.quickStats.primary.value}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-domeo-gray-600">{currentDome.quickStats.secondary.label}</span>
                  <span className="text-2xl font-light text-domeo-gray-700">
                    {currentDome.quickStats.secondary.value}
                  </span>
                </div>
                <button className={`w-full mt-4 px-4 py-3 ${currentDome.bgColor} ${currentDome.borderColor} border rounded-xl text-sm font-medium ${currentDome.color} hover:bg-opacity-70 transition-all`}>
                  {currentDome.quickStats.action.label}
                  {currentDome.quickStats.action.count && (
                    <span className="ml-2 text-xs opacity-70">({currentDome.quickStats.action.count})</span>
                  )}
                </button>
              </div>
            </div>

            {/* Dome-Specific Actions */}
            <div className="bg-white rounded-xl border border-domeo-gray-200 p-6">
              <h3 className="text-sm font-medium text-domeo-black mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {activeDome === 'connect' && (
                  <>
                    <button className="w-full text-left px-4 py-3 hover:bg-domeo-gray-50 rounded-lg transition-colors text-sm">
                      Update dating preferences →
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-domeo-gray-50 rounded-lg transition-colors text-sm">
                      Boost your profile →
                    </button>
                  </>
                )}
                {activeDome === 'explore' && (
                  <>
                    <button className="w-full text-left px-4 py-3 hover:bg-domeo-gray-50 rounded-lg transition-colors text-sm">
                      Update kink preferences →
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-domeo-gray-50 rounded-lg transition-colors text-sm">
                      Find ENM events →
                    </button>
                  </>
                )}
                {activeDome === 'social' && (
                  <>
                    <button className="w-full text-left px-4 py-3 hover:bg-domeo-gray-50 rounded-lg transition-colors text-sm">
                      Browse interest groups →
                    </button>
                    <button className="w-full text-left px-4 py-3 hover:bg-domeo-gray-50 rounded-lg transition-colors text-sm">
                      Create an event →
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Center Column - Main Swipe Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-domeo-gray-200 p-6 min-h-[600px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-domeo-black">
                  {activeDome === 'connect' && 'Discover Singles'}
                  {activeDome === 'explore' && 'Explore Connections'}
                  {activeDome === 'social' && 'Find Friends'}
                  {activeDome === 'professional' && 'Network'}
                  {activeDome === 'private' && 'Browse Privately'}
                </h2>
                <button className="text-sm text-domeo-gray-600 hover:text-domeo-accent transition-colors">
                  Filters
                </button>
              </div>

              {/* Placeholder for Swipe Cards */}
              <div className="flex items-center justify-center h-[500px] bg-domeo-gray-50 rounded-xl">
                <div className="text-center">
                  <div className={`w-24 h-24 ${currentDome.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`${currentDome.color} scale-150`}>{currentDome.icon}</span>
                  </div>
                  <p className="text-domeo-gray-600 mb-4">Ready to start swiping in {currentDome.name}?</p>
                  <button className="px-6 py-3 bg-domeo-black text-white rounded-xl text-sm font-medium uppercase tracking-wider hover:bg-domeo-charcoal transition-colors">
                    Start Discovering
                  </button>
                </div>
              </div>

              {/* Recent Matches Preview */}
              {currentMatches.length > 0 && (
                <div className="mt-6 pt-6 border-t border-domeo-gray-200">
                  <h3 className="text-sm font-medium text-domeo-gray-700 mb-4">Recent Matches</h3>
                  <div className="space-y-3">
                    {currentMatches.slice(0, 3).map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-3 hover:bg-domeo-gray-50 rounded-lg transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-domeo-gray-200 rounded-full flex items-center justify-center text-lg">
                            {match.photo}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-domeo-black">
                              {match.name} {match.age && <span className="font-normal text-domeo-gray-600">• {match.age}</span>}
                            </p>
                            <p className="text-xs text-domeo-gray-600">{match.lastMessage}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-domeo-gray-500">{match.time}</p>
                          {match.isNew && (
                            <span className="inline-block mt-1 w-2 h-2 bg-domeo-accent rounded-full"></span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-domeo-gray-100 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <Logo theme="dark" size="sm" className="mb-6" linkToHome={true} />
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