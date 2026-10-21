import Link from 'next/link'
import { ArrowRight, ArrowUp } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { Button } from '@/components/ui/button'
import { LocalTime } from '@/components/ui/local-time'
import { nav, sectors, site } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      {/* Closing call to action: an inset forest card, so the page flows into the footer instead of switching colour */}
      <div className="container pb-16 pt-8 md:pb-24">
        <div className="dark relative overflow-hidden rounded-3xl bg-forest px-6 py-14 text-paper sm:px-10 md:px-14 md:py-20">
          <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-24 h-[460px] w-[460px] rounded-full bg-brand-500/15 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-12">
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
      </div>

      <div className="border-t border-border bg-card">
        <div className="container">
          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Logo />
              <address className="mt-8 not-italic leading-relaxed text-muted-foreground">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.country}
              </address>
              <p className="mt-6 font-mono text-xs text-muted-foreground">
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
                <a href={`mailto:${site.email}`} className="link-underline text-foreground/80 hover:text-foreground">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="link-underline text-foreground/80 hover:text-foreground">
                  {site.phone}
                </a>
              </li>
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4 font-mono text-xs text-muted-foreground">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </FooterColumn>
          </div>

          <div className="flex flex-col gap-4 border-t border-border py-8 font-mono text-[11px] tracking-[0.06em] text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-6">
              {site.social.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#main" className="inline-flex items-center gap-2 hover:text-foreground">
              Back to top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h3 className="label text-foreground">{title}</h3>
      <ul className="mt-6 space-y-3 text-[15px]">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="link-underline text-foreground/80 transition-colors hover:text-foreground">
        {children}
      </Link>
    </li>
  )
}
