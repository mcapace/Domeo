import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Domeo - Your Domes Await',
  description: 'One profile. Five communities. Endless authentic connections.',
  keywords: 'dating app, social network, professional networking, community, connections',
  openGraph: {
    title: 'Domeo - Your Domes Await',
    description: 'One profile. Five communities. Endless authentic connections.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white`}>
        {/* Founding Member Banner */}
        <div className="bg-black text-white py-3 text-center fixed top-0 left-0 right-0 z-50 animate-slide-down">
          <p className="text-sm px-4">
            🚀 <strong>Founding Member Offer:</strong> First 5,000 members get 3 months free
            <span className="ml-4 text-pink-400 font-medium animate-pulse">2,847 spots remaining</span>
          </p>
        </div>
        
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
