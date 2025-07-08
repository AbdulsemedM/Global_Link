"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' }
]

const services = [
  { name: 'Import Services', href: '/services#import' },
  { name: 'Export Services', href: '/services#export' },
  { name: 'Wholesale', href: '/services#wholesale' },
  { name: 'Medical Supplies', href: '/services#medical' },
  { name: 'Construction Materials', href: '/services#construction' }
]

const contact = [
  { label: 'Phone', value: '+251 116 123 456' },
  { label: 'Email', value: 'info@anglertrading.com' },
  { label: 'Address', value: 'Bole Road, Addis Ababa, Ethiopia' }
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Angler Trading</h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner in international trade and logistics. Connecting businesses worldwide with reliable and efficient solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contact.map((item) => (
              <div key={item.label} className="text-center">
                <span className="text-gray-400">{item.label}: </span>
                <span className="text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Angler Trading PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 