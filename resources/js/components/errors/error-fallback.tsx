import { Button } from '../ui/button'

export const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <p className="text-zinc-400">
        <i>{error.message}</i>
      </p>
      <Button className="mt-4" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  )
}
