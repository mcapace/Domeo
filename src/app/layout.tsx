import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ConditionalTrustBar from '@/components/ConditionalTrustBar';
import { SessionProvider } from '@/components/SessionProvider';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Domeo - Your Domes Await',
  description: 'One profile. Five communities. Endless authentic connections.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} font-sans antialiased bg-white`}>
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
        
        <SessionProvider>
          <Navigation />
          <ConditionalTrustBar />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
