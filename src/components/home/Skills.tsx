"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Server, 
  Smartphone, 
  Zap 
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: ['Laravel', 'Node.js', 'PHP', 'Express', 'Prisma']
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6 text-blue-500" />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Others',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    skills: ['REST APIs', 'GraphQL', 'Git/GitHub', 'Vercel', 'Docker']
  }
]

export function Skills() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Technical Expertise</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-white/5 bg-background/50 hover:border-primary/50 transition-all group"
            >
              <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-foreground/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
