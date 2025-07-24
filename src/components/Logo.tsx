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
  
  // Fallback text logo with sophisticated monochrome design
  const textLogo = (
    <div className={`relative ${className}`}>
      <span className={`${currentSize.text} font-extralight tracking-[-0.03em] ${
        theme === 'light' ? 'text-white' : 'text-domeo-black'
      }`}>
        domeo
      </span>
      {/* Simple dot instead of arch */}
      <div className="absolute -top-1 -right-3 w-2 h-2 bg-domeo-accent rounded-full"></div>
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