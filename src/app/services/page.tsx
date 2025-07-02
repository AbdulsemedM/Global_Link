"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  TruckIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Import Services',
    description: 'Comprehensive import solutions tailored to your business needs.',
    icon: GlobeAltIcon,
    features: [
      'Customs clearance management',
      'Import documentation handling',
      'Duty and tax calculation',
      'Compliance verification',
    ],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Export Services',
    description: 'End-to-end export solutions for global market access.',
    icon: TruckIcon,
    features: [
      'Export documentation preparation',
      'International shipping coordination',
      'Regulatory compliance',
      'Trade finance solutions',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Customs Clearance',
    description: 'Expert customs clearance services for smooth international trade.',
    icon: DocumentCheckIcon,
    features: [
      'Customs documentation',
      'Classification services',
      'Duty optimization',
      'Compliance management',
    ],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Compliance Services',
    description: 'Ensuring your trade operations meet global standards.',
    icon: ClipboardDocumentCheckIcon,
    features: [
      'Trade compliance audits',
      'Risk assessment',
      'Training programs',
      'Documentation review',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Warehousing',
    description: 'Secure and efficient storage solutions worldwide.',
    icon: BuildingOfficeIcon,
    features: [
      'Temperature-controlled storage',
      'Inventory management',
      'Order fulfillment',
      'Distribution services',
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    title: 'Insurance & Protection',
    description: 'Comprehensive cargo protection for peace of mind.',
    icon: ShieldCheckIcon,
    features: [
      'Cargo insurance',
      'Risk management',
      'Claims handling',
      'Value protection',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
]

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Services Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <service.icon className="h-8 w-8 text-white mb-2" />
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help streamline your logistics operations
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Contact Us
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 