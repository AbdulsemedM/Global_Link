"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="Angler Trading PLC"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Angler Trading
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="relative">
                      {item.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
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
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="px-3 py-2"
              >
                <button
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                    setIsOpen(false)
                  }}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                >
                  {theme === 'dark' ? (
                    <>
                      <SunIcon className="h-5 w-5" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="h-5 w-5" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 