"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { CustomButton } from '@/components/ui/CustomButton'
import { ArrowRight, Code, Layout, Server } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
            Available for New Projects
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Future</span> <br className="hidden md:block" /> with Precision.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
            Hi, I&apos;m <span className="text-foreground font-semibold">Rishav Kumar</span>. A Full Stack Architect crafting high-performance, visually stunning web applications with Laravel, Next.js, and React.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton size="lg" className="group">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </CustomButton>
            <CustomButton variant="outline" size="lg">
              Download CV
            </CustomButton>
          </div>
        </motion.div>

        {/* Tech Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all"
        >
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6" />
            <span className="font-bold tracking-tighter">NEXT.JS</span>
          </div>
          <div className="flex items-center gap-2">
            <Layout className="w-6 h-6" />
            <span className="font-bold tracking-tighter">REACT</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-6 h-6" />
            <span className="font-bold tracking-tighter">LARAVEL</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
