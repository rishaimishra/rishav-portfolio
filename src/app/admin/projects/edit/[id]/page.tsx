"use client"

import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { CustomButton } from '@/components/ui/CustomButton'
import { ArrowLeft, Save, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function EditProjectPage() {
  const router = useRouter()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`)
        if (res.ok) {
          const data = await res.json()
          setProject(data)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setFetching(false)
      }
    }
    fetchProject()
  }, [id])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      title: formData.get('title'),
      slug: formData.get('slug'),
      description: formData.get('description'),
      techStack: (formData.get('techStack') as string).split(',').map(s => s.trim()),
      image: formData.get('image'),
      liveUrl: formData.get('liveUrl'),
      githubUrl: formData.get('githubUrl'),
      featured: formData.get('featured') === 'on'
    }

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })

      if (res.ok) {
        router.push('/admin/projects')
        router.refresh()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (fetching) return (
    <div className="flex items-center justify-center h-96">
      <Loader2 className="animate-spin text-primary" size={40} />
    </div>
  )

  if (!project) return <div>Project not found</div>

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <Link href="/admin/projects" className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-4 group w-fit">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to projects
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter">Edit Project</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 glass p-10 rounded-[2.5rem] border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Project Title</label>
            <input 
              name="title" 
              defaultValue={project.title}
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Slug (URL)</label>
            <input 
              name="slug" 
              defaultValue={project.slug}
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Description</label>
          <textarea 
            name="description" 
            defaultValue={project.description}
            required 
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Tech Stack (comma separated)</label>
            <input 
              name="techStack" 
              defaultValue={project.techStack.join(', ')}
              required 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Image URL</label>
            <input 
              name="image" 
              defaultValue={project.image}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">Live URL</label>
            <input 
              name="liveUrl" 
              defaultValue={project.liveUrl}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-2">GitHub URL</label>
            <input 
              name="githubUrl" 
              defaultValue={project.githubUrl}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/5 w-fit">
          <input 
            type="checkbox" 
            name="featured" 
            id="featured" 
            defaultChecked={project.featured}
            className="w-5 h-5 accent-primary" 
          />
          <label htmlFor="featured" className="text-sm font-bold cursor-pointer">Featured Project</label>
        </div>

        <div className="pt-4">
          <CustomButton type="submit" size="lg" className="w-full gap-2" disabled={loading}>
            <Save size={18} /> {loading ? 'Saving...' : 'Update Project'}
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
