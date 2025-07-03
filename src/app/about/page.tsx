"use client"

import { motion } from 'framer-motion'
import { ParticleNetwork } from '@/components/effects/particle-network'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { ShieldCheckIcon, LightBulbIcon, UsersIcon, SparklesIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Integrity",
    description: "We conduct business with the highest ethical standards and transparency.",
    color: "from-green-400 to-green-500"
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description: "Continuously seeking better ways to serve our clients and partners.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: UsersIcon,
    title: "Partnership",
    description: "Building lasting relationships with clients, suppliers, and communities.",
    color: "from-green-600 to-green-700"
  },
  {
    icon: SparklesIcon,
    title: "Excellence",
    description: "Committed to delivering superior quality in every aspect of our operations.",
    color: "from-green-500 to-secondary"
  },
  {
    icon: GlobeAltIcon,
    title: "Global Reach",
    description: "Connecting Ethiopian products with international markets.",
    color: "from-secondary to-green-600"
  },
  {
    icon: ScaleIcon,
    title: "Sustainability",
    description: "Promoting responsible trade practices and environmental stewardship.",
    color: "from-secondary to-secondary/80"
  }
]

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Established with a vision to transform international trade."
  },
  {
    year: "2017",
    title: "Export Excellence",
    description: "Became a leading exporter of Ethiopian coffee and tea."
  },
  {
    year: "2019",
    title: "Market Expansion",
    description: "Expanded into construction materials and medical supplies."
  },
  {
    year: "2021",
    title: "Network Growth",
    description: "Established partnerships across 50+ countries."
  },
  {
    year: "2023",
    title: "Innovation Leader",
    description: "Pioneered new trade routes and supply chain solutions."
  }
]

export default function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <main className="min-h-screen w-full">
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
              About <span className="text-green-500">Angler Trading</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A leading force in international trade, connecting Ethiopian excellence with global markets through innovative solutions and trusted partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
                <SparklesIcon className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To facilitate seamless international trade by providing comprehensive import, export, and wholesale solutions while maintaining the highest standards of quality and service excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <LightBulbIcon className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To be the premier trading company in Ethiopia, recognized globally for our commitment to excellence, innovation, and sustainable business practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide us in delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors">
                      <value.icon className="w-6 h-6 text-green-500 group-hover:text-secondary transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A timeline of growth and achievement
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 to-secondary" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-green-500 font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-secondary" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the team driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add team members here */}
          </div>
        </div>
      </section>
    </main>
  )
} 