import type { Metadata, Viewport } from 'next'
import './globals.css'
import { instrumentSans, newsreader, plexMono } from './fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/navigation/footer'
import { JsonLd } from '@/components/seo/json-ld'
import { site, sectors } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Import & Export from Ethiopia`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    'Ethiopia import export',
    'Ethiopian coffee export',
    'Ethiopian tea export',
    'medical supplies import Ethiopia',
    'construction materials Ethiopia',
    'petroleum products Ethiopia',
    'vehicle import Ethiopia',
    'wholesale Addis Ababa',
    'trading company Addis Ababa',
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: 'Business',
  alternates: { canonical: '/' },
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Ethiopia's gateway to global trade`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Ethiopia's gateway to global trade`,
    description: site.description,
    site: '@anglertrading',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3F1EA' },
    { media: '(prefers-color-scheme: dark)', color: '#0E110F' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const DAY_MAP: Record<string, string[]> = {
  'Monday – Friday': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  Saturday: ['Saturday'],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: `${site.url}/images/logo.png`,
      image: `${site.url}/opengraph-image.png`,
      email: site.email,
      telephone: site.phone,
      description: site.description,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        postalCode: site.address.postalCode,
        addressCountry: site.address.countryCode,
      },
      geo: { '@type': 'GeoCoordinates', latitude: site.address.geo.lat, longitude: site.address.geo.lng },
      hasMap: site.mapUrl,
      openingHoursSpecification: site.hours
        .filter((h) => DAY_MAP[h.days])
        .map((h) => {
          const [opens, closes] = h.time.split(' – ')
          return { '@type': 'OpeningHoursSpecification', dayOfWeek: DAY_MAP[h.days], opens, closes }
        }),
      areaServed: [{ '@type': 'Country', name: 'Ethiopia' }, 'Middle East', 'Europe', 'Asia'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: site.phone,
        email: site.email,
        availableLanguage: ['English', 'Amharic'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Trade services',
        itemListElement: sectors.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, url: `${site.url}/services/${s.id}` },
        })),
      },
      sameAs: site.social.map((s) => s.href),
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: 'en',
      publisher: { '@id': `${site.url}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${instrumentSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body>
        <JsonLd data={jsonLd} />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-foreground focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
