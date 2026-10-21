import { cn } from '@/lib/utils'

/** The Angler "A" mark. The dark stroke follows `currentColor` so it adapts to any surface. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 104" className={className} aria-hidden>
      <path fill="#5DC22E" d="M2 101 L26.4 69.2 L48.6 96.6 Z" />
      <path fill="#5DC22E" d="M28.4 65.6 L50 28.4 Q58 72 94.4 97.6 L53 97 Z" />
      <path
        fill="currentColor"
        d="M64.4 2 L127 101 L106 98 Q95 86 83 68.6 L66 68.6 L61.4 56.6 L76 56.6 L64.4 36 L57.6 48.4 L52.4 25 Z"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark className="h-7 w-auto shrink-0" />
      <span className="flex items-baseline gap-2 leading-none">
        <span className="text-[17px] font-semibold tracking-[-0.01em]">Angler Trading</span>
        <span className="font-mono text-[10px] font-medium tracking-[0.12em] opacity-70">PLC</span>
      </span>
    </span>
  )
}
