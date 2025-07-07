import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://globallink.com'),
  title: {
    default: 'Global Link - International Trade & Business Solutions',
    template: '%s | Global Link'
  },
  description: 'Your trusted partner in international trade and business solutions. Specializing in import, export, wholesale trade, and global business connections.',
  keywords: ['international trade', 'import', 'export', 'wholesale', 'business solutions', 'global trade', 'trade services', 'business connections', 'international business'],
  authors: [{ name: 'Global Link' }],
  creator: 'Global Link',
  publisher: 'Global Link',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Global Link - International Trade & Business Solutions',
    description: 'Your trusted partner in international trade and business solutions. Specializing in import, export, wholesale trade, and global business connections.',
    url: 'https://globallink.com',
    siteName: 'Global Link',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Global Link',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Link - International Trade & Business Solutions',
    description: 'Your trusted partner in international trade and business solutions. Specializing in import, export, wholesale trade, and global business connections.',
    images: ['/images/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
} 