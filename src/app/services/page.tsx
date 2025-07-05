"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'
import { BeakerIcon, HomeIcon, CubeIcon, TruckIcon, GlobeAltIcon, BuildingStorefrontIcon, ShieldCheckIcon, ClockIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'

const services = [
  {
    id: 'medical',
    icon: BeakerIcon,
    title: "Medical Supplies",
    description: "Import and distribution of human medicines, medical supplies, and equipment, ensuring healthcare facilities have access to quality products.",
    features: [
      "Quality-certified medical equipment",
      "Pharmaceutical supplies",
      "Healthcare consumables",
      "Medical technology solutions"
    ],
    color: "from-green-400 to-green-500"
  },
  {
    id: 'construction',
    icon: HomeIcon,
    title: "Construction Materials",
    description: "Comprehensive supply of construction materials, hardware, metals, and plumbing equipment for both retail and wholesale customers.",
    features: [
      "Building materials",
      "Hardware supplies",
      "Metal products",
      "Plumbing equipment"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    id: 'petroleum',
    icon: CubeIcon,
    title: "Petroleum Products",
    description: "Import and distribution of petroleum products, natural gas, and related materials to meet industrial and commercial needs.",
    features: [
      "Natural gas supply",
      "Petroleum products",
      "Industrial lubricants",
      "Fuel solutions"
    ],
    color: "from-green-600 to-green-700"
  },
  {
    id: 'import',
    icon: TruckIcon,
    title: "Vehicle Import",
    description: "Professional importation services for vehicles, ensuring smooth customs clearance and documentation processes.",
    features: [
      "Commercial vehicles",
      "Personal vehicles",
      "Spare parts",
      "Vehicle accessories"
    ],
    color: "from-green-500 to-secondary"
  },
  {
    id: 'export',
    icon: GlobeAltIcon,
    title: "Coffee & Tea Export",
    description: "Export of premium Ethiopian coffee and tea to international markets, showcasing the finest products from local producers.",
    features: [
      "Premium coffee beans",
      "Specialty tea varieties",
      "Direct trade partnerships",
      "Quality certification"
    ],
    color: "from-secondary to-green-600"
  },
  {
    id: 'wholesale',
    icon: BuildingStorefrontIcon,
    title: "Wholesale Trade",
    description: "Large-scale distribution of agricultural products, construction materials, and grain products to businesses nationwide.",
    features: [
      "Bulk purchasing options",
      "Competitive pricing",
      "Regular supply chain",
      "Nationwide distribution"
    ],
    color: "from-secondary to-secondary/80"
  }
]

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: "Quality Assurance",
    description: "All products undergo rigorous quality control measures",
    color: "from-green-400 to-green-500"
  },
  {
    icon: ClockIcon,
    title: "Timely Delivery",
    description: "Efficient logistics ensuring on-time delivery",
    color: "from-green-500 to-green-600"
  },
  {
    icon: DocumentCheckIcon,
    title: "Documentation Support",
    description: "Complete assistance with import/export documentation",
    color: "from-green-600 to-green-700"
  }
]

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className="min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Angler Trading PLC",
                "url": "https://anglertrading.com"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Ethiopia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": service.title + " Catalog",
                "itemListElement": service.features.map((feature, featureIndex) => ({
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": feature
                  }
                }))
              }
            }))
          })
        }}
      />
      {/* Quick Navigation */}
      <nav className="sticky top-20 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="container py-4">
          <ul className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <ParticleNetwork isDark={isDark} />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-green-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive trading solutions tailored to meet your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-20 ${index !== services.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 pb-20' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  >
                    Inquire Now
                  </motion.a>
                </div>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl`} />
                  <div className="relative aspect-square rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
                    <service.icon className="w-full h-full text-green-500" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the advantages of working with a trusted trading partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-300`} />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500/10 to-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors">
                    <benefit.icon className="w-8 h-8 text-green-500 group-hover:text-secondary transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-500 to-secondary rounded-2xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/10 mask-gradient" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Contact us today to discuss how we can support your business needs
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary/5 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 