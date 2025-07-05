"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Phone",
    details: ["+251 116 123 456", "+251 116 789 012"],
    color: "from-green-400 to-green-500"
  },
  {
    icon: EnvelopeIcon,
    title: "Email",
    details: ["info@anglertrading.com", "sales@anglertrading.com"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: MapPinIcon,
    title: "Address",
    details: ["Bole Road, Addis Ababa", "Ethiopia"],
    color: "from-green-600 to-green-700"
  },
  {
    icon: BuildingOfficeIcon,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    color: "from-green-500 to-secondary"
  }
]

export default function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className="min-h-screen w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Angler Trading PLC",
              "url": "https://anglertrading.com",
              "contactPoint": contactInfo.map(info => ({
                "@type": "ContactPoint",
                "contactType": info.title.toLowerCase(),
                "telephone": info.title === "Phone" ? info.details[0] : undefined,
                "email": info.title === "Email" ? info.details[0] : undefined,
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Amharic"],
                "hoursAvailable": info.title === "Office Hours" ? info.details.join(", ") : undefined
              })),
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bole Road",
                "addressLocality": "Addis Ababa",
                "addressCountry": "Ethiopia"
              }
            }
          })
        }}
      />
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
              Get in <span className="text-green-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We&apos;re here to help and answer any questions you might have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Additional Information
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Languages Spoken:</strong> English, Amharic
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Service Area:</strong> Ethiopia and International Markets
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Business Registration:</strong> Licensed Import/Export Company
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5384387846007!2d38.7556!3d9.0106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMzguMiJOIDM4wrA0NSczMy42IkU!5e0!3m2!1sen!2sus!4v1616000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Angler Trading PLC Location"
                className="grayscale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 focus:border-transparent transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </main>
  )
} 