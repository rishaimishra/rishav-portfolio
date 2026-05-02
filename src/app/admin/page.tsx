import React from 'react'
import { prisma } from '@/lib/prisma'
import { prisma2 } from '@/lib/prisma2'
import Link from 'next/link'
import {
  Briefcase,
  MessageSquare,
  TrendingUp,
  Users,
  Database
} from 'lucide-react'

export default async function AdminDashboard() {
  const [projectsCount, leadsCount, extContactsCount, extLeadsCount, extRestContactsCount] = await Promise.all([
    prisma.project.count(),
    prisma.lead.count(),
    prisma2.contacts.count(),
    prisma2.leads.count(),
    prisma2.restaurant_contacts.count()
  ])

  const stats = [
    { label: 'Total Projects', value: projectsCount, icon: <Briefcase className="text-primary" />, href: '/admin/projects' },
    { label: 'Portfolio Leads', value: leadsCount, icon: <MessageSquare className="text-accent" />, href: '/admin/leads' },
    { label: 'Gst-billing Leads', value: extContactsCount, icon: <Users className="text-blue-500" />, href: '/admin/external-contacts' },
    { label: 'Site-indexer Leads', value: extLeadsCount, icon: <Database className="text-green-500" />, href: '/admin/external-leads' },
    { label: 'Restaurant POS Leads', value: extRestContactsCount, icon: <TrendingUp className="text-orange-500" />, href: '/admin/external-restaurant-leads' },
  ]

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-2">Welcome Back</h1>
        <p className="text-foreground/50">Here is an overview of your portfolio activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className="glass p-8 rounded-[2rem] border-white/5 hover:bg-white/5 transition-colors group">
            <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-1">{stat.label}</p>
            <p className="text-4xl font-bold">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Recent Leads Preview */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Recent Leads</h2>
        <div className="glass rounded-[2rem] border-white/5 overflow-hidden">
          <div className="p-8 text-center text-foreground/40">
            {leadsCount === 0 ? 'No leads yet. They will appear here.' : 'Visit the Leads tab to view full details.'}
          </div>
        </div>
      </div>
    </div>
  )
}
