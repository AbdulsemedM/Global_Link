"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { BeakerIcon, TruckIcon, BuildingStorefrontIcon, CubeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/world-map.svg"
          alt="World Map Background"
          fill
          className={`object-cover opacity-5 ${isDark ? 'invert' : ''}`}
          priority
        />
        <ParticleNetwork isDark={isDark} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-secondary/30 via-secondary/20 to-green-600/30 blur-3xl"
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - Spans 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={cardVariants} className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                  Welcome to Angler Trading PLC
                </span>
              </motion.div>
              
              <motion.h1 
                variants={cardVariants} 
                className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Connecting
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-green-600 to-secondary animate-gradient">
                  Global Markets
                </span>
                <span className="block mt-2">With Excellence</span>
              </motion.h1>
              
              <motion.p variants={cardVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Your premier partner in international trade, bridging Ethiopian excellence with global markets through innovative solutions and unparalleled service.
              </motion.p>

              <motion.div variants={cardVariants} className="flex flex-wrap gap-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/services"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-500/25 group"
                >
                  Explore Our Services
                  <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-secondary text-secondary font-medium hover:bg-secondary/5 transition-colors"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { value: '150+', label: 'Products', sublabel: 'Imported & Exported', icon: CubeIcon },
                { value: '50+', label: 'Countries', sublabel: 'Global Network', icon: TruckIcon },
                { value: '1000+', label: 'Partners', sublabel: 'Worldwide', icon: BuildingStorefrontIcon },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-secondary/10 rounded-xl transform group-hover:scale-105 transition-transform" />
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <stat.icon className="w-8 h-8 text-green-500 mb-4" />
                    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                      {stat.value}
                    </p>
                    <p className="text-base font-medium text-gray-900 dark:text-white mt-1">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.sublabel}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side Feature Cards - Spans 5 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative grid grid-cols-2 gap-4 lg:gap-6"
          >
            {[
              { icon: BeakerIcon, label: 'Medical Supplies', desc: 'Quality Healthcare Products', color: 'from-green-400 to-green-500' },
              { icon: TruckIcon, label: 'Export Services', desc: 'Global Market Access', color: 'from-green-500 to-green-600' },
              { icon: CubeIcon, label: 'Petroleum Products', desc: 'Energy Solutions', color: 'from-green-600 to-green-700' },
              { icon: BuildingStorefrontIcon, label: 'Wholesale Trade', desc: 'Business Solutions', color: 'from-secondary to-secondary/80' },
            ].map((service, index) => (
              <motion.div
                key={service.label}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative"
                style={{ zIndex: 10 - index }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl`} />
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-green-500 group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {service.desc}
                  </p>
                  <div className="mt-3 h-1 w-12 bg-gradient-to-r from-green-500 to-secondary rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform" />
                </div>
              </motion.div>
            ))}

            {/* Center Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-secondary rounded-full opacity-20 blur-xl animate-pulse" />
                <div className="relative w-full h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-6 shadow-xl border border-white/20">
                  <Image
                    src="/images/logo.png"
                    alt="Angler Trading PLC"
                    fill
                    className="object-contain p-3"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 