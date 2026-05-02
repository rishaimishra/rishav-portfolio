"use client"

import React, { useState } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Briefcase,
  Users,
  LogOut,
  Globe,
  Menu,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Projects', href: '/admin/projects', icon: Briefcase },
  { name: 'Leads', href: '/admin/leads', icon: Users },
]

export function AdminNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/login' })
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 w-full bg-background/50 backdrop-blur-xl border-b border-white/5 z-50 px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold tracking-tighter text-primary">ADMIN PANEL</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-md pt-24 px-6"
          >
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    pathname === link.href ? 'bg-primary text-background font-bold' : 'hover:bg-white/5'
                  }`}
                >
                  <link.icon size={20} /> {link.name}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-4 mt-8 space-y-4">
                <Link
                  href="/"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 text-foreground/50"
                >
                  <Globe size={20} /> View Site
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-red-500/10 text-red-500 transition-colors"
                >
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-background/50 backdrop-blur-xl flex flex-col p-6 hidden md:flex h-screen sticky top-0">
        <div className="mb-12 px-2">
          <span className="text-xl font-bold tracking-tighter text-primary">ADMIN PANEL</span>
        </div>

        <nav className="flex-grow space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${
                pathname === link.href ? 'bg-white/10 text-primary' : 'hover:bg-white/5'
              }`}
            >
              <link.icon size={18} /> {link.name}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/5 pt-6 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium text-foreground/50">
            <Globe size={18} /> View Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500 transition-colors text-sm font-medium"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>
    </>
  )
}
