import { stats } from '@/lib/site'
import { cn } from '@/lib/utils'

/** Key figures in a hairline grid: two columns on mobile, four on desktop. */
export function Figures({ className }: { className?: string }) {
  return (
    <dl className={cn('grid grid-cols-2 border-t border-foreground lg:grid-cols-4', className)}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            'flex flex-col-reverse gap-3 border-border py-8',
            i % 2 ? 'border-l pl-6' : 'pr-6',
            i >= 2 && 'border-t lg:border-t-0',
            i === 2 && 'lg:border-l lg:pl-6'
          )}
        >
          <dt className="label">{s.label}</dt>
          <dd className="font-serif text-5xl font-[340] tracking-[-0.02em] md:text-6xl">
            {s.value.toLocaleString('en-US')}
            <span className="text-accent">{s.suffix}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
