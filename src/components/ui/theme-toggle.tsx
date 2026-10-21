"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  // Both icons are always rendered and swapped with the `dark` class, so there is no hydration flash.
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex h-11 w-11 items-center justify-center rounded-sm border border-foreground/15 transition-colors hover:border-foreground/50',
        className
      )}
      aria-label="Toggle colour theme"
    >
      <Sun strokeWidth={1.5} className="h-[18px] w-[18px] transition-transform duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon strokeWidth={1.5} className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" />
    </button>
  )
}
