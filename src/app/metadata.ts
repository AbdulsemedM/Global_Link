import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://globallink.com'),
  title: {
    default: 'Angler Trading PLC - Global Import, Export & Wholesale Solutions',
    template: '%s | Angler Trading PLC'
  },
  description: 'Leading Ethiopian import, export, and wholesale trade company. Specializing in construction materials, medical supplies, vehicles, petroleum products, coffee and tea export. Your trusted partner in global trade.',
  keywords: ['import', 'export', 'wholesale', 'trade', 'ethiopia', 'ethiopian', 'import services', 'export services', 'wholesale trade', 'construction materials', 'hardware', 'metals', 'plumbing', 'vehicles', 'petroleum', 'coffee', 'tea', 'medical supplies', 'global trade', 'international trade'],
  authors: [{ name: 'Angler Trading PLC' }],
  creator: 'Angler Trading PLC',
  publisher: 'Angler Trading PLC',
  alternates: {
    canonical: 'https://anglertrading.com',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Angler Trading PLC - Global Import, Export & Wholesale Solutions',
    description: 'Leading Ethiopian import, export, and wholesale trade company. Specializing in construction materials, medical supplies, vehicles, petroleum products, coffee and tea export.',
    url: 'https://anglertrading.com',
    siteName: 'Angler Trading PLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Angler Trading PLC - Global Trade Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angler Trading PLC - Global Trade Solutions',
    description: 'Leading Ethiopian import, export, and wholesale trade company. Your trusted partner in global trade.',
    images: ['/images/twitter-image.jpg'],
    creator: '@anglertrading',
    site: '@anglertrading',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
  category: 'Business',
} 