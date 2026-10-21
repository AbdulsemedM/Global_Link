import { Suspense } from 'react'
import { PageHeader } from '@/components/sections/page-header'
import { Faq } from '@/components/sections/faq'
import { ContactForm } from '@/components/contact/contact-form'
import { JsonLd } from '@/components/seo/json-ld'
import { LocalTime } from '@/components/ui/local-time'
import { absoluteUrl, breadcrumbJsonLd, organizationRef, pageMetadata } from '@/lib/seo'
import { faqs, site } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Contact Us — Request a Quote',
  description: `Request an import, export or wholesale quote. Call ${site.phone} or email ${site.email} — we reply within one business day.`,
  path: '/contact',
  keywords: ['contact Angler Trading', 'import quote Ethiopia', 'export inquiry Ethiopia', 'trading company Addis Ababa contact'],
})

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
          { '@context': 'https://schema.org', '@type': 'ContactPage', url: absoluteUrl('/contact'), about: organizationRef },
        ]}
      />

      <PageHeader
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
        label="Contact"
        title={
          <>
            Start a <em>conversation.</em>
          </>
        }
        intro="Tell us what you need to import, export or source. A trade specialist will come back with clear options and an itemised quote within one business day."
      />

      <section className="pb-24 md:pb-32">
        <div className="container grid gap-16 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4">
            <dl className="border-t border-foreground">
              <Detail label="Email">
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </Detail>
              <Detail label="Telephone">
                <a href={site.phoneHref} className="link-underline">
                  {site.phone}
                </a>
              </Detail>
              <Detail label="Office">
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                </address>
                <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-block text-sm text-muted-foreground">
                  Get directions
                </a>
              </Detail>
              <Detail label="Hours">
                <ul className="space-y-1">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span>{h.days}</span>
                      <span className="font-mono text-sm text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-xs text-muted-foreground">
                  <LocalTime />
                </p>
              </Detail>
            </dl>

            <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-border bg-muted">
              <iframe
                title={`Map showing ${site.name} on ${site.address.street}, ${site.address.city}`}
                src={site.mapEmbed}
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.85] dark:[filter:invert(0.9)_hue-rotate(180deg)_grayscale(0.7)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="label border-t border-foreground pb-2 pt-6 text-foreground">Inquiry form</h2>
            <Suspense fallback={<div className="min-h-[640px]" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <Faq faqs={faqs} />
    </>
  )
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-border py-5 text-[15px]">
      <dt className="label pt-1">{label}</dt>
      <dd>{children}</dd>
    </div>
  )
}
