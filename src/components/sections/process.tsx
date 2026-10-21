import { process } from '@/lib/site'
import { Reveal } from '@/components/ui/reveal'

/** Four-step method on a forest band. Scoped `dark` so shared tokens read correctly on the green. */
export function Process({ index }: { index?: string }) {
  return (
    <section className="dark bg-forest text-paper">
      <div className="container py-24 md:py-32">
        <Reveal className="grid gap-6 border-t border-paper/70 pt-6 lg:grid-cols-12 lg:gap-10">
          <p className="label pt-2 text-paper lg:col-span-3">
            {index && <span className="text-brand-400">{index} — </span>}
            Method
          </p>
          <div className="lg:col-span-9">
            <h2 className="display-2 max-w-4xl">
              How a shipment moves <em>with us.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/65 md:text-xl">
              One accountable team from the first brief to the final delivery note — with a named account manager at
              every step.
            </p>
          </div>
        </Reveal>

        <ol className="mt-20 grid border-t border-paper/20 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-paper/20 py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 lg:even:pl-8"
            >
              <Reveal delay={i * 0.08}>
                <span className="font-serif text-6xl font-[300] italic leading-none text-brand-400">{i + 1}</span>
                <h3 className="mt-10 font-serif text-2xl tracking-[-0.01em]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
