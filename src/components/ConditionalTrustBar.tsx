'use client';

import { usePathname } from 'next/navigation';
import TrustBar from './TrustBar';

export default function ConditionalTrustBar() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/auth');

  if (isAuthPage) {
    return null;
  }

  return <TrustBar />;
} 