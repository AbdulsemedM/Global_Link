"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { BeakerIcon, TruckIcon, BuildingStorefrontIcon, GlobeAltIcon, CubeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      <ParticleNetwork isDark={isDark} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-secondary/30 via-secondary/20 to-green-600/30 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={cardVariants} className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Welcome to Angler Trading PLC
                </span>
              </motion.div>
              
              <motion.h1 variants={cardVariants} className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Transforming
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                  Global Trade
                </span>
                <span className="block mt-2">Excellence</span>
              </motion.h1>
              
              <motion.p variants={cardVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Your premier partner in international trade, connecting Ethiopian excellence with global markets through innovative solutions.
              </motion.p>

              <motion.div variants={cardVariants} className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium group"
                >
                  Explore Services
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors"
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: '150+', label: 'Products', sublabel: 'Imported' },
                { value: '50+', label: 'Countries', sublabel: 'Connected' },
                { value: '1000+', label: 'Partners', sublabel: 'Worldwide' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-secondary/5 dark:from-green-500/10 dark:to-secondary/10 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform" />
                  <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 transform rotate-2 group-hover:rotate-0 transition-transform">
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                      {stat.value}
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative grid grid-cols-2 gap-4 lg:gap-6"
          >
            {[
              { icon: BeakerIcon, label: 'Medical', color: 'from-green-400 to-green-500' },
              { icon: TruckIcon, label: 'Export', color: 'from-green-500 to-green-600' },
              { icon: CubeIcon, label: 'Petroleum', color: 'from-green-600 to-green-700' },
              { icon: BuildingStorefrontIcon, label: 'Wholesale', color: 'from-secondary to-secondary/80' },
            ].map((service, index) => (
              <motion.div
                key={service.label}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl`} />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg backdrop-blur-sm border border-white/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-green-500 group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.label}
                  </h3>
                  <div className="mt-2 h-1 w-12 bg-gradient-to-r from-green-500 to-secondary rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform" />
                </div>
              </motion.div>
            ))}

            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-secondary rounded-full opacity-20 blur-xl" />
                <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-full p-4 shadow-xl border border-white/20">
                  <Image
                    src="/images/logo.png"
                    alt="Angler Trading PLC"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 