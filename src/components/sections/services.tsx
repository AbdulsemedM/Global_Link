"use client"

import { motion } from 'framer-motion'
import { TruckIcon, GlobeAltIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'

const services = [
  {
    title: 'Import Services',
    description: 'Streamlined import solutions with customs clearance, documentation, and logistics management.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Export Services',
    description: 'End-to-end export handling including documentation, compliance, and international shipping.',
    icon: TruckIcon,
  },
  {
    title: 'Customs Clearance',
    description: 'Expert customs clearance services ensuring smooth and compliant international trade.',
    icon: DocumentCheckIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <ParticleNetwork isDark={isDark} />
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Comprehensive logistics solutions tailored to your business needs
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <service.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 