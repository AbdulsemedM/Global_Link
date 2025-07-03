"use client"

import { motion } from 'framer-motion'
import { BuildingStorefrontIcon, TruckIcon, GlobeAltIcon, CubeIcon, BeakerIcon, HomeIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'

const services = [
  {
    title: 'Import Services',
    description: 'Comprehensive import solutions including medical supplies, construction materials, vehicles, and petroleum products.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Export Services',
    description: 'Specialized in coffee and tea export, connecting Ethiopian products with global markets.',
    icon: TruckIcon,
  },
  {
    title: 'Wholesale Trade',
    description: 'Supply of agricultural products, construction materials, and grain products to businesses.',
    icon: BuildingStorefrontIcon,
  },
  {
    title: 'Construction Materials',
    description: 'Retail and wholesale of construction materials, hardware, metals, and plumbing equipment.',
    icon: HomeIcon,
  },
  {
    title: 'Medical Supplies',
    description: 'Import and distribution of human medicines, medical supplies, and equipment.',
    icon: BeakerIcon,
  },
  {
    title: 'Petroleum Products',
    description: 'Import and distribution of natural gas, petroleum products, and related materials.',
    icon: CubeIcon,
  }
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
            Comprehensive trading solutions for diverse business needs
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
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 mb-4">
                <service.icon className="w-6 h-6 text-primary dark:text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 