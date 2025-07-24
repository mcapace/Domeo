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
          <Logo size="sm" theme="dark" />
          
          <div className="hidden md:flex items-center gap-10">
            <Link 
              href="/how-it-works" 
              className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-[-0.01em]"
            >
              How It Works
            </Link>
            <Link 
              href="/safety" 
              className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-[-0.01em]"
            >
              Safety
            </Link>
            <Link 
              href="/membership" 
              className="text-[15px] text-gray-700 hover:text-gray-900 transition-colors font-medium tracking-[-0.01em]"
            >
              Membership
            </Link>
            <Link 
              href="/auth/signin" 
              className="px-7 py-2.5 bg-gray-900 text-white rounded-full text-[15px] font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg tracking-[-0.01em]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 