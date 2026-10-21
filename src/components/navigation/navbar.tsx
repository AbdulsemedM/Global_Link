"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Button } from '@/components/ui/button'
import { LocalTime } from '@/components/ui/local-time'
import { sectors, site } from '@/lib/site'
import { cn } from '@/lib/utils'

const LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [preview, setPreview] = useState(0)
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
  }, [pathname])

  // Escape closes either menu; the mobile menu also locks page scroll
  useEffect(() => {
    if (!menuOpen && !megaOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setMegaOpen(false)
      }
    }
    if (menuOpen) document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen, megaOpen])

  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }
  const closeMegaSoon = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <>
      {/* Utility strip */}
      <div className="hidden border-b border-border md:block">
        <div className="container flex h-9 items-center justify-between font-mono text-[11px] tracking-[0.06em] text-muted-foreground">
          <p>Addis Ababa, Ethiopia · 08°58′N 38°45′E</p>
          <div className="flex items-center gap-6">
            <LocalTime />
            <a href={site.phoneHref} className="hover:text-foreground">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-foreground">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-colors duration-300',
          scrolled || megaOpen ? 'border-border bg-background/90 backdrop-blur-md' : 'border-transparent bg-background'
        )}
        onMouseLeave={closeMegaSoon}
      >
        <div className="container flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden h-full lg:block">
            <ul className="flex h-full items-center gap-10 text-[15px]">
              <li className="h-full" onMouseEnter={openMega}>
                <button
                  type="button"
                  onClick={() => setMegaOpen((v) => !v)}
                  aria-expanded={megaOpen}
                  aria-controls="mega-menu"
                  className={cn(
                    'relative flex h-full items-center gap-1.5 transition-colors hover:text-foreground',
                    isActive('/services') || megaOpen ? 'text-foreground' : 'text-foreground/70'
                  )}
                >
                  Services
                  <Plus strokeWidth={1.5} className={cn('h-3.5 w-3.5 transition-transform duration-300', megaOpen && 'rotate-45')} />
                  {isActive('/services') && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-500" />}
                </button>
              </li>
              {LINKS.map((l) => (
                <li key={l.href} className="h-full" onMouseEnter={closeMegaSoon}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? 'page' : undefined}
                    className={cn(
                      'relative flex h-full items-center transition-colors hover:text-foreground',
                      isActive(l.href) ? 'text-foreground' : 'text-foreground/70'
                    )}
                  >
                    {l.name}
                    {isActive(l.href) && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-500" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="md" className="hidden sm:inline-flex">
              <Link href="/contact">
                Request a quote <ArrowRight />
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 items-center gap-2 rounded-sm border border-foreground/15 px-4 text-sm font-medium lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* Services mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              id="mega-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={openMega}
              className="absolute inset-x-0 top-full hidden border-b border-border bg-background lg:block"
            >
              <div className="container grid grid-cols-12 gap-10 py-10">
                <div className="col-span-3">
                  <p className="label">Services</p>
                  <p className="mt-5 font-serif text-[28px] leading-tight tracking-[-0.01em]">
                    Six sectors, handled end to end by one team.
                  </p>
                  <Link href="/services" className="group mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    <span className="link-underline">All services</span> <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <ul className="col-span-5 border-t border-border">
                  {sectors.map((s, i) => (
                    <li key={s.id} className="border-b border-border">
                      <Link
                        href={`/services/${s.id}`}
                        onMouseEnter={() => setPreview(i)}
                        onFocus={() => setPreview(i)}
                        className="group grid grid-cols-[3.5rem_1fr_auto] items-center py-3.5"
                      >
                        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">{s.code}</span>
                        <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">{s.title}</span>
                        <ArrowUpRight strokeWidth={1.5} className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="col-span-4">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={preview}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <Image src={sectors[preview].image} alt="" fill sizes="30vw" className="object-cover" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <p className="mt-3 text-sm leading-snug text-muted-foreground">{sectors[preview].short}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background lg:hidden"
          >
            <div className="container flex h-[72px] shrink-0 items-center justify-between border-b border-border">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Logo />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 items-center rounded-sm border border-foreground/15 px-4 text-sm font-medium"
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile" className="container flex-1 py-8">
              <ul>
                {[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, ...LINKS].map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-border"
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive(l.href) ? 'page' : undefined}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="font-serif text-4xl tracking-[-0.02em]">{l.name}</span>
                      <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <p className="label mt-10">Sectors</p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-[15px]">
                {sectors.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.id}`} onClick={() => setMenuOpen(false)} className="text-foreground/80">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container space-y-3 border-t border-border py-6 font-mono text-xs text-muted-foreground">
              <LocalTime />
              <p>
                <a href={site.phoneHref}>{site.phone}</a> · <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <Button asChild className="mt-3 w-full font-sans">
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Request a quote <ArrowRight />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
