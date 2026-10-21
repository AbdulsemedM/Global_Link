import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/sections/page-header'
import { Process } from '@/components/sections/process'
import { Faq } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'
import { Reveal } from '@/components/ui/reveal'
import { breadcrumbJsonLd, faqJsonLd, absoluteUrl, organizationRef, pageMetadata } from '@/lib/seo'
import { faqs, sectors } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata = pageMetadata({
  title: 'Produce Export & Agri-Import Services',
  description:
    'Ethiopian fresh vegetables, fruit and pulses exported to Djibouti, Somalia, Kenya and Pakistan; crop-protection products and trucks imported.',
  path: '/services',
  keywords: ['fresh produce exporter Ethiopia', 'Ethiopian vegetables export', 'pulses exporter Ethiopia', 'export to Djibouti', 'trading company Addis Ababa'],
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          faqJsonLd(faqs),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Angler Trading services',
            itemListElement: sectors.map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: absoluteUrl(`/services/${s.id}`),
              name: s.title,
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Services',
            url: absoluteUrl('/services'),
            about: organizationRef,
          },
        ]}
      />

      <PageHeader
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
        label="Services"
        title={
          <>
            Five trade lines. <em>One standard of care.</em>
          </>
        }
        intro="Three export lines from Ethiopian farms and two import lines that support them — each with its own sourcing network and paperwork know-how, and the same commitment to getting it right."
        aside={
          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.1em]">
            {sectors.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {s.code} — {s.title}
                </a>
              </li>
            ))}
          </ul>
        }
      />

      <section aria-label="Sectors" className="pb-24 md:pb-32">
        <div className="container">
          {sectors.map((s, i) => (
            <article key={s.id} id={s.id} className="scroll-mt-28 border-t border-border py-14 md:py-20">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
                <Reveal className={cn('lg:col-span-5', i % 2 === 1 && 'lg:order-last lg:col-start-8')}>
                  <Link href={`/services/${s.id}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={s.image}
                        alt={s.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={0.08} className={cn('lg:col-span-6', i % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1')}>
                  <p className="label">
                    <span className="text-foreground">{String(i + 1).padStart(2, '0')}</span> · {s.code} · {s.kind}
                  </p>
                  <h2 className="display-3 mt-5">
                    <Link href={`/services/${s.id}`} className="hover:text-accent">
                      {s.title}
                    </Link>
                  </h2>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{s.description}</p>
                  <ul className="mt-8 border-t border-border">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex gap-4 border-b border-border py-3 text-[15px]">
                        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-foreground" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
                    <Link href={`/services/${s.id}`} className="group inline-flex items-center gap-2">
                      <span className="link-underline">{s.title} in detail</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link href={`/contact?sector=${s.id}`} className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                      <span className="link-underline">Request a quote</span>
                    </Link>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <Faq faqs={faqs} />
    </>
  )
}
