"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: "Years of Experience", value: "8+" },
  { label: "Countries Served", value: "50+" },
  { label: "Successful Projects", value: "1000+" },
  { label: "Client Satisfaction", value: "99%" }
]

const features = [
  {
    title: "Import Excellence",
    description: "Medical supplies, construction materials, vehicles, and petroleum products.",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Export Expertise",
    description: "Premium Ethiopian coffee and tea for global markets.",
    color: "from-green-600 to-green-700"
  },
  {
    title: "Wholesale Solutions",
    description: "Agricultural products, construction materials, and grain products.",
    color: "from-green-500 to-secondary"
  }
]

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative py-20 overflow-hidden">
      <ParticleNetwork isDark={isDark} />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Trusted Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-secondary">
                Global Trade
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Connecting Ethiopian excellence with international markets through innovative trade solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-secondary text-white font-medium rounded-lg inline-flex items-center group"
                >
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg inline-flex items-center group border border-gray-200 dark:border-gray-700"
                >
                  Our Services
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg relative group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 