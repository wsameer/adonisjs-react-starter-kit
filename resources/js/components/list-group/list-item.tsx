import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

type Variant = 'default' | 'danger'

type Props = {
  icon?: React.ReactNode
  label: string
  onClick?: () => void
  rightElement?: React.ReactNode
  variant?: Variant
}

const variantStyles: Record<Variant, string> = {
  default: 'bg-background dark:bg-zinc-800 dark:hover:bg-zinc-900',
  danger: 'bg-red hover:bg-red-100 dark:bg-red-900 dark:hover:bg-red-950',
}

export const ListItem = forwardRef<HTMLButtonElement, Props>(
  ({ icon, label, onClick, rightElement, variant = 'default' }, ref) => (
    <Button
      ref={ref}
      className={cn(
        'flex h-10 items-center justify-between px-4 py-1',
        'border-t dark:border-background',
        'cursor-pointer first:border-t-0',
        variantStyles[variant]
      )}
      onClick={onClick}
      variant="ghost"
      asChild
    >
      <div>
        <div
          className={cn('flex', {
            'items-center': icon,
          })}
        >
          {icon ? icon : null}
          <small
            className={cn('text-sm leading-none font-medium dark:text-white', {
              'ml-3': icon,
              'text-zinc-800': variant === 'default',
              'text-red-600': variant === 'danger',
            })}
          >
            {label}
          </small>
        </div>
        {rightElement}
      </div>
    </Button>
  )
)

ListItem.displayName = 'ListItem'
