'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DomeIcons } from '@/components/DomeIcons';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Home', icon: '🏠' },
    { href: '/discover', label: 'Discover', icon: '💫' },
    { href: '/matches', label: 'Matches', icon: '💬' },
    { href: '/profile/edit', label: 'Profile', icon: '👤' },
    { href: '/settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-domeo-gray-200 z-50 md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'text-domeo-accent bg-domeo-accent/5' 
                  : 'text-domeo-gray-500 hover:text-domeo-gray-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 