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
      'fixed top-10 left-0 right-0 z-40 transition-all duration-500',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Logo size="sm" theme="dark" />
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/how-it-works" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              How It Works
            </Link>
            <Link 
              href="/safety" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Safety
            </Link>
            <Link 
              href="/membership" 
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Membership
            </Link>
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:scale-105">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 