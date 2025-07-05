"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring } from 'framer-motion'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'
import { ChartBarIcon, GlobeAltIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global reach across continents, connecting businesses worldwide through our extensive network.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: GlobeAltIcon,
    image: '/images/stats/global-reach.jpg'
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide trust us with their trading needs, from small businesses to large enterprises.',
    gradient: 'from-purple-500 to-pink-500',
    icon: ChartBarIcon,
    image: '/images/stats/happy-clients.jpg'
  },
  {
    value: 500000,
    suffix: '+',
    label: 'Shipments',
    description: 'Successfully delivered shipments across the globe, ensuring timely and secure transportation.',
    gradient: 'from-green-500 to-emerald-500',
    icon: TruckIcon,
    image: '/images/stats/shipments.jpg'
  },
  {
    value: 99,
    suffix: '%',
    label: 'Success Rate',
    description: 'Consistent performance in meeting client expectations and delivering quality service.',
    gradient: 'from-orange-500 to-yellow-500',
    icon: CheckCircleIcon,
    image: '/images/stats/success-rate.jpg'
  },
]

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-10% 0px -10% 0px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    if (!counterRef.current) return;
    
    return springValue.onChange(latest => {
      if (counterRef.current) {
        counterRef.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div ref={counterRef} className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
      0{suffix}
    </div>
  );
}

export function Stats() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden relative">
      <ParticleNetwork isDark={isDark} />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -right-1/4 top-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -left-1/4 bottom-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-3xl"
        />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Global Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Numbers That Matter
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our achievements. These numbers represent our global impact and dedication to delivering outstanding service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                {/* Stat Header with Icon */}
                <div className={`relative h-32 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-90`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <stat.icon className="w-16 h-16 text-white/90" />
                  </div>
                </div>

                {/* Stat Content */}
                <div className="p-6">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-1 bg-gradient-to-r ${stat.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ISO Certified",
                description: "Meeting international quality standards in all operations",
                icon: "🏆"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance for your trading needs",
                icon: "⏰"
              },
              {
                title: "Sustainable Practices",
                description: "Committed to environmental responsibility",
                icon: "🌱"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl"
              >
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 