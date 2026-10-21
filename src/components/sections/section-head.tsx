import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'

/**
 * Editorial section opener: a strong rule, a mono index on the left and the serif heading on the right.
 * `index` is the section number shown as "02 — Label".
 */
export function SectionHead({
  index,
  label,
  title,
  intro,
  className,
  children,
}: {
  index?: string
  label: string
  title: React.ReactNode
  intro?: React.ReactNode
  className?: string
  children?: React.ReactNode
}) {
  return (
    <Reveal className={cn('grid gap-6 border-t border-foreground pt-6 lg:grid-cols-12 lg:gap-10', className)}>
      <p className="label pt-2 text-foreground lg:col-span-3">
        {index && <span className="text-accent">{index} — </span>}
        {label}
      </p>
      <div className="lg:col-span-9">
        <h2 className="display-2 max-w-4xl">{title}</h2>
        {intro && <p className="lead mt-6 max-w-2xl">{intro}</p>}
        {children}
      </div>
    </Reveal>
  )
}
