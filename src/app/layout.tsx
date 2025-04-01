import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Footer from '@/components/footer';
import { GoogleAnalytics } from '@/components/googleAnalytics';
import { Navbar } from '@/components/nav';
import ReadingProgressBar from '@/components/readingProgressBar';
import ScrollToTopButton from '@/components/scrollToTopButton';
import { ThemeProvider } from '@/components/themeProvider';
import { cx } from '@/lib/utils';

import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'kedar sathe',
    template: '%s | kedar sathe',
  },
  description: "kedar's site.",
  authors: [{ name: 'kedar sathe' }],
  keywords: ['wtfkedar', 'kedar', 'sathe', 'kedar sathe'],
  creator: 'kedar sathe',
  publisher: 'kedar sathe',
  openGraph: {
    title: 'kedar sathe',
    description: "kedar's site.",
    url: baseUrl,
    siteName: 'kedar sathe',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('kedar sathe')}`,
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    title: 'kedar sathe',
    description: "kedar's site.",
    creator: '@wtfkedar',
    card: 'summary_large_image',
    images: [`${baseUrl}/og?title=${encodeURIComponent('kedar sathe')}`],
    site: '@wtfkedar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

const DepartureMono = localFont({ src: '../../public/fonts/DepartureMono-Regular.woff2' });
const fontClasses = `${GeistSans.variable} ${GeistMono.variable} ${DepartureMono.className}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx(fontClasses, 'dark')} suppressHydrationWarning>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme={false}
          disableTransitionOnChange
        >
          <ReadingProgressBar />
          <div className="max-w-3xl mx-auto px-4 py-8 container">
            <Navbar />
            <main className="mt-6">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
          <ScrollToTopButton />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        </ThemeProvider>
      </body>
    </html>
  );
}
