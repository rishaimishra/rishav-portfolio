import React from 'react'

export default function AdminLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-8 h-8 bg-black rounded-full"></div>
        </div>
      </div>
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 animate-pulse">
        Synchronizing Data...
      </p>
    </div>
  )
}
