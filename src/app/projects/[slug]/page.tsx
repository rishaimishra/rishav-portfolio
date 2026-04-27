import React from 'react'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import { CustomButton } from '@/components/ui/CustomButton'
import { ExternalLink, ArrowLeft, Calendar, Tag } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import Link from 'next/link'
import Image from 'next/image'

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const project = await prisma.project.findUnique({
    where: { slug }
  })

  if (!project) notFound()

  return (
    <div className="container mx-auto px-6 py-32">
      <Link href="/projects" className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-12 group w-fit">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/5 mb-12 shadow-2xl relative">
            <Image
              src={project.image || 'https://via.placeholder.com/1200x800'}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">{project.title}</h1>
          
          <div className="prose prose-invert max-w-none text-foreground/70 text-lg leading-relaxed">
            <p className="whitespace-pre-wrap">{project.description}</p>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-10">
          <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4 flex items-center gap-2">
                <Tag size={14} /> Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="py-1 px-3 rounded-lg bg-primary/10 text-primary text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4 flex items-center gap-2">
                <Calendar size={14} /> Date Created
              </h3>
              <p className="font-medium">{new Date(project.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}</p>
            </div>

            <div className="pt-4 space-y-4">
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank">
                  <CustomButton className="w-full gap-2">
                    Live Demo <ExternalLink size={18} />
                  </CustomButton>
                </Link>
              )}
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank">
                  <CustomButton variant="outline" className="w-full gap-2">
                    Source Code <GithubIcon className="w-5 h-5" />
                  </CustomButton>
                </Link>
              )}
            </div>
          </div>
          
          <div className="p-8 rounded-[2.5rem] bg-primary/10 border border-primary/20">
            <h3 className="font-bold mb-4">Interested in something similar?</h3>
            <p className="text-sm text-foreground/60 mb-6">I can help you build high-performance applications tailored to your needs.</p>
            <Link href="/contact">
              <CustomButton size="sm" className="w-full">Start a Project</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
