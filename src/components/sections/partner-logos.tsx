"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const partners = [
  { name: 'Ethiopian Airlines', logo: '/images/partners/ethiopian-airlines.svg' },
  { name: 'Commercial Bank of Ethiopia', logo: '/images/partners/cbe.svg' },
  { name: 'Ethiopian Shipping Lines', logo: '/images/partners/esl.svg' },
  { name: 'Ethiopian Investment Commission', logo: '/images/partners/eic.svg' },
  { name: 'Ethiopian Chamber of Commerce', logo: '/images/partners/ecc.svg' }
]

export function PartnerLogos() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full py-12"
    >
      <motion.div
        variants={itemVariants}
        className="text-center mb-8"
      >
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 text-green-500 dark:text-green-400 text-sm font-medium backdrop-blur-sm border border-white/20">
          Our Trusted Partners
        </span>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-xl transform group-hover:scale-105 transition-transform" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="w-full h-12 object-contain filter dark:brightness-200 dark:contrast-0 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
} 