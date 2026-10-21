import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/sections/page-header'
import { SectionHead } from '@/components/sections/section-head'
import { Process } from '@/components/sections/process'
import { Faq } from '@/components/sections/faq'
import { JsonLd } from '@/components/seo/json-ld'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { absoluteUrl, breadcrumbJsonLd, faqJsonLd, organizationRef, pageMetadata } from '@/lib/seo'
import { sectors, site } from '@/lib/site'

type Params = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params
  const sector = sectors.find((s) => s.id === slug)
  if (!sector) return {}
  return pageMetadata({
    title: sector.seoTitle,
    description: sector.seoDescription,
    path: `/services/${sector.id}`,
    keywords: sector.keywords,
    image: `/og/${sector.id}.png`,
  })
}

export default async function SectorPage({ params }: Params) {
  const { slug } = await params
  const sector = sectors.find((s) => s.id === slug)
  if (!sector) notFound()

  const index = sectors.indexOf(sector)
  const related = [1, 2, 3].map((n) => sectors[(index + n) % sectors.length])
  const quoteHref = `/contact?sector=${sector.id}`
  const facts = [
    ['Reference', `${sector.code}-${String(index + 1).padStart(2, '0')}`],
    ['Service', sector.kind],
    ['Coverage', sector.kind === 'Export' ? 'Middle East, Europe & Asia' : 'Nationwide, Ethiopia'],
    ['Route', sector.kind === 'Wholesale' ? 'Domestic distribution network' : 'Via the Djibouti corridor'],
    ['Response', 'Within one business day'],
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: sector.title, path: `/services/${sector.id}` },
          ]),
          faqJsonLd(sector.faqs),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: sector.title,
            serviceType: `${sector.kind} — ${sector.title}`,
            description: sector.seoDescription,
            url: absoluteUrl(`/services/${sector.id}`),
            image: absoluteUrl(sector.image),
            provider: organizationRef,
            areaServed: sector.kind === 'Export' ? ['Middle East', 'Europe', 'Asia'] : { '@type': 'Country', name: 'Ethiopia' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: `${sector.title} products`,
              itemListElement: sector.products.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name: p } })),
            },
          },
        ]}
      />

      <PageHeader
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: sector.title, href: `/services/${sector.id}` },
        ]}
        label={`${sector.code} · ${sector.kind}`}
        title={sector.title}
        intro={sector.description}
        aside={
          <div className="grid gap-10 border-t border-border pt-8 md:grid-cols-9">
            <dl className="md:col-span-5">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] border-b border-border py-2.5 text-[15px]">
                  <dt className="label pt-1">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-3 md:col-span-4">
              <Button asChild>
                <Link href={quoteHref}>
                  Request a quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={site.phoneHref}>Call {site.phone}</a>
              </Button>
            </div>
          </div>
        }
        image={{ src: sector.image, alt: sector.imageAlt, caption: `FIG. — ${sector.title}` }}
      />

      <section className="pb-24 md:pb-32">
        <div className="container">
          <SectionHead
            index="01"
            label="Scope"
            title={
              <>
                What we handle, <em>start to finish.</em>
              </>
            }
          />
          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
            <ol className="border-t border-border lg:col-span-5 lg:col-start-4">
              {sector.capabilities.map((c, i) => (
                <li key={c} className="grid grid-cols-[3rem_1fr] border-b border-border py-5">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-xl tracking-[-0.01em]">{c}</span>
                </li>
              ))}
            </ol>
            <Reveal className="lg:col-span-4">
              <h3 className="label text-foreground">Typical products</h3>
              <ul className="mt-5 border-t border-border">
                {sector.products.map((p) => (
                  <li key={p} className="flex justify-between border-b border-border py-3 text-[15px]">
                    {p}
                    <span className="font-mono text-[11px] text-muted-foreground">{sector.code}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Need something not listed? Send the specification and we&apos;ll source it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Process index="02" />
      <Faq faqs={sector.faqs} index="03" title={`${sector.title}: common questions.`} />

      <section aria-labelledby="related-heading" className="pb-24 md:pb-32">
        <div className="container">
          <div className="flex items-baseline justify-between border-t border-foreground pt-6">
            <h2 id="related-heading" className="label text-foreground">
              Other sectors
            </h2>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium">
              <span className="link-underline">All services</span> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={`/services/${r.id}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={r.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="label">
                        {r.code} · {r.kind}
                      </p>
                      <h3 className="mt-3 font-serif text-2xl tracking-[-0.01em]">{r.title}</h3>
                    </div>
                    <ArrowUpRight strokeWidth={1.5} className="mt-1 h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
