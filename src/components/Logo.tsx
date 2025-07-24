import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  linkToHome?: boolean;
}

const sizes = {
  sm: { width: 120, height: 48, text: 'text-2xl' },
  md: { width: 150, height: 60, text: 'text-3xl' },
  lg: { width: 180, height: 72, text: 'text-4xl' },
  xl: { width: 220, height: 88, text: 'text-5xl' }
};

export default function Logo({ 
  size = 'md', 
  theme = 'dark',
  className = '',
  linkToHome = true
}: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const currentSize = sizes[size];
  const logoSrc = theme === 'light' 
    ? '/domeo-logo-white-transparent.png'
    : '/domeo-logo-black-transparent.png';
  
  // Fallback text logo with arch
  const textLogo = (
    <div className={`relative ${className}`}>
      <div className="absolute -top-2 left-0 right-0 h-8">
        <svg width="100%" height="30" viewBox="0 0 200 30" fill="none" preserveAspectRatio="none">
          <path 
            d="M10 20 Q100 -5 190 20" 
            stroke="url(#gradient)" 
            strokeWidth="3" 
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className={`${currentSize.text} font-light tracking-tight ${
        theme === 'light' ? 'text-white' : 'text-gray-900'
      }`}>
        domeo
      </span>
    </div>
  );
  
  const logoElement = imageError ? textLogo : (
    <Image
      src={logoSrc}
      alt="Domeo"
      width={currentSize.width}
      height={currentSize.height}
      className={className}
      priority
      onError={() => setImageError(true)}
    />
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-block">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
} 