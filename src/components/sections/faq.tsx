import { SectionHead } from './section-head'

/** Accessible accordion built on native <details>, so it works without JavaScript and is fully crawlable. */
export function Faq({
  faqs,
  index,
  title = 'Questions, answered.',
}: {
  faqs: readonly { q: string; a: string }[]
  index?: string
  title?: string
}) {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHead index={index} label="FAQ" title={title} />
        <div className="mt-14 grid lg:grid-cols-12 lg:gap-10">
          <div className="border-t border-border lg:col-span-9 lg:col-start-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 font-serif text-xl tracking-[-0.01em] md:text-2xl">
                  {f.q}
                  <span aria-hidden className="relative mt-2 h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-foreground" />
                    <span className="absolute left-1/2 top-0 h-4 w-px bg-foreground transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-8 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
