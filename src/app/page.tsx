import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroMedia } from '@/components/home/hero-media'
import { SectorIndex } from '@/components/home/sector-index'
import { SectionHead } from '@/components/sections/section-head'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { Partners } from '@/components/sections/partners'
import { Figures } from '@/components/sections/figures'
import { TradeNetwork } from '@/components/visuals/trade-network'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata = {
  ...pageMetadata({
    title: `${site.name} — Import & Export from Ethiopia`,
    description:
      'Addis Ababa trading company importing medical supplies, construction materials, vehicles and fuel, and exporting Ethiopian coffee and tea. Get a quote.',
    path: '/',
  }),
  // The home page uses the full title without the "| Angler Trading" template suffix
  title: { absolute: `${site.name} — Import & Export from Ethiopia` },
}

const LINES = [
  { label: 'Import', text: 'Medical supplies, construction materials, vehicles and energy, sourced from vetted manufacturers.' },
  { label: 'Export', text: 'Ethiopian coffee, tea and pulses, graded and documented for buyers abroad.' },
  { label: 'Wholesale', text: 'Grain, agricultural goods and building supplies distributed nationwide.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-10 md:pt-14">
        <div className="container">
          <div className="label flex items-center justify-between border-b border-border pb-4">
            <span className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 bg-brand-500" />
              Import · Export · Wholesale
            </span>
            <span className="hidden sm:block">Trading house · Addis Ababa</span>
          </div>

          <h1 className="display-1 mt-12 max-w-[15ch] md:mt-16 xl:text-[7.5rem]">
            The trading partner between <em>Ethiopia</em> and the world.
          </h1>

          <div className="mt-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
            <p className="lead lg:col-span-6">
              We import the medical supplies, construction materials, vehicles and fuel Ethiopian businesses depend on —
              and export the country&apos;s finest coffee and tea to buyers abroad.
            </p>
            <div className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
              <Button asChild>
                <Link href="/contact">
                  Request a quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Explore our services</Link>
              </Button>
            </div>
          </div>
        </div>

        <figure className="container mt-14 md:mt-20">
          <HeroMedia src="/images/photos/hero-vessel.webp" alt="Aerial view of a loaded container ship guided by tugboats into port" />
          <figcaption className="mt-4 flex flex-col gap-1 font-mono text-[11px] tracking-[0.04em] text-muted-foreground sm:flex-row sm:justify-between">
            <span>FIG. 01 — Ocean freight</span>
            <span>Most of Ethiopia&apos;s trade moves by sea through the Port of Djibouti.</span>
          </figcaption>
        </figure>

        <div className="container mt-16">
          <Figures />
        </div>
      </section>

      {/* Company statement */}
      <section className="py-24 md:py-36">
        <div className="container grid gap-8 lg:grid-cols-12 lg:gap-10">
          <p className="label pt-3 text-foreground lg:col-span-3">
            <span className="text-accent">01 — </span>The company
          </p>
          <Reveal className="lg:col-span-9">
            <p className="font-serif text-[clamp(1.75rem,3.1vw,2.9rem)] font-[360] leading-[1.22] tracking-[-0.015em]">
              Angler Trading is an Addis Ababa trading house.{' '}
              <span className="text-muted-foreground">
                We import what Ethiopia&apos;s hospitals, builders and industries depend on, export the coffee and tea the
                country is known for, and take responsibility for everything in between — sourcing, verification, freight,
                customs and delivery.
              </span>
            </p>
            <ul className="mt-14 grid border-t border-border sm:grid-cols-3">
              {LINES.map((l, i) => (
                <li key={l.label} className={`py-6 sm:pr-6 ${i > 0 ? 'border-t sm:border-l sm:border-t-0 sm:pl-6' : ''}`}>
                  <p className="label text-foreground">{l.label}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{l.text}</p>
                </li>
              ))}
            </ul>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 font-medium">
              <span className="link-underline">More about the company</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sectors */}
      <section className="pb-24 md:pb-36">
        <div className="container">
          <SectionHead
            index="02"
            label="Sectors"
            title={
              <>
                Six sectors, handled <em>end to end.</em>
              </>
            }
            intro="Each sector has its own specialists, supplier network and compliance know-how — and the same team accountable from the first quote to final delivery."
          />
          <div className="mt-16">
            <SectorIndex />
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="pb-24 md:pb-36">
        <div className="container">
          <SectionHead
            index="03"
            label="Network"
            title={
              <>
                Connected to the world through the <em>Djibouti corridor.</em>
              </>
            }
            intro="Goods move between Addis Ababa and the Port of Djibouti on the Ethio-Djibouti railway, then by sea to and from the world's major trading ports. Select a lane below to trace it on the map."
          />
          <div className="mt-16">
            <TradeNetwork />
          </div>
        </div>
      </section>

      <Process index="04" />
      <Testimonials index="05" />
      <Partners />
    </>
  )
}
