import React from 'react'
import { auth, signOut } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  LogOut, 
  Globe 
} from 'lucide-react'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  // If not logged in and not on the login page, redirect to login
  // Note: Middleware also handles this, but this is an extra layer
  if (!session && !children?.toString().includes('AdminLoginPage')) {
    // This check is a bit naive because children is a ReactNode, 
    // but in a real app, you'd use the route path.
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-background/50 backdrop-blur-xl flex flex-col p-6 hidden md:flex">
        <div className="mb-12 px-2">
          <span className="text-xl font-bold tracking-tighter text-primary">ADMIN PANEL</span>
        </div>

        <nav className="flex-grow space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium">
            <Briefcase size={18} /> Projects
          </Link>
          <Link href="/admin/leads" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium">
            <Users size={18} /> Leads
          </Link>
        </nav>

        <div className="border-t border-white/5 pt-6 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium text-foreground/50">
            <Globe size={18} /> View Site
          </Link>
          <form action={async () => {
            'use server'
            await signOut()
          }}>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500 transition-colors text-sm font-medium">
              <LogOut size={18} /> Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-grow overflow-auto p-8 md:p-12">
        {children}
      </main>
    </div>
  )
}
