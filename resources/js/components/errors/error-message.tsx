import { SnailIcon } from 'lucide-react'

export const ErrorMessage = ({ message, classes = '' }: { message?: string; classes?: string }) => (
  <div className={`grid grid-cols-1 place-items-center gap-4 p-8 ${classes}`}>
    <SnailIcon className="h-24 w-24" />
    <p className="text-l scroll-m-20 tracking-tight">
      {message ?? 'Error loading data. Please try again.'}
    </p>
  </div>
)
