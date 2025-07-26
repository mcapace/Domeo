'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed top-10 left-0 right-0 z-40 transition-all duration-700',
      isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex-shrink-0">
            <Logo size="xs" theme="dark" />
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/how-it-works" 
              className="text-sm font-medium text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/safety" 
              className="text-sm font-medium text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              Safety
            </Link>
            <Link 
              href="/membership" 
              className="text-sm font-medium text-domeo-gray-600 hover:text-domeo-black transition-colors"
            >
              Membership
            </Link>
            <Link 
              href="/auth/signin" 
              className="px-7 py-2.5 bg-domeo-black text-white rounded-full text-sm font-medium hover:bg-domeo-gray-900 transition-all duration-300 hover:shadow-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 