'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import DashboardNavigation from './DashboardNavigation';
import ConditionalTrustBar from './ConditionalTrustBar';

export default function ConditionalLayout() {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';
  const isMessagesPage = pathname.startsWith('/messages/');
  const isMatchesPage = pathname === '/matches';
  const isProfileEditPage = pathname === '/profile/edit';

  // Don't show any layout for dashboard
  if (isDashboard) {
    return null;
  }

  // For messages, matches, and profile edit pages, show dashboard navigation but no trust bar or incentive banner
  if (isMessagesPage || isMatchesPage || isProfileEditPage) {
    return (
      <>
        <DashboardNavigation />
      </>
    );
  }

  // For all other pages, show everything including incentive banner
  return (
    <>
      {/* Founding Member Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-3.5 text-center fixed top-0 left-0 right-0 z-50 animate-slide-down">
        <p className="text-[13px] px-4 font-normal tracking-wide">
          <span className="inline-block animate-pulse mr-2">🚀</span>
          <strong className="font-semibold">Founding Member Offer:</strong> 
          <span className="font-light mx-1">First 5,000 members get 3 months free</span>
          <span className="hidden sm:inline-block mx-3 text-gray-400">•</span>
          <span className="block sm:inline-block text-pink-400 font-medium mt-1 sm:mt-0">
            2,847 spots remaining
          </span>
        </p>
      </div>
      <Navigation />
      <ConditionalTrustBar />
    </>
  );
} 