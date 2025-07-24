'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function TrustBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show trust bar after scrolling past 100px
      setIsVisible(window.scrollY > 100);
      console.log('Scroll position:', window.scrollY, 'TrustBar visible:', window.scrollY > 100);
    };
    
    // Set initial state
    setIsVisible(window.scrollY > 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      'fixed top-28 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 px-8 z-40',
      'transition-all duration-300 transform',
      isVisible ? 'translate-y-0 opacity-100 shadow-sm' : '-translate-y-full opacity-0'
    )}>
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 text-sm">
        <span className="flex items-center gap-2">
          <span className="text-green-500">✓</span> 
          <span className="text-gray-700">100% Verified Profiles</span>
        </span>
        <span className="hidden md:flex items-center gap-2">
          <span>🛡️</span> 
          <span className="text-gray-700">Privacy First Platform</span>
        </span>
        <span className="hidden md:flex items-center gap-2">
          <span>🌈</span> 
          <span className="text-gray-700">All Orientations Welcome</span>
        </span>
        <span className="text-pink-500 font-medium animate-pulse">
          2,847 founding spots left
        </span>
      </div>
    </div>
  );
} 