import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Leading Import Export Company in Ethiopia',
  description: 'Learn about Angler Trading PLC, a trusted leader in international trade. Discover our history, values, and commitment to excellence in import, export, and wholesale trade.',
  keywords: ['about angler trading', 'ethiopian trade company', 'import export history', 'trade excellence', 'international trade partner', 'ethiopian business', 'global trade company'],
  alternates: {
    canonical: 'https://anglertrading.com/about',
  },
  openGraph: {
    title: 'About Angler Trading PLC - Leading Import Export Company',
    description: 'Learn about our journey, values, and commitment to excellence in international trade. Trusted import-export partner in Ethiopia.',
    url: 'https://anglertrading.com/about',
    type: 'website',
    images: ['/images/about-og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Angler Trading PLC - Import Export Leaders',
    description: 'Discover our journey as Ethiopia\'s trusted international trade partner.',
    images: ['/images/about-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  }
} 