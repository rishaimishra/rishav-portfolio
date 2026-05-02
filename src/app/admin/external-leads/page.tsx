import React from 'react'
import { prisma2 } from '@/lib/prisma2'
import { Trash2, Database, Globe, Building } from 'lucide-react'
import { revalidatePath } from 'next/cache'

export default async function ExternalLeadsPage() {
  // Using the correct model name 'leads' from the secondary database
  const leadsData = await prisma2.leads.findMany({
    orderBy: { created_at: 'desc' }
  })

  async function deleteExternalLead(formData: FormData) {
    'use server'
    const id = parseInt(formData.get('id') as string)
    await prisma2.leads.delete({ where: { id } })
    revalidatePath('/admin/external-leads')
  }

  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
           <Database className="text-primary" size={24} />
           <h1 className="text-4xl font-bold tracking-tighter">External Leads</h1>
        </div>
        <p className="text-foreground/50">View and manage messages from your secondary database.</p>
      </div>

      <div className="space-y-6">
        {leadsData.length === 0 ? (
          <div className="glass p-12 text-center rounded-[2rem] border-white/5">
            <p className="text-foreground/40 text-lg">No external leads found.</p>
          </div>
        ) : (
          leadsData.map((lead) => (
            <div key={lead.id} className="glass p-8 rounded-[2rem] border-white/5 group">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      {lead.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">{lead.name}</h3>
                        {lead.company && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded text-foreground/40">
                             {lead.company}
                          </span>
                        )}
                      </div>
                      <p className="text-primary text-sm">{lead.email}</p>
                    </div>
                    <span className="text-xs text-foreground/30 bg-white/5 px-3 py-1 rounded-full ml-auto">
                      {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : 'N/A'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 p-4 rounded-2xl">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/30 mb-2 flex items-center gap-2">
                        <Globe size={12} /> Source
                      </p>
                      <p className="text-sm font-medium">{lead.website_name}</p>
                      {lead.website_url && (
                        <a href={lead.website_url} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline break-all block mt-1">
                          {lead.website_url}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <form action={deleteExternalLead}>
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
