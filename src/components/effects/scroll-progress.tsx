"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollProgressProps {
  color?: string
  height?: number
  showPercentage?: boolean
}

export function ScrollProgress({ 
  color = '#3B82F6', 
  height = 4,
  showPercentage = false 
}: ScrollProgressProps) {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 origin-left"
        style={{
          scaleX,
          backgroundColor: color,
          height
        }}
      />
      {showPercentage && (
        <motion.div
          className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1.5 text-sm font-medium z-50"
          style={{
            opacity: scrollYProgress
          }}
        >
          <motion.span>{Math.round(scrollYProgress.get() * 100)}%</motion.span>
        </motion.div>
      )}
    </>
  )
}

interface ScrollToTopProps {
  showAfter?: number
  color?: string
  size?: number
}

export function ScrollToTop({ 
  showAfter = 400,
  color = '#3B82F6',
  size = 40 
}: ScrollToTopProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > showAfter)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfter])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!show) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 rounded-full shadow-lg z-50 flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      style={{
        width: size,
        height: size
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color}
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  )
}

interface ScrollIndicatorProps {
  color?: string
  size?: number
}

export function ScrollIndicator({ 
  color = '#3B82F6',
  size = 40 
}: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      style={{
        width: size,
        height: size * 1.5
      }}
    >
      <motion.div
        className="w-full h-full border-2 rounded-full flex items-center justify-center"
        style={{ borderColor: color }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            y: [0, size / 2, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

interface ScrollProgressCircleProps {
  color?: string
  size?: number
  strokeWidth?: number
}

export function ScrollProgressCircle({ 
  color = '#3B82F6',
  size = 60,
  strokeWidth = 4 
}: ScrollProgressCircleProps) {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.svg
      className="fixed bottom-4 right-4 z-50"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
    >
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-gray-200 dark:text-gray-700"
      />
      {/* Progress circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray="283"
        style={{
          pathLength: progress
        }}
        className="rotate-[-90deg] origin-center"
      />
      {/* Percentage text */}
      <motion.text
        x="50"
        y="50"
        textAnchor="middle"
        dy="0.3em"
        className="text-sm font-medium"
        style={{ fill: color }}
      >
        {Math.round(scrollYProgress.get() * 100)}%
      </motion.text>
    </motion.svg>
  )
} 