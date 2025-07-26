'use client';

import { useRouter, usePathname } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';
import Logo from '@/components/Logo';
import Link from 'next/link';

type DomeType = 'connect' | 'explore' | 'social' | 'professional' | 'private';

interface DomeConfig {
  id: DomeType;
  name: string;
  icon: React.ReactElement;
  color: string;
  bgColor: string;
  borderColor: string;
  privacyNote: string;
  path: string;
}

const domeConfigs: DomeConfig[] = [
  {
    id: 'connect',
    name: 'CONNECT',
    icon: DomeIcons.connect,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100',
    privacyNote: 'Your dating profile is separate from other domes',
    path: '/dashboard'
  },
  {
    id: 'explore',
    name: 'EXPLORE',
    icon: DomeIcons.explore,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    privacyNote: 'Your kinks & preferences stay in Explore',
    path: '/explore'
  },
  {
    id: 'social',
    name: 'SOCIAL',
    icon: DomeIcons.social,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    privacyNote: 'Platonic connections only in this dome',
    path: '/social'
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    icon: DomeIcons.professional,
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-100',
    privacyNote: 'Professional info only - no personal dome data',
    path: '/professional'
  },
  {
    id: 'private',
    name: 'PRIVATE',
    icon: DomeIcons.private,
    color: 'text-domeo-black',
    bgColor: 'bg-domeo-gray-100',
    borderColor: 'border-domeo-gray-200',
    privacyNote: 'Anonymous mode - enhanced privacy active',
    path: '/private'
  }
];

export default function SimpleDomeNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Determine active dome based on current pathname
  const currentActiveDome = domeConfigs.find(d => d.path === pathname)?.id || 
    (pathname === '/dashboard' ? 'connect' : 'connect');
  
  const currentDome = domeConfigs.find(d => d.id === currentActiveDome)!;

  const handleDomeSwitch = (domeId: DomeType) => {
    const targetDome = domeConfigs.find(d => d.id === domeId);
    if (targetDome) {
      router.push(targetDome.path);
    }
  };

  return (
    <div className="bg-white border-b border-domeo-gray-200 sticky top-0 z-40">
      <div className="px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="xs" theme="dark" linkToHome={false} />

          <nav className="hidden md:flex items-center gap-8">
            {domeConfigs.map((dome) => (
              <button
                key={dome.id}
                onClick={() => handleDomeSwitch(dome.id)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  currentActiveDome === dome.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className={currentActiveDome === dome.id ? dome.color : 'text-domeo-gray-600'}>
                  {dome.icon}
                </span>
                <span className="text-[10px] font-medium text-domeo-gray-600">
                  {dome.name}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 text-domeo-gray-500 hover:text-domeo-gray-700 md:block hidden">
              <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="16" cy="16" r="14" stroke="currentColor"/>
                <path d="M16 12V16M16 20H16.01" stroke="currentColor" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-domeo-gray-300 flex items-center justify-center text-sm font-medium text-domeo-gray-700">
              MC
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Notice Bar */}
      <div className={`${currentDome.bgColor} ${currentDome.borderColor} border-t`}>
        <div className="px-4 md:px-6 py-2">
          <div className="flex items-center gap-2 text-xs text-domeo-gray-600">
            <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="16" cy="16" r="14" stroke="currentColor"/>
              <path d="M16 12V16M16 20H16.01" stroke="currentColor" strokeLinecap="round"/>
            </svg>
            <span>{currentDome.privacyNote}</span>
            <Link href="/settings" className="ml-auto text-domeo-accent hover:underline">
              Privacy settings →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 pb-3 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2">
          {domeConfigs.map((dome) => (
            <button
              key={dome.id}
              onClick={() => handleDomeSwitch(dome.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                currentActiveDome === dome.id
                  ? `${dome.bgColor} ${dome.color}`
                  : 'bg-white border border-domeo-gray-200 text-domeo-gray-600'
              }`}
            >
              {dome.icon}
              <span>{dome.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 