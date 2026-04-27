'use client'

import { useEffect } from 'react'
import { CustomButton } from '@/components/ui/CustomButton'
import { RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold tracking-tighter text-red-500/20 mb-4">ERROR</h1>
      <h2 className="text-3xl font-bold tracking-tighter mb-6">Something went wrong!</h2>
      <p className="text-foreground/60 max-w-md mb-10">
        An unexpected error occurred. We have been notified and are working on it.
      </p>
      <CustomButton size="lg" onClick={() => reset()} className="gap-2">
        <RefreshCcw size={18} /> Try Again
      </CustomButton>
    </div>
  )
}
