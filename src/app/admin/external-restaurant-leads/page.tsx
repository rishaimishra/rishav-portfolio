import React from 'react'
import { prisma2 } from '@/lib/prisma2'
import { Trash2, Utensils, Phone, Globe, Mail } from 'lucide-react'
import { revalidatePath } from 'next/cache'

export default async function ExternalRestaurantLeadsPage() {
  const leads = await prisma2.restaurant_contacts.findMany({
    orderBy: { created_at: 'desc' }
  })

  async function deleteRestaurantLead(formData: FormData) {
    'use server'
    const id = parseInt(formData.get('id') as string)
    await prisma2.restaurant_contacts.delete({ where: { id } })
    revalidatePath('/admin/external-restaurant-leads')
  }

  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
           <Utensils className="text-primary" size={24} />
           <h1 className="text-4xl font-bold tracking-tighter">Restaurant Leads</h1>
        </div>
        <p className="text-foreground/50">Specific restaurant business leads from your secondary database.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leads.length === 0 ? (
          <div className="col-span-full glass p-12 text-center rounded-[2rem] border-white/5">
            <p className="text-foreground/40 text-lg">No restaurant leads found.</p>
          </div>
        ) : (
          leads.map((lead) => (
            <div key={lead.id} className="glass p-8 rounded-[2rem] border-white/5 group relative overflow-hidden">
              {/* Status Indicator */}
              <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />

              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                      {lead.restaurant_name.charAt(0)}
                    </div>
                    <form action={deleteRestaurantLead}>
                      <input type="hidden" name="id" value={lead.id} />
                      <button className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                        <Trash2 size={18} />
                      </button>
                    </form>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-1">{lead.restaurant_name}</h3>
                  <p className="text-primary font-medium flex items-center gap-2 mb-6">
                     <span className="text-foreground/40">Owner/Contact:</span> {lead.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 text-sm text-foreground/60 bg-white/5 p-3 rounded-xl">
                    <Mail size={16} className="text-primary" />
                    {lead.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/60 bg-white/5 p-3 rounded-xl">
                    <Phone size={16} className="text-primary" />
                    {lead.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/40 mt-2">
                    <Globe size={14} />
                    <span>Source: {lead.website_name}</span>
                    <span className="ml-auto">{lead.created_at ? new Date(lead.created_at).toLocaleDateString() : 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
