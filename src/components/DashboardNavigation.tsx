'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';
import Logo from '@/components/Logo';

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
    privacyNote: 'Your dating profile is separate from other domes'
  },
  {
    id: 'explore',
    name: 'Explore',
    icon: DomeIcons.explore,
    tagline: 'Open hearts, open minds',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    privacyNote: 'Your kinks & preferences stay in Explore'
  },
  {
    id: 'social',
    name: 'Social',
    icon: DomeIcons.social,
    tagline: 'Find your tribe',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    privacyNote: 'Platonic connections only in this dome'
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: DomeIcons.professional,
    tagline: 'Network with chemistry',
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    privacyNote: 'Professional info only - no personal dome data'
  },
  {
    id: 'private',
    name: 'Private',
    icon: DomeIcons.private,
    tagline: 'Your secrets, protected',
    color: 'text-white',
    bgColor: 'bg-domeo-gray-900',
    borderColor: 'border-domeo-gray-700',
    privacyNote: 'Anonymous mode - enhanced privacy active'
  }
];

interface DashboardNavigationProps {
  activeDome?: DomeType;
  onDomeSwitch?: (domeId: DomeType) => void;
}

export default function DashboardNavigation({ activeDome = 'connect', onDomeSwitch }: DashboardNavigationProps) {
  const router = useRouter();
  const currentDome = domeConfigs.find(d => d.id === activeDome)!;

  const handleDomeSwitch = (domeId: DomeType) => {
    if (onDomeSwitch) {
      onDomeSwitch(domeId);
    } else {
      // Default behavior: navigate to dashboard with the selected dome
      router.push(`/dashboard?dome=${domeId}`);
    }
  };

  return (
    <div className="bg-white border-b border-domeo-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="xs" theme="dark" linkToHome={true} />

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
            <Link href="/matches" className="relative p-2 text-domeo-gray-600 hover:text-domeo-black transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C13.866 2 17 5.13401 17 9C17 12.866 13.866 16 10 16C9.16669 16 8.37488 15.8241 7.65823 15.5053L3 17L4.49467 12.3418C4.17588 11.6251 4 10.8333 4 10C4 6.13401 7.13401 3 11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="absolute top-1 right-1 w-2 h-2 bg-domeo-accent rounded-full"></span>
            </Link>
            
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
  );
} 