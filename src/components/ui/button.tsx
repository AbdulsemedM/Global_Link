import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group/btn inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-sm text-[15px] font-medium transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5',
  {
    variants: {
      variant: {
        // The logo green with ink text — identical in both themes
        primary: 'bg-brand-500 text-ink hover:bg-brand-400',
        outline: 'border border-foreground/25 text-foreground hover:border-foreground',
        // For use on fixed dark surfaces (footer, forest bands)
        'outline-light': 'border border-paper/30 text-paper hover:border-paper',
      },
      size: {
        md: 'h-11 px-5',
        lg: 'h-[52px] px-7',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
