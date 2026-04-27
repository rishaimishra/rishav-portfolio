import React from 'react'
import { prisma } from '@/lib/prisma'
import { Plus, Trash2, Edit } from 'lucide-react'
import Link from 'next/link'
import { CustomButton } from '@/components/ui/CustomButton'
import { revalidatePath } from 'next/cache'

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })

  async function deleteProject(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    await prisma.project.delete({ where: { id } })
    revalidatePath('/admin/projects')
    revalidatePath('/projects')
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-2">Project Management</h1>
          <p className="text-foreground/50">Manage your portfolio projects efficiently.</p>
        </div>
        <Link href="/admin/projects/new">
          <CustomButton className="gap-2">
            <Plus size={18} /> Add Project
          </CustomButton>
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projects.length === 0 ? (
          <div className="xl:col-span-2 glass p-12 text-center rounded-[2rem] border-white/5">
            <p className="text-foreground/40 text-lg mb-6">No projects in your database.</p>
            <Link href="/admin/projects/new">
              <CustomButton variant="outline">Create your first project</CustomButton>
            </Link>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="glass p-6 rounded-[2rem] border-white/5 flex gap-6 group">
              <div className="w-40 h-40 rounded-2xl overflow-hidden bg-white/5 flex-shrink-0">
                <img 
                  src={project.image || 'https://via.placeholder.com/400'} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase py-0.5 px-2 rounded bg-primary/10 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/projects/edit/${project.id}`} className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <Edit size={18} />
                  </Link>
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={project.id} />
                    <button className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={18} />
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
