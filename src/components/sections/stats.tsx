"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ParticleNetwork } from '../effects/particle-network'
import { useTheme } from 'next-themes'

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Countries Served',
    description: 'Global reach across continents',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    value: 500000,
    suffix: '+',
    label: 'Shipments',
    description: 'Successfully delivered',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    value: 99,
    suffix: '%',
    label: 'Success Rate',
    description: 'Consistent performance',
    gradient: 'from-orange-500 to-yellow-500',
  },
]

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = '', duration = 2 }: CounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isInView) {
      let current = 0;
      const step = value / (duration * 60);
      interval = setInterval(() => {
        current += step;
        if (current > value) {
          current = value;
          if (interval) clearInterval(interval);
        }
        if (counterRef.current) {
          counterRef.current.textContent = Math.floor(current).toString() + suffix;
        }
      }, 1000 / 60);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView, value, duration, suffix]);

  return (
    <div ref={counterRef} className="text-4xl sm:text-5xl font-bold">
      0{suffix}
    </div>
  );
}

export function Stats() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="w-full py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
      <ParticleNetwork isDark={isDark} />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Delivering excellence in international logistics through numbers that speak for themselves
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
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                  <div className="text-2xl font-bold text-white">
                    {stat.suffix}
                  </div>
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120%] overflow-hidden">
            <div className="absolute -inset-x-20 top-0 h-[500px] rounded-[100%] bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
} 