"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Medical', href: '/services#medical-supplies' },
      { name: 'Construction', href: '/services#construction-materials' },
      { name: 'Petroleum', href: '/services#petroleum-products' },
     { name: 'Coffee and Tea', href: '/services#coffee-tea-export' },
      { name: 'Wholesale', href: '/services#wholesale-trade' },
    ]
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark
          ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-[#AEEA00]/10'
          : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="flex items-center">
                <Image
                  src="/images/icon.png"
                  alt="Angler Trading Logo"
                  width={80}
                  height={80}
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ objectFit: 'contain', background: 'transparent' }}
                  priority
                />
              </div>
              <div>
                <span className={`text-2xl font-bold transition-colors ${
                  isDark ? "text-white group-hover:text-[#AEEA00]" : "text-gray-900 group-hover:text-[#85B200]"
                }`}>
                  Angler Trading
                </span>
                <div className={`text-base font-medium ${isDark ? "text-[#AEEA00]" : "text-[#658A00]"}`}>
                  Import • Export • Wholesale
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                  onHoverStart={() => setActiveSubmenu(item.name)}
                  onHoverEnd={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 transition-all duration-300 py-2 px-3 rounded-lg backdrop-blur-sm border border-transparent ${
                      isDark
                        ? "text-gray-300 hover:text-white hover:bg-[#AEEA00]/10 hover:border-[#AEEA00]/20"
                        : "text-gray-700 hover:text-gray-900 hover:bg-[#AEEA00]/10 hover:border-[#AEEA00]/30"
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      } ${isDark ? "text-[#AEEA00]" : "text-[#658A00]"}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-0 mt-2 w-48 backdrop-blur-md rounded-lg shadow-xl border ${
                            isDark
                              ? "bg-black/95 shadow-[#AEEA00]/10 border-[#AEEA00]/20"
                              : "bg-white/95 shadow-black/10 border-[#AEEA00]/30"
                          }`}
                        >
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isDark
                                    ? "text-gray-300 hover:text-white hover:bg-[#AEEA00]/10"
                                    : "text-gray-700 hover:text-gray-900 hover:bg-[#AEEA00]/10"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Animated Underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r shadow-sm ${
                      isDark
                        ? "from-[#AEEA00] to-[#95C700] shadow-[#AEEA00]/50"
                        : "from-[#85B200] to-[#658A00] shadow-[#85B200]/50"
                    }`}
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg backdrop-blur-sm transition-all duration-300 border ${
                isDark
                  ? "bg-[#AEEA00]/10 hover:bg-[#AEEA00]/20 border-[#AEEA00]/20"
                  : "bg-[#AEEA00]/10 hover:bg-[#AEEA00]/20 border-[#AEEA00]/30"
              }`}
            >
              {isOpen ? (
                <XMarkIcon className={`h-6 w-6 ${isDark ? "text-[#AEEA00]" : "text-[#658A00]"}`} />
              ) : (
                <Bars3Icon className={`h-6 w-6 ${isDark ? "text-[#AEEA00]" : "text-[#658A00]"}`} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t ${
              isDark
                ? "bg-black/95 border-[#AEEA00]/20"
                : "bg-white/95 border-[#AEEA00]/30"
            }`}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isDark
                          ? "text-gray-300 hover:text-white hover:bg-[#AEEA00]/10"
                          : "text-gray-700 hover:text-gray-900 hover:bg-[#AEEA00]/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 text-sm transition-colors ${
                            isDark
                              ? "text-gray-400 hover:text-white hover:bg-[#AEEA00]/10"
                              : "text-gray-600 hover:text-gray-900 hover:bg-[#AEEA00]/10"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </nav>
  )
} 