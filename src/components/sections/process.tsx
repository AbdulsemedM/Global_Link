import { process } from '@/lib/site'
import { Reveal } from '@/components/ui/reveal'

/**
 * Four-step method on an inset forest panel. The panel sits inside the page rather than spanning it,
 * so the page keeps flowing instead of switching "slides". Scoped `dark` so tokens read correctly on green.
 */
export function Process({ index }: { index?: string }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="dark relative overflow-hidden rounded-3xl bg-forest px-6 py-16 text-paper sm:px-10 md:px-14 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-brand-500/15 blur-3xl"
          />
          <Reveal className="relative grid gap-6 lg:grid-cols-12 lg:gap-10">
            <p className="label flex items-center gap-3 pt-3 text-paper lg:col-span-3 lg:items-start">
              <span aria-hidden className="mt-[3px] hidden h-px w-6 bg-brand-400 lg:block" />
              {index && <span className="text-brand-400">{index} — </span>}
              Method
            </p>
            <div className="lg:col-span-9">
              <h2 className="display-2 max-w-4xl">
                How a shipment moves <em>with us.</em>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl">
                One accountable team from the first brief to the final delivery note — with a named account manager at
                every step.
              </p>
            </div>
          </Reveal>

          <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.06} className="h-full rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 md:p-7">
                  <span className="font-serif text-5xl font-[300] italic leading-none text-brand-400">{i + 1}</span>
                  <h3 className="mt-8 font-serif text-2xl tracking-[-0.01em]">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-paper/70">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
