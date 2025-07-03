"use client"

import { motion } from 'framer-motion'
import { BeakerIcon, HomeIcon, CubeIcon, TruckIcon, GlobeAltIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const services = [
  {
    icon: BeakerIcon,
    title: "Medical Supplies",
    description: "Import and distribution of medical supplies, equipment, and pharmaceuticals.",
    color: "from-green-400 to-green-500"
  },
  {
    icon: HomeIcon,
    title: "Construction Materials",
    description: "Comprehensive supply of construction materials and hardware.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: CubeIcon,
    title: "Petroleum Products",
    description: "Import and distribution of petroleum products and natural gas.",
    color: "from-green-600 to-green-700"
  },
  {
    icon: TruckIcon,
    title: "Vehicle Import",
    description: "Professional vehicle importation services and solutions.",
    color: "from-green-500 to-secondary"
  },
  {
    icon: GlobeAltIcon,
    title: "Coffee & Tea Export",
    description: "Export of premium Ethiopian coffee and tea to global markets.",
    color: "from-secondary to-green-600"
  },
  {
    icon: BuildingOfficeIcon,
    title: "Wholesale Trade",
    description: "Large-scale distribution of products to businesses nationwide.",
    color: "from-secondary to-secondary/80"
  }
]

export function Services() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors">
                    <service.icon className="w-6 h-6 text-green-500 group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 