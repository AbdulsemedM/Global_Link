"use client"

import { motion } from 'framer-motion'
import { Navbar } from '@/components/navigation/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Stats } from '@/components/sections/stats'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/navigation/footer'
import { TruckIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'

const features = [
  {
    title: "Global Network",
    description: "Access our extensive network spanning across continents, ensuring seamless logistics solutions worldwide.",
    icon: GlobeAltIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fast Delivery",
    description: "Experience rapid and reliable delivery services with real-time tracking and updates.",
    icon: TruckIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Secure Handling",
    description: "Your cargo's safety is our priority, with comprehensive insurance and secure handling protocols.",
    icon: ShieldCheckIcon,
    color: "from-green-500 to-emerald-500",
  },
]

const testimonials = [
  {
    content: "GlobalLink has transformed our international shipping process. Their efficiency and reliability are unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp International",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "Outstanding service and professional team. They've helped us expand our business globally with ease.",
    author: "Michael Chen",
    role: "Operations Director, Asia Trade Co.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    content: "The most reliable logistics partner we've worked with. Their customs expertise is invaluable.",
    author: "Emma Williams",
    role: "Import Manager, European Distributors",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
]

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
              Why Choose GlobalLink?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our comprehensive logistics solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
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
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Trusted by businesses worldwide for reliable logistics solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-x-2 -inset-y-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
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
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
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
              Our Global Partners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Working with industry leaders to deliver excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          >
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-32 h-32 bg-white dark:bg-gray-700 rounded-xl shadow-md flex items-center justify-center p-4"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  P{index + 1}
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