import { GalleryVerticalEnd } from 'lucide-react'

interface AppLogoProps {
  size?: 'small' | 'large' | 'extra-large'
}

export const AppLogo: React.FC<AppLogoProps> = ({ size = 'small' }) => {
  const sizeClasses = {
    'small': 'size-6 text-base',
    'large': 'size-8 text-lg',
    'extra-large': 'size-12 text-xl',
  }

  const iconSizeClasses = {
    'small': 'size-4',
    'large': 'size-6',
    'extra-large': 'size-8',
  }

  return (
    <div
      className={`group flex ${sizeClasses[size]} shrink-0 items-center justify-center gap-2 rounded-md bg-primary font-semibold text-primary-foreground`}
    >
      <GalleryVerticalEnd
        className={`${iconSizeClasses[size]} transition-all group-hover:scale-110`}
      />
      <span className="sr-only">App Name</span>
    </div>
  )
}
