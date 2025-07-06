"use client"

import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navigation/navbar'
import { Footer } from '@/components/navigation/footer'
import { ScrollProgress, ScrollToTop } from '@/components/effects/scroll-progress'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { usePathname } from 'next/navigation'

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

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
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
  )
} 