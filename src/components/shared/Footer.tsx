"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()

  // Don't show public footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <footer className="border-t border-white/5 bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tighter">
              RISHAV<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-foreground/50 mt-2">
              Full Stack Architect & UI Designer.
            </p>
          </div>
          
          <div className="flex space-x-6 text-sm font-medium">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Rishav Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
