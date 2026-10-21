import Image from 'next/image'
import { partners } from '@/lib/site'

/** Static logo wall in a hairline grid. */
export function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="pb-24 md:pb-32">
      <div className="container">
        <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 id="partners-heading" className="label text-foreground">
            Institutions we work alongside
          </h2>
          <p className="text-sm text-muted-foreground">Across Ethiopia&apos;s finance, aviation and trade ecosystem.</p>
        </div>
        <ul className="mt-8 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <li key={p.src} className="flex aspect-[3/2] items-center justify-center border-b border-r border-border bg-card p-6">
              <Image
                src={p.src}
                alt={p.alt}
                width={140}
                height={80}
                className="h-auto max-h-[72px] w-auto max-w-[140px] object-contain contrast-125 grayscale transition duration-500 hover:contrast-100 hover:grayscale-0 dark:rounded-sm dark:bg-paper dark:p-2"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
