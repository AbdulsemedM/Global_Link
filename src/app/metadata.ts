import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://anglertrading.com'),
  title: {
    default: 'Angler Trading PLC - Import, Export & Wholesale Trade',
    template: '%s | Angler Trading PLC'
  },
  description: 'Your trusted partner in import, export, and wholesale trade. Specializing in construction materials, medical supplies, vehicles, petroleum products, coffee and tea export.',
  keywords: ['import', 'export', 'wholesale', 'trade', 'ethiopia', 'ethiopian', 'import services', 'export services', 'wholesale trade', 'construction materials', 'hardware', 'metals', 'plumbing', 'vehicles', 'petroleum', 'coffee', 'tea'],
  authors: [{ name: 'Angler Trading PLC' }],
  creator: 'Angler Trading PLC',
  publisher: 'Angler Trading PLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Angler Trading PLC - Import, Export & Wholesale Trade',
    description: 'Your trusted partner in import, export, and wholesale trade. Specializing in construction materials, medical supplies, vehicles, petroleum products, coffee and tea export.',
    url: 'https://anglertrading.com',
    siteName: 'Angler Trading PLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Angler Trading PLC',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angler Trading PLC - Import, Export & Wholesale Trade',
    description: 'Your trusted partner in import, export, and wholesale trade. Specializing in construction materials, medical supplies, vehicles, petroleum products, coffee and tea export.',
    images: ['/images/twitter-image.jpg'],
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