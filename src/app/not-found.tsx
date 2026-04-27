import Link from 'next/link'
import { CustomButton } from '@/components/ui/CustomButton'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-extrabold tracking-tighter text-primary/20 mb-4">404</h1>
      <h2 className="text-4xl font-bold tracking-tighter mb-6">Page Not Found</h2>
      <p className="text-foreground/60 max-w-md mb-10 text-lg">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <CustomButton size="lg" className="gap-2">
          <ArrowLeft size={18} /> Back to Home
        </CustomButton>
      </Link>
    </div>
  )
}
