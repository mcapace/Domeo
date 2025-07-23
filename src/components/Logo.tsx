import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  className?: string;
  linkToHome?: boolean;
}

const sizes = {
  sm: { width: 120, height: 48 },
  md: { width: 150, height: 60 },
  lg: { width: 180, height: 72 },
  xl: { width: 220, height: 88 }
};

export default function Logo({ 
  size = 'md', 
  theme = 'dark',
  className = '',
  linkToHome = true
}: LogoProps) {
  const currentSize = sizes[size];
  const logoSrc = theme === 'light' 
    ? '/images/logo/domeo-logo-white-transparent.png'
    : '/images/logo/domeo-logo-black-transparent.png';
  
  const logoElement = (
    <Image
      src={logoSrc}
      alt="Domeo"
      width={currentSize.width}
      height={currentSize.height}
      className={className}
      priority
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