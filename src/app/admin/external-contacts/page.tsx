import React from 'react'
import { prisma2 } from '@/lib/prisma2'
import { Trash2, Phone, User, Globe } from 'lucide-react'
import { revalidatePath } from 'next/cache'

export default async function ExternalContactsPage() {
  const contacts = await prisma2.contacts.findMany({
    orderBy: { created_at: 'desc' }
  })

  async function deleteContact(formData: FormData) {
    'use server'
    const id = parseInt(formData.get('id') as string)
    await prisma2.contacts.delete({ where: { id } })
    revalidatePath('/admin/external-contacts')
  }

  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
           <Phone className="text-primary" size={24} />
           <h1 className="text-4xl font-bold tracking-tighter">External Contacts</h1>
        </div>
        <p className="text-foreground/50">General contact inquiries from your secondary database.</p>
      </div>

      <div className="glass rounded-[2.5rem] border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-foreground/40">Contact</th>
                <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-foreground/40">Details</th>
                <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-foreground/40">Date</th>
                <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-foreground/40 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-8 py-12 text-center text-foreground/30">
                    No contacts found.
                  </td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {contact.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold">{contact.name}</p>
                          <p className="text-xs text-foreground/40">{contact.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="space-y-1">
                        <p className="text-sm font-medium flex items-center gap-2">
                          <span className="text-foreground/40">Type:</span> {contact.business_type}
                        </p>
                        <p className="text-sm font-medium flex items-center gap-2">
                          <span className="text-foreground/40">Mobile:</span> {contact.mobile}
                        </p>
                        <p className="text-xs text-primary flex items-center gap-1">
                          <Globe size={10} /> {contact.website_name}
                        </p>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-foreground/40 text-sm">
                      {contact.created_at ? new Date(contact.created_at).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <form action={deleteContact}>
                        <input type="hidden" name="id" value={contact.id} />
                        <button className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                          <Trash2 size={18} />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
