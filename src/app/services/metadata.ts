import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Import, Export & Wholesale Solutions',
  description: 'Comprehensive import, export, and wholesale services including medical supplies, construction materials, vehicles, petroleum products, and agricultural goods. Expert trade solutions in Ethiopia.',
  keywords: ['import services', 'export services', 'wholesale trade', 'medical supplies', 'construction materials', 'vehicles', 'petroleum products', 'agricultural goods', 'ethiopia trade', 'global trade solutions'],
  alternates: {
    canonical: 'https://anglertrading.com/services',
  },
  openGraph: {
    title: 'Import Export Services by Angler Trading PLC',
    description: 'Expert import-export services in medical supplies, construction materials, vehicles, and more. Your trusted trade partner in Ethiopia.',
    url: 'https://anglertrading.com/services',
    type: 'website',
    images: ['/images/services-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Import Export Services - Angler Trading PLC',
    description: 'Expert import-export services in Ethiopia. Medical supplies, construction materials, vehicles, and more.',
    images: ['/images/services-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
} 