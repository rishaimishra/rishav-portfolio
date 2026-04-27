"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CustomButton } from '@/components/ui/CustomButton'
import { Mail, MessageSquare, Send, User } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
      
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="container mx-auto px-6 py-20 min-h-screen flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Let&apos;s talk <br /> about your <span className="text-primary">next idea</span>.
          </h1>
          <p className="text-lg text-foreground/60 mb-12 max-w-md">
            Whether you have a specific project in mind or just want to say hi, I&apos;d love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-foreground/70">
              <div className="p-3 rounded-xl glass text-primary"><Mail /></div>
              <span>rishav@srvtechservices.com</span>
            </div>
            <div className="flex items-center gap-4 text-foreground/70">
              <div className="p-3 rounded-xl glass text-primary"><MessageSquare /></div>
              <span>Available for 1-on-1 consultations</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative">
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
              <p className="text-foreground/60">I&apos;ll get back to you within 24 hours.</p>
              <CustomButton className="mt-8" onClick={() => setStatus('idle')}>Send Another</CustomButton>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-foreground/50">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-foreground/50">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  <input 
                    name="email"
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-widest text-foreground/50">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-primary outline-none transition-all resize-none"
                />
              </div>

              <CustomButton 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </CustomButton>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </motion.div>
    </div>
  )
}
