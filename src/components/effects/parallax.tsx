"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

interface ParallaxProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function ParallaxContainer({ children, offset = 50, className = '' }: ParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: springY }}>
        {children}
      </motion.div>
    </div>
  )
}

interface ParallaxImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  offset?: number
}

export function ParallaxImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  offset = 100 
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: springY,
          scale,
          opacity
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  )
}

interface ParallaxTextProps {
  children: React.ReactNode
  className?: string
  offset?: number
  delay?: number
}

export function ParallaxText({ 
  children, 
  className = '',
  offset = 50,
  delay = 0 
}: ParallaxTextProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{
        y: springY,
        opacity
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxGridProps {
  children: React.ReactNode[]
  className?: string
  columns?: number
  gap?: number
  stagger?: number
}

export function ParallaxGrid({ 
  children, 
  className = '',
  columns = 3,
  gap = 8,
  stagger = 0.1 
}: ParallaxGridProps) {
  return (
    <div 
      className={`grid gap-${gap} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
      }}
    >
      {children.map((child, index) => (
        <ParallaxContainer
          key={index}
          offset={50}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * stagger }}
          >
            {child}
          </motion.div>
        </ParallaxContainer>
      ))}
    </div>
  )
}

interface ParallaxBackgroundProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxBackground({ 
  children, 
  className = '',
  speed = 0.5 
}: ParallaxBackgroundProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          opacity,
          scale
        }}
        className="absolute inset-0 w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

interface ParallaxRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export function ParallaxReveal({ 
  children, 
  className = '',
  direction = 'up',
  delay = 0 
}: ParallaxRevealProps) {
  const directionMap = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { x: 100, y: 0 },
    right: { x: -100, y: 0 }
  }

  const initial = directionMap[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        damping: 25,
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 