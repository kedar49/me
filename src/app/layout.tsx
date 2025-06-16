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
import Oneko from '@/components/Oneko';
import { PageTransition } from '@/components/pageTransition';
import ReadingProgressBar from '@/components/readingProgressBar';
import ScrollToTopButton from '@/components/scrollToTopButton';



import SchemaMarkup from './schema';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Kedar Sathe | Machine Learning Engineer | VIT Pune',
    template: '%s | Kedar Sathe | ML Engineer',
  },
  description: "Kedar Sathe's personal website - Machine Learning Engineer and AI specialist from VIT Pune with expertise in TensorFlow, PyTorch, and DevOps.",
  authors: [{ name: 'Kedar Sathe' }],
  keywords: ['wtfkedar', 'kedar', 'sathe', 'kedar sathe', 'Machine Learning Engineer', 'VIT Pune', 'Vishwakarma Institute of Technology', 'AI Engineer', 'TensorFlow', 'PyTorch', 'DevOps', 'NLP', 'Computer Vision', 'Data Analysis'],
  creator: 'Kedar Sathe',
  publisher: 'Kedar Sathe',
  openGraph: {
    title: 'Kedar Sathe | Machine Learning Engineer | VIT Pune',
    description: "Kedar Sathe's personal website - Machine Learning Engineer and AI specialist from VIT Pune with expertise in TensorFlow, PyTorch, and DevOps.",
    url: baseUrl,
    siteName: 'Kedar Sathe | ML Engineer',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Kedar Sathe | ML Engineer')}`,
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    title: 'Kedar Sathe | Machine Learning Engineer',
    description: "Machine Learning Engineer and AI specialist from VIT Pune with expertise in TensorFlow, PyTorch, and DevOps.",
    creator: '@wtfkedar',
    card: 'summary_large_image',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Kedar Sathe | ML Engineer')}`],
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
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ReadingProgressBar />
        <div className="max-w-3xl mx-auto px-4 py-8 container">
          <Navbar />
          <main className="mt-6">
            <ErrorBoundary>
              <PageTransition>{children}</PageTransition>
            </ErrorBoundary>
          </main>
          <Footer />
          <SchemaMarkup />
        </div>
        <ScrollToTopButton />
        <Oneko />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
      </body>
    </html>
  );
}
