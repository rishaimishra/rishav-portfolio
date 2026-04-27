import React from 'react'
import { CustomButton } from '@/components/ui/CustomButton'
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">About Me</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Turning vision into <br /> <span className="text-primary">high-performance</span> reality.
          </h1>
          <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
            <p>
              I am a Senior Full Stack Architect with over 8 years of experience building high-performance, scalable digital solutions. My expertise lies at the intersection of robust backend engineering with Laravel and Node.js, and cutting-edge frontend architecture using Next.js and React.
            </p>
            <p>
              Throughout my career at companies like SRV Technology and Ambrossia Infotech, I have specialized in architecting complex SaaS platforms, designing resilient database schemas, and integrating secure financial systems. I don&apos;t just write code; I build business-critical infrastructure that drives conversion and scales with growth.
            </p>
          </div>
          <div className="mt-10">
            <CustomButton size="lg">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></CustomButton>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative z-10">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
              alt="Rishav Kumar"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <Briefcase className="text-primary" /> Professional Experience
        </h2>
        <div className="space-y-8">
          {[
            {
              role: 'Full Stack Developer',
              company: 'SRV Technology, Siliguri',
              period: 'Nov 2021 – Present',
              description: 'Architecting and developing scalable full-stack applications using Next.js, React, and Laravel. Specialized in database management (MySQL/PostgreSQL) and optimizing cloud deployments on AWS to ensure high availability and performance.'
            },
            {
              role: 'Full Stack Developer',
              company: 'Ambrossia Infotech, Kolkata',
              period: 'Sep 2019 – Jan 2021',
              description: 'Built high-conversion web applications using Laravel and Next.js. Focused on complex database schema design and seamless third-party payment gateway integrations to drive business revenue.'
            },
            {
              role: 'Backend Laravel Developer',
              company: 'Ambrossia Infotech, Kolkata',
              period: 'Aug 2018 – Jul 2019',
              description: 'Engineered robust backend systems with PHP and Laravel. Implemented advanced state management solutions and maintained high code quality through rigorous architectural reviews.'
            },
            {
              role: 'Backend PHP/Laravel Developer',
              company: 'Tecions Pvt. Ltd., Siliguri',
              period: 'Aug 2017 – Apr 2018',
              description: 'Developed core backend logic for secure authentication and authorization systems. Optimized MySQL database performance to handle high-traffic application demands.'
            }
          ].map((exp, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass border-white/5">
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-primary font-medium">{exp.period}</span>
              </div>
              <p className="text-foreground/80 font-semibold mb-2">{exp.company}</p>
              <p className="text-foreground/60">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
