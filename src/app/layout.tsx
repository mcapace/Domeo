import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/ConditionalLayout';
import { SessionProvider } from '@/components/SessionProvider';
import FacebookSDK from '@/components/FacebookSDK';

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
        <SessionProvider>
          <FacebookSDK appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''} />
          <ConditionalLayout />
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
