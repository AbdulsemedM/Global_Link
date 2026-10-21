import Link from 'next/link'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { Button } from '@/components/ui/button'
import { LocalTime } from '@/components/ui/local-time'
import { nav, sectors, site } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="dark bg-ink text-paper">
      {/* Closing call to action on the brand forest band */}
      <div className="bg-forest">
        <div className="container grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="label text-brand-300">Start a conversation</p>
            <h2 className="display-2 mt-6">
              Tell us what needs to move. <em>We&apos;ll handle the rest.</em>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4">
            <p className="text-paper/75">
              Share the product, quantity and destination. A trade specialist replies within one business day with
              options and an itemised quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">
                  Request a quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline-light">
                <a href={site.phoneHref}>Call {site.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <address className="mt-8 not-italic leading-relaxed text-paper/65">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.country}
            </address>
            <p className="mt-6 font-mono text-xs text-paper/60">
              <LocalTime />
            </p>
          </div>

          <FooterColumn title="Services" className="lg:col-span-3">
            {sectors.map((s) => (
              <FooterLink key={s.id} href={`/services/${s.id}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company" className="lg:col-span-2">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="lg:col-span-3">
            <li>
              <a href={`mailto:${site.email}`} className="link-underline text-paper/75 hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="link-underline text-paper/75 hover:text-paper">
                {site.phone}
              </a>
            </li>
            {site.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 font-mono text-xs text-paper/60">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/15 py-8 font-mono text-[11px] tracking-[0.06em] text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {site.social.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#main" className="inline-flex items-center gap-2 hover:text-paper">
            Back to top <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h3 className="label text-paper/60">{title}</h3>
      <ul className="mt-6 space-y-3 text-[15px]">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-underline text-paper/75 transition-colors hover:text-paper">
        {children}
      </Link>
    </li>
  )
}
