import React from 'react'
import { prisma } from '@/lib/prisma'
import { CustomButton } from '@/components/ui/CustomButton'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Projects | Rishav Kumar",
  description: "A portfolio of high-converting web applications and SaaS products.",
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="container mx-auto px-6 py-32">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Built to Scale.</h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
          Explore my portfolio of web applications, SaaS products, and open-source contributions.
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20 glass rounded-[2rem]">
          <p className="text-foreground/50">No projects found in the database yet.</p>
          <p className="text-sm mt-2 text-primary">Login to admin panel to add your first project.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group glass rounded-[2rem] overflow-hidden border-white/5 hover:border-primary/30 transition-all flex flex-col">
              <Link href={`/projects/${project.slug}`} className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || 'https://via.placeholder.com/600x400'}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(t => (
                    <span key={t} className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 rounded bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                </Link>
                <p className="text-foreground/60 text-sm mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link href={project.liveUrl} className="p-2 glass rounded-full hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link href={project.githubUrl} className="p-2 glass rounded-full hover:text-primary transition-colors">
                        <GithubIcon className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
