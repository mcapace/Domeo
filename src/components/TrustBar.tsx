'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const TrustBarIcons = {
  verified: (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1"/>
      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  privacy: (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path d="M8 2L3 5V9C3 11.5 5 13.5 8 14C11 13.5 13 11.5 13 9V5L8 2Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  inclusive: (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <circle cx="5" cy="8" r="4" stroke="currentColor" strokeWidth="1"/>
      <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="1"/>
      <path d="M8 5V11" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
  spots: (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1"/>
      <circle cx="8" cy="8" r="2" fill="currentColor"/>
    </svg>
  )
};

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      'fixed top-28 left-0 right-0 bg-white/98 backdrop-blur-md border-b border-domeo-gray-100 py-3 px-8 z-30',
      'transition-all duration-500 transform',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    )}>
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-8 text-[13px]">
        <span className="flex items-center gap-2 text-domeo-gray-700">
          <span className="text-domeo-gray-500">{TrustBarIcons.verified}</span>
          <span className="font-light">100% Verified Profiles</span>
        </span>
        
        <span className="hidden md:flex items-center gap-2 text-domeo-gray-700">
          <span className="text-domeo-gray-500">{TrustBarIcons.privacy}</span>
          <span className="font-light">Privacy First Platform</span>
        </span>
        
        <span className="hidden md:flex items-center gap-2 text-domeo-gray-700">
          <span className="text-domeo-gray-500">{TrustBarIcons.inclusive}</span>
          <span className="font-light">All Orientations Welcome</span>
        </span>
        
        <span className="flex items-center gap-2">
          <span className="text-domeo-accent animate-pulse">{TrustBarIcons.spots}</span>
          <span className="text-domeo-accent font-medium">2,847 founding spots left</span>
        </span>
      </div>
    </div>
  );
} 