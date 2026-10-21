"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { sectors } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Indexed list of sectors; on desktop the hovered row drives a large sticky photograph. */
export function SectorIndex() {
  const [active, setActive] = useState(0)
  const current = sectors[active]

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
      <ol className="border-t border-border lg:col-span-7">
        {sectors.map((s, i) => (
          <li key={s.id} className="border-b border-border">
            <Link
              href={`/services/${s.id}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[3rem_1fr_auto] items-start gap-x-4 py-7 md:grid-cols-[4.5rem_1fr_auto] md:py-8"
            >
              <span className={cn('pt-2 font-mono text-[11px] tracking-[0.1em] transition-colors', active === i ? 'lg:text-accent' : 'text-muted-foreground')}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <span
                  className={cn(
                    'block font-serif text-[28px] leading-tight tracking-[-0.015em] transition-colors duration-300 md:text-[40px]',
                    active === i ? 'lg:text-foreground' : 'lg:text-foreground/55'
                  )}
                >
                  {s.title}
                </span>
                <span className="mt-2 block max-w-md text-[15px] leading-relaxed text-muted-foreground lg:hidden">{s.short}</span>
                <span className="relative mt-5 block aspect-[16/9] overflow-hidden rounded-2xl bg-muted lg:hidden">
                  <Image src={s.image} alt="" fill sizes="(min-width: 640px) 80vw, 100vw" className="object-cover" />
                </span>
              </span>
              <span className="flex items-center gap-4 pt-3">
                <span className="label hidden md:block">{s.kind}</span>
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
            <AnimatePresence initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image src={current.image} alt={current.imageAlt} fill sizes="40vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 border-t border-border pt-4">
            <span className="label pt-1">
              {current.code} · {current.kind}
            </span>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{current.short}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
