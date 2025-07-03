"use client"

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navigation/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/navigation/footer'
import { BeakerIcon, HomeIcon, CubeIcon, TruckIcon, GlobeAltIcon, BuildingStorefrontIcon } from '@heroicons/react/24/outline'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const features = [
  {
    title: "Import Excellence",
    description: "Comprehensive import solutions for medical supplies, construction materials, vehicles, and petroleum products.",
    icon: GlobeAltIcon,
    color: "from-green-500 to-green-600",
    delay: 0.2
  },
  {
    title: "Export Expertise",
    description: "Specialized in coffee and tea export, connecting Ethiopian products with global markets.",
    icon: TruckIcon,
    color: "from-green-600 to-green-700",
    delay: 0.4
  },
  {
    title: "Wholesale Solutions",
    description: "Supply of agricultural products, construction materials, and grain products to businesses nationwide.",
    icon: BuildingStorefrontIcon,
    color: "from-green-500 to-secondary",
    delay: 0.6
  }
]

const testimonials = [
  {
    content: "Angler Trading PLC has been instrumental in our medical supply chain. Their reliability and professionalism are outstanding.",
    author: "Dr. Sarah Ahmed",
    role: "Medical Director, Central Hospital",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "Their expertise in construction materials import has helped us complete projects on time and within budget.",
    author: "Michael Tesfaye",
    role: "Project Manager, BuildRight Construction",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The quality of agricultural products and their wholesale services have exceeded our expectations.",
    author: "Emma Bekele",
    role: "Procurement Manager, AgriGrow Ltd",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  }
]

const services = [
  { icon: BeakerIcon, name: "Medical Supplies", color: "from-green-400 to-green-500" },
  { icon: HomeIcon, name: "Construction Materials", color: "from-green-500 to-green-600" },
  { icon: CubeIcon, name: "Petroleum Products", color: "from-green-600 to-green-700" },
  { icon: TruckIcon, name: "Vehicle Import", color: "from-green-500 to-secondary" },
  { icon: GlobeAltIcon, name: "Coffee & Tea Export", color: "from-secondary to-green-600" },
  { icon: BuildingStorefrontIcon, name: "Wholesale Trade", color: "from-secondary to-secondary/80" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <ParticleNetwork isDark={isDark} />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-green-500">Angler Trading</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your trusted partner in international trade and wholesale distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Services />

      {/* Testimonials Section */}
      <section className="w-full py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
        <ParticleNetwork isDark={isDark} />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how we've helped businesses across different sectors
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute -inset-x-2 -inset-y-4 bg-gradient-to-r from-green-500/5 to-secondary/5 dark:from-green-500/10 dark:to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-gray-600 dark:text-gray-300">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for your business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className="relative bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 flex flex-col items-center justify-center aspect-square group-hover:shadow-lg transition-shadow duration-300">
                  <service.icon className="w-8 h-8 text-green-500 mb-3 group-hover:text-secondary transition-colors" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white text-center">
                    {service.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
} 