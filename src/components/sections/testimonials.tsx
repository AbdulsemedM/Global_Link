"use client"

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '@/lib/site'
import { cn } from '@/lib/utils'
import { SectionHead } from './section-head'

export function Testimonials({ index = '05' }: { index?: string }) {
  const [active, setActive] = useState(0)
  const t = testimonials[active]
  const go = (d: number) => setActive((i) => (i + d + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHead index={index} label="Clients" title={<>In our clients&apos; words.</>} />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <figure className="lg:col-span-8 lg:col-start-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
              >
                <blockquote className="font-serif text-[28px] font-[350] leading-[1.25] tracking-[-0.015em] md:text-[40px]">
                  <span className="text-accent">“</span>
                  {t.quote}
                  <span className="text-accent">”</span>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4">
                  <span className="relative h-12 w-12 overflow-hidden bg-muted grayscale">
                    <Image src={t.image} alt="" fill sizes="48px" className="object-cover" />
                  </span>
                  <span className="leading-snug">
                    <span className="block font-medium">{t.author}</span>
                    <span className="block text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-foreground/20 transition-colors hover:border-foreground"
                >
                  <ArrowLeft strokeWidth={1.5} className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-foreground/20 transition-colors hover:border-foreground"
                >
                  <ArrowRight strokeWidth={1.5} className="h-4 w-4" />
                </button>
              </div>
              <ul className="hidden gap-8 sm:flex">
                {testimonials.map((item, i) => (
                  <li key={item.author}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={i === active}
                      className={cn(
                        'font-mono text-[11px] uppercase tracking-[0.1em] transition-colors',
                        i === active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {item.company}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs tabular-nums text-muted-foreground sm:hidden">
                {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
