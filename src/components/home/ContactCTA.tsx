import React from 'react'
import { CustomButton } from '@/components/ui/CustomButton'
import Link from 'next/link'

export function ContactCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center glass border-primary/20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
            Have a project in mind? <br /> Let&apos;s build it together.
          </h2>
          <p className="text-lg text-foreground/60 max-w-xl mx-auto mb-10">
            Currently accepting new projects and consulting engagements. Get in touch to discuss your ideas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <CustomButton size="lg">Start a Conversation</CustomButton>
            </Link>
            <Link href="mailto:rishav@srvtechservices.com">
              <CustomButton variant="outline" size="lg">Email Me directly</CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
