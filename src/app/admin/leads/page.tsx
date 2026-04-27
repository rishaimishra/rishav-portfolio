import React from 'react'
import { Lead } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { Trash2 } from 'lucide-react'
import { revalidatePath } from 'next/cache'

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  })

  async function deleteLead(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await prisma.lead.delete({ where: { id } })
    revalidatePath('/admin/leads')
  }

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tighter mb-2">Lead Management</h1>
        <p className="text-foreground/50">View and manage messages from your contact form.</p>
      </div>

      <div className="space-y-6">
        {leads.length === 0 ? (
          <div className="glass p-12 text-center rounded-[2rem] border-white/5">
            <p className="text-foreground/40 text-lg">No leads found.</p>
          </div>
        ) : (
          leads.map((lead: Lead) => (
            <div key={lead.id} className="glass p-8 rounded-[2rem] border-white/5 group">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{lead.name}</h3>
                      <p className="text-primary text-sm">{lead.email}</p>
                    </div>
                    <span className="text-xs text-foreground/30 bg-white/5 px-3 py-1 rounded-full ml-auto">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed bg-white/5 p-6 rounded-2xl">
                    {lead.message}
                  </p>
                </div>
                
                <div className="flex items-start">
                  <form action={deleteLead}>
                    <input type="hidden" name="id" value={lead.id} />
                    <button className="p-4 rounded-2xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                      <Trash2 size={20} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
