import Image from 'next/image'
import { PageHeader } from '@/components/sections/page-header'
import { SectionHead } from '@/components/sections/section-head'
import { Partners } from '@/components/sections/partners'
import { Figures } from '@/components/sections/figures'
import { JsonLd } from '@/components/seo/json-ld'
import { Reveal } from '@/components/ui/reveal'
import { TradeNetwork } from '@/components/visuals/trade-network'
import { absoluteUrl, breadcrumbJsonLd, organizationRef, pageMetadata } from '@/lib/seo'
import { values } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'About Us — Ethiopian Trading Company',
  description:
    'Meet Angler Trading PLC: an Addis Ababa import, export and wholesale company connecting Ethiopian businesses and producers with global markets.',
  path: '/about',
  keywords: ['about Angler Trading', 'Ethiopian trading company', 'import export company Addis Ababa'],
})

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          { '@context': 'https://schema.org', '@type': 'AboutPage', url: absoluteUrl('/about'), about: organizationRef },
        ]}
      />

      <PageHeader
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
        label="About"
        title={
          <>
            A trading house, <em>built in Addis Ababa.</em>
          </>
        }
        intro="We exist to make international trade simpler, safer and more reliable for the Ethiopian businesses that depend on it — and for the buyers abroad who depend on Ethiopia."
        image={{
          src: '/images/photos/tea-harvest.webp',
          alt: 'Tea pickers in a lush Ethiopian tea plantation',
          caption: 'FIG. 01 — Tea harvest. Ethiopian producers are at the heart of our export business.',
        }}
      />

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <SectionHead
            index="01"
            label="Our story"
            title={
              <>
                Ethiopia needs dependable supply. <em>Its producers deserve the world.</em>
              </>
            }
          />
          <Reveal className="mt-12 grid gap-8 text-[17px] leading-relaxed text-muted-foreground md:grid-cols-2 lg:ml-[calc(25%+0.625rem)] lg:gap-10">
            <p>
              Ethiopia is one of Africa&apos;s fastest-growing economies and the birthplace of coffee. Its hospitals,
              builders and industries need dependable access to global supply, while its farmers and cooperatives deserve
              direct access to buyers abroad.
            </p>
            <p>
              Angler Trading sits at that intersection. We source medical supplies, construction materials, vehicles and
              energy from vetted suppliers worldwide, export Ethiopian coffee, tea and agricultural products, and
              distribute essential goods to businesses across the country.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid border-y border-foreground md:grid-cols-2">
            {[
              {
                label: 'Mission',
                text: 'To make international trade seamless for Ethiopian businesses, with comprehensive import, export and wholesale services delivered to an uncompromising standard.',
              },
              {
                label: 'Vision',
                text: "To be Ethiopia's most trusted trading house — recognised abroad for reliability, integrity and responsible business.",
              },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 0.08} className={i ? 'border-t border-border py-12 md:border-l md:border-t-0 md:py-16 md:pl-10' : 'py-12 md:py-16 md:pr-10'}>
                <p className="label text-foreground">{b.label}</p>
                <p className="mt-8 font-serif text-[clamp(1.6rem,2.4vw,2.25rem)] font-[360] leading-[1.25] tracking-[-0.015em]">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <SectionHead
            index="02"
            label="Principles"
            title={
              <>
                Six principles we <em>don&apos;t trade on.</em>
              </>
            }
            intro="They shape how we choose suppliers, how we treat clients and how we grow."
          />
          <ol className="mt-14 border-t border-border lg:ml-[calc(25%+0.625rem)]">
            {values.map((v, i) => (
              <li key={v.title} className="grid gap-2 border-b border-border py-6 md:grid-cols-[4rem_14rem_1fr] md:gap-6">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-2xl tracking-[-0.01em]">{v.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{v.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Image spread with figures */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-[2.4/1]">
              <Image
                src="/images/photos/container-yard.webp"
                alt="Aerial view of a container terminal at dusk, stacked containers in long rows"
                fill
                sizes="(min-width: 1440px) 1360px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[11px] tracking-[0.04em] text-muted-foreground">FIG. 02 — Container terminal</figcaption>
          </figure>
          <Figures className="mt-12" />
        </div>
      </section>

      {/* Network */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <SectionHead
            index="03"
            label="Network"
            title={
              <>
                Addis Ababa at the centre. <em>The world within reach.</em>
              </>
            }
            intro="Through the Djibouti corridor we connect Ethiopia with suppliers and buyers across the Middle East, Asia and Europe."
          />
          <div className="mt-16">
            <TradeNetwork />
          </div>
        </div>
      </section>

      <Partners />
    </>
  )
}
