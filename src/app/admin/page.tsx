import React from 'react'
import { prisma } from '@/lib/prisma'
import { 
  Briefcase, 
  MessageSquare, 
  TrendingUp, 
  Users 
} from 'lucide-react'

export default async function AdminDashboard() {
  const [projectsCount, leadsCount] = await Promise.all([
    prisma.project.count(),
    prisma.lead.count()
  ])

  const stats = [
    { label: 'Total Projects', value: projectsCount, icon: <Briefcase className="text-primary" /> },
    { label: 'Total Leads', value: leadsCount, icon: <MessageSquare className="text-accent" /> },
    { label: 'Active Status', value: 'Live', icon: <TrendingUp className="text-green-500" /> },
  ]

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-2">Welcome Back</h1>
        <p className="text-foreground/50">Here is an overview of your portfolio activity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="glass p-8 rounded-[2rem] border-white/5">
            <div className="p-3 bg-white/5 rounded-xl w-fit mb-6">
              {stat.icon}
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-1">{stat.label}</p>
            <p className="text-4xl font-bold">{stat.value}</p>
          </div>
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
