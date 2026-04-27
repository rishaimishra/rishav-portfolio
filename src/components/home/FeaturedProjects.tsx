"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CustomButton } from '@/components/ui/CustomButton'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    title: 'ContractOps AI',
    slug: 'contractops-ai',
    description: 'An AI-driven contract management platform featuring automated workflows and secure document processing built on Vercel AI Cloud.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tech: ['Next.js', 'Vercel AI SDK', 'TypeScript', 'OpenAI'],
    live: '#',
    github: '#'
  },
  {
    title: 'GST/e-Tax System',
    slug: 'gst-etax-project',
    description: 'An automated e-tax and invoicing system featuring secure compliance and reporting tools with scalable backend services.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    tech: ['Node.js', 'Next.js', 'MySQL', 'APIs'],
    live: '#',
    github: '#'
  },
  {
    title: 'ACC-EPMS Enterprise',
    slug: 'acc-epms-system',
    description: 'Enterprise Performance Management System with granular RBAC, OKRs, and automated reporting for multi-departmental tracking.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tech: ['Laravel', 'React.js', 'MySQL', 'Analytics'],
    live: '#',
    github: '#'
  },
  {
    title: 'Trackify Shopify App',
    slug: 'trackify-app',
    description: 'High-performance pixel tracking plugin with Server-Side Tracking (CAPI) for high-volume order processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    tech: ['Laravel', 'Vue.js', 'Shopify API', 'Meta CAPI'],
    live: '#',
    github: '#'
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Featured Work</h2>
            <p className="text-foreground/60 max-w-xl">
              A selection of my recent high-impact projects, combining robust engineering with intuitive design.
            </p>
          </div>
          <Link href="/projects">
            <CustomButton variant="outline">View All Projects</CustomButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <Link href={`/projects/${project.slug}`} className="relative block aspect-video overflow-hidden rounded-3xl border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:scale-110 transition-transform">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                </Link>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <Link href={`/projects/${project.slug}`} className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                  View Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
