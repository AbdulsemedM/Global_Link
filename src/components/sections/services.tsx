"use client"

import { motion } from 'framer-motion'
import { BuildingStorefrontIcon, TruckIcon, GlobeAltIcon, CubeIcon, BeakerIcon, HomeIcon } from '@heroicons/react/24/outline'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const services = [
  {
    title: 'Import Services',
    description: 'Comprehensive import solutions including medical supplies, construction materials, vehicles, and petroleum products.',
    longDescription: 'We facilitate seamless import operations with our extensive network of global suppliers. Our expertise covers a wide range of products including medical supplies, construction materials, vehicles, and petroleum products. We handle all aspects of the import process, from sourcing to delivery.',
    icon: GlobeAltIcon,
    image: '/images/services/import-export.svg',
    features: ['Global Supplier Network', 'Custom Clearance', 'Quality Assurance', 'Logistics Management'],
    color: 'from-blue-500 via-purple-500 to-pink-500'
  },
  {
    title: 'Export Services',
    description: 'Specialized in coffee and tea export, connecting Ethiopian products with global markets.',
    longDescription: 'We bridge Ethiopian excellence with international markets, specializing in the export of premium coffee, tea, and other agricultural products. Our export services ensure that the finest Ethiopian products reach global consumers while maintaining their exceptional quality.',
    icon: TruckIcon,
    image: '/images/services/import-export.svg',
    features: ['Market Access', 'Quality Control', 'Export Documentation', 'Shipping Solutions'],
    color: 'from-green-500 via-teal-500 to-blue-500'
  },
  {
    title: 'Wholesale Trade',
    description: 'Supply of agricultural products, construction materials, and grain products to businesses.',
    longDescription: 'Our wholesale division provides businesses with reliable access to high-quality products at competitive prices. We maintain extensive inventory of agricultural products, construction materials, and grain products, ensuring consistent supply for our business partners.',
    icon: BuildingStorefrontIcon,
    image: '/images/services/wholesale.svg',
    features: ['Bulk Supply', 'Competitive Pricing', 'Regular Supply', 'Business Support'],
    color: 'from-orange-500 via-amber-500 to-yellow-500'
  },
  {
    title: 'Construction Materials',
    description: 'Retail and wholesale of construction materials, hardware, metals, and plumbing equipment.',
    longDescription: 'We are a leading supplier of construction materials, offering both retail and wholesale solutions. Our comprehensive range includes hardware, metals, plumbing equipment, and other essential construction supplies, backed by technical expertise and reliable delivery.',
    icon: HomeIcon,
    image: '/images/services/construction.svg',
    features: ['Quality Products', 'Technical Support', 'Delivery Service', 'Project Consultation'],
    color: 'from-cyan-500 via-blue-500 to-indigo-500'
  },
  {
    title: 'Medical Supplies',
    description: 'Import and distribution of human medicines, medical supplies, and equipment.',
    longDescription: 'We are committed to supporting healthcare providers with reliable access to quality medical supplies. Our range includes human medicines, medical equipment, and essential healthcare supplies, all meeting international quality standards and regulatory requirements.',
    icon: BeakerIcon,
    image: '/images/services/medical.svg',
    features: ['Quality Assurance', 'Regulatory Compliance', 'Emergency Supply', 'Healthcare Support'],
    color: 'from-red-500 via-rose-500 to-pink-500'
  },
  {
    title: 'Petroleum Products',
    description: 'Import and distribution of natural gas, petroleum products, and related materials.',
    longDescription: 'Our energy division specializes in the import and distribution of petroleum products, natural gas, and related materials. We ensure reliable supply chains and maintain the highest safety standards in handling and distribution of energy products.',
    icon: CubeIcon,
    image: '/images/services/petroleum.svg',
    features: ['Safety Standards', 'Supply Chain', 'Storage Solutions', 'Distribution Network'],
    color: 'from-violet-500 via-purple-500 to-fuchsia-500'
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
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <ParticleNetwork isDark={isDark} />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-rose-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 text-green-500 dark:text-green-400 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mr-2 animate-pulse" />
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Comprehensive Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
              Global Trade Excellence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            We provide end-to-end trading solutions that connect businesses with global opportunities,
            ensuring quality, reliability, and excellence in every transaction.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90 mix-blend-multiply`} />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm p-1.5 mr-3">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.longDescription}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <a
                    href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white text-sm font-medium group`}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 