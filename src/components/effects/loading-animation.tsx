"use client"

import { motion } from 'framer-motion'

interface LoadingAnimationProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

const sizes = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}

export function LoadingAnimation({ size = 'md', color = 'currentColor', className = '' }: LoadingAnimationProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} relative`}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: color,
            borderRightColor: color
          }}
          animate={{
            rotate: 360,
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  )
}

export function LoadingDots({ size = 'md', color = 'currentColor', className = '' }: LoadingAnimationProps) {
  const dotSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  const containerSize = {
    sm: 'space-x-1',
    md: 'space-x-2',
    lg: 'space-x-3'
  }

  return (
    <div className={`flex items-center ${containerSize[size]} ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSize[size]} rounded-full`}
          style={{ backgroundColor: color }}
          animate={{
            y: ['0%', '-50%', '0%']
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export function LoadingPulse({ size = 'md', color = 'currentColor', className = '' }: LoadingAnimationProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} rounded-full`}
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export function LoadingBar({ size = 'md', color = 'currentColor', className = '' }: LoadingAnimationProps) {
  const barHeight = {
    sm: 'h-1',
    md: 'h-1.5',
    lg: 'h-2'
  }

  return (
    <div className={`w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 ${barHeight[size]} ${className}`}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ x: '-100%' }}
        animate={{
          x: '100%'
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export function LoadingRing({ size = 'md', color = 'currentColor', className = '' }: LoadingAnimationProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizes[size]} rounded-full border-2 border-gray-200 dark:border-gray-700`}
        style={{ borderTopColor: color }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
} 