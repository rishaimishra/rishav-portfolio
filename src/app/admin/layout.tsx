import React from 'react'
import { auth } from '@/lib/auth'
import { AdminNav } from '@/components/admin/AdminNav'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Server-side protection
  const session = await auth()

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      <AdminNav />

      {/* Content Area */}
      <main className="flex-grow overflow-auto p-8 md:p-12 pt-28 md:pt-12">
        {children}
      </main>
    </div>
  )
}
