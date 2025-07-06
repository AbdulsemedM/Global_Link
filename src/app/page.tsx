"use client"

import { motion } from 'framer-motion'
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
    content: "Angler Trading PLC has been instrumental in our medical supply chain. Their reliability, professionalism, and commitment to quality have helped us maintain the highest standards of healthcare delivery.",
    author: "Dr. Sarah Ahmed",
    role: "Medical Director",
    company: "Central Hospital",
    image: "/images/testimonials/sarah-ahmed.jpg",
    logo: "/images/testimonials/central-hospital-logo.png",
    rating: 5
  },
  {
    content: "Their expertise in construction materials import has helped us complete numerous projects on time and within budget. The quality of materials and their technical support are exceptional.",
    author: "Michael Tesfaye",
    role: "Project Manager",
    company: "BuildRight Construction",
    image: "/images/testimonials/michael-tesfaye.jpg",
    logo: "/images/testimonials/buildright-logo.png",
    rating: 5
  },
  {
    content: "The quality of agricultural products and their wholesale services have exceeded our expectations. Their commitment to timely delivery and customer service is outstanding.",
    author: "Emma Bekele",
    role: "Procurement Manager",
    company: "AgriGrow Ltd",
    image: "/images/testimonials/emma-bekele.jpg",
    logo: "/images/testimonials/agrigrow-logo.png",
    rating: 5
  },
  {
    content: "Working with Angler Trading has transformed our coffee export operations. Their market knowledge and logistics expertise have helped us reach new international markets.",
    author: "Daniel Haile",
    role: "Export Director",
    company: "Ethiopian Coffee Cooperative",
    image: "/images/testimonials/daniel-haile.jpg",
    logo: "/images/testimonials/ecc-logo.png",
    rating: 5
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
    <main className="min-h-screen w-full overflow-x-hidden" role="main" aria-label="Homepage">
      <Hero />
      
      {/* Features Section */}
      <section className="w-full py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden" aria-labelledby="features-heading">
        <ParticleNetwork isDark={isDark} />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-green-500">Angler Trading</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your trusted partner in international trade and wholesale distribution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                role="listitem"
                aria-labelledby={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`} aria-hidden="true">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 id={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
      <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
        <ParticleNetwork isDark={isDark} />
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-green-500 to-green-600 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-secondary via-secondary to-green-600 blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Client Success Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how we&apos;ve helped businesses across different sectors achieve their goals through our comprehensive trading solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={itemVariants}
                className="relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute -inset-x-4 -inset-y-4 bg-gradient-to-r from-green-500/5 to-secondary/5 dark:from-green-500/10 dark:to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <svg
                      className="absolute -top-6 -left-6 h-12 w-12 text-gray-100 dark:text-gray-700 transform -rotate-12"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-lg text-gray-600 dark:text-gray-300 italic relative z-10">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Logo */}
                    <div className="relative h-8 w-24">
                      <Image
                        src={testimonial.logo}
                        alt={testimonial.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Trusted by Companies Worldwide
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join hundreds of satisfied clients who trust us with their trading needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-12 w-32"
                >
                  <Image
                    src={`/images/partners/partner-${index}.png`}
                    alt={`Partner ${index}`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
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

      <Contact />     <Footer />
    </main>
  )
} 