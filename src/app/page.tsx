import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HeroMedia } from '@/components/home/hero-media'
import { SectorIndex } from '@/components/home/sector-index'
import { SectionHead } from '@/components/sections/section-head'
import { Process } from '@/components/sections/process'
import { Figures } from '@/components/sections/figures'
import { TradeNetwork } from '@/components/visuals/trade-network'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata = {
  ...pageMetadata({
    title: `${site.name} — Fresh Produce Exporter, Ethiopia`,
    description:
      'Ethiopian fresh vegetables, fruit and pulses exported to Djibouti, Somalia, Kenya and Pakistan. Agricultural inputs and trucks imported. Get a quote.',
    path: '/',
  }),
  // The home page uses the full title without the "| Angler Trading" template suffix
  title: { absolute: `${site.name} — Fresh Produce Exporter, Ethiopia` },
}

const LINES = [
  { label: 'Export', text: 'Fresh vegetables, fruit and pulses from Ethiopian growers, graded and documented for regional buyers.' },
  { label: 'Import', text: 'Crop-protection products and commercial trucks from established international manufacturers.' },
  { label: 'Logistics', text: 'Overland to Djibouti, Somalia and Kenya; by sea through Djibouti to Pakistan, the UAE and China.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-10 md:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(55%_60%_at_80%_0%,hsl(var(--accent)/0.14),transparent_70%)]" />
        <div className="container relative">
          <div className="label flex items-center justify-between border-b border-border pb-4">
            <span className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 bg-brand-500" />
              Fresh produce · Pulses · Agri-inputs
            </span>
            <span className="hidden sm:block">Trading house · Addis Ababa</span>
          </div>

          <h1 className="display-1 mt-12 max-w-[15ch] md:mt-16 xl:text-[7.5rem]">
            Fresh from <em>Ethiopia,</em> delivered across the region.
          </h1>

          <div className="mt-12 grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
            <p className="lead lg:col-span-6">
              We export Ethiopian vegetables, fruit and pulses to buyers in Djibouti, Somalia, Kenya and Pakistan — and
              import the farm inputs and trucks that keep the supply chain moving.
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

        <figure className="container relative mt-14 md:mt-20">
          <HeroMedia src="/images/photos/hero-produce.webp" alt="An abundant display of fresh vegetables: tomatoes, peppers, potatoes, radishes, cabbage and greens" />
          <figcaption className="mt-4 flex flex-col gap-1 font-mono text-[11px] tracking-[0.04em] text-muted-foreground sm:flex-row sm:justify-between">
            <span>FIG. 01 — Fresh produce</span>
            <span>Vegetables are our largest export line, moved overland within days of harvest.</span>
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
              Angler Trading is an Addis Ababa trading company.{' '}
              <span className="text-muted-foreground">
                We buy fresh produce and pulses from Ethiopian growers and deliver them to buyers across the Horn of Africa
                and beyond — taking care of grading, packing, export documents, customs and transport in between.
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
                What we <em>trade.</em>
              </>
            }
            intro="Three export lines from Ethiopian farms, and two import lines that support them — each handled end to end by the same team."
          />
          <div className="mt-16">
            <SectorIndex />
          </div>
        </div>
      </section>

      {/* Network — on a soft tint so the page alternates gently rather than switching hard */}
      <section className="border-y border-border/60 bg-muted/40 py-24 md:py-32">
        <div className="container">
          <SectionHead
            index="03"
            label="Network"
            title={
              <>
                Across the Horn of Africa, <em>and beyond.</em>
              </>
            }
            intro="Most of our produce travels by road — to Djibouti through Dire Dawa, to Somalia through Jijiga and to Kenya through Moyale. Sea freight through Djibouti reaches Pakistan, the UAE and China. Select a lane to trace it on the map."
          />
          <div className="mt-16">
            <TradeNetwork />
          </div>
        </div>
      </section>

      <Process index="04" />
    </>
  )
}
