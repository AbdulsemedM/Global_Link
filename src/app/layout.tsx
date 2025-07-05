"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/navigation/footer'
import { ScrollProgress, ScrollToTop } from '@/components/effects/scroll-progress'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress color="#3B82F6" height={3} />
          <ScrollToTop color="#3B82F6" />
          
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <AnimatePresence mode="wait">
              <motion.main
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                className="flex-grow"
              >
                {children}
              </motion.main>
            </AnimatePresence>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 