"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

/** Hero photograph with a slow scroll-linked zoom-out. Reduced-motion users get a static image via MotionConfig. */
export function HeroMedia({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1])

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden bg-muted sm:aspect-[16/9] lg:aspect-[2.25/1]">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={src} alt={alt} fill loading="eager" sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover" />
      </motion.div>
    </div>
  )
}
