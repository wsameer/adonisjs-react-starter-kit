import { WalletMinimal } from 'lucide-react'

interface AppLogoProps {
  size?: 'small' | 'large' | 'extra-large'
}

export const AppLogo: React.FC<AppLogoProps> = ({ size = 'small' }) => {
  const sizeClasses = {
    'small': 'h-8 w-8 text-base',
    'large': 'h-12 w-12 text-lg',
    'extra-large': 'h-16 w-16 text-xl',
  }

  const iconSizeClasses = {
    'small': 'h-4 w-4',
    'large': 'h-6 w-6',
    'extra-large': 'h-8 w-8',
  }

  return (
    <div
      className={`group flex ${sizeClasses[size]} shrink-0 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground`}
    >
      <WalletMinimal className={`${iconSizeClasses[size]} transition-all group-hover:scale-110`} />
      <span className="sr-only">App Name</span>
    </div>
  )
}
