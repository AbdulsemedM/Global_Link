import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeFavicon } from '@/components/theme-favicon'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons/light_icon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://anglertrading.com",
              "name": "Angler Trading PLC",
              "image": "https://anglertrading.com/images/logo.png",
              "url": "https://anglertrading.com",
              "telephone": "+251 116 123 456",
              "email": "info@anglertrading.com",
              "description": "Your trusted partner in import, export, and wholesale trade. Specializing in construction materials, medical supplies, vehicles, petroleum products, coffee and tea export.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bole Road",
                "addressLocality": "Addis Ababa",
                "addressRegion": "Addis Ababa",
                "postalCode": "1000",
                "addressCountry": "ET"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "8.9806",
                "longitude": "38.7578"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ],
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Ethiopia"
              },
              "hasMap": "https://www.google.com/maps?q=Angler+Trading+PLC+Addis+Ababa",
              "sameAs": [
                "https://www.linkedin.com/company/angler-trading-plc",
                "https://twitter.com/anglertrading",
                "https://facebook.com/anglertrading"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 