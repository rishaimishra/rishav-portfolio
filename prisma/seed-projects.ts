const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const projects = [
    {
      title: 'ContractOps AI',
      slug: 'contractops-ai',
      description: 'An AI-driven contract management platform featuring automated workflows and secure document processing. Developed on Vercel AI Cloud, implementing AI Gateway for model switching and using the AI SDK for intelligent features.',
      techStack: ['Next.js', 'Vercel AI SDK', 'TypeScript', 'OpenAI APIs'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      featured: true
    },
    {
      title: 'Meeemsl Development Portal',
      slug: 'meeemsl-portal',
      description: 'A customized development and testing environment for enterprise applications. Involved system configuration, deployment management, and integration of core business modules.',
      techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
      featured: false
    },
    {
      title: 'GST/e-Tax Project',
      slug: 'gst-etax-project',
      description: 'An e-tax and invoicing system for goods and services featuring automated compliance and reporting tools. Designed and implemented scalable backend services; integrated third-party APIs for secure data exchange and verification.',
      techStack: ['Node.js', 'Next.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
      featured: true
    },
    {
      title: 'ACC-EPMS System',
      slug: 'acc-epms-system',
      description: 'Enterprise-grade Performance Management System (EPMS) designed to handle multiple departments. Includes modules for tracking objectives, key results (OKRs), and KPIs with automated calculation logic. Developed master data management, RBAC, and automated report generation.',
      techStack: ['PHP', 'Laravel', 'React.js', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      featured: true
    },
    {
      title: 'JobDaddy Portal',
      slug: 'jobdaddy-portal',
      description: 'Comprehensive job board and recruitment management system for matching candidates with employers. Features resume database parsing using OpenAI API. Built scalable full-stack architecture and recruiter/seeker dashboards.',
      techStack: ['PHP', 'Laravel', 'React.js', 'MySQL', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000',
      featured: false
    },
    {
      title: 'Pedif SaaS Landing Site',
      slug: 'pedif-saas',
      description: 'SAAS information website with integrated blog management and service details. Developed both frontend and backend; integrated third-party systems like Ghost blogger via API.',
      techStack: ['Next.js', 'Laravel', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000',
      featured: false
    },
    {
      title: 'Trackify Shopify App',
      slug: 'trackify-app',
      description: 'High-performance tracking plugin for Facebook (Meta), TikTok, and Snapchat pixels. Includes Server-Side Tracking (CAPI). Optimized database queries for high-volume order processing (100k+ variants).',
      techStack: ['Laravel', 'Vue.js', 'Shopify API', 'Meta CAPI'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
      featured: true
    }
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    })
  }
  console.log('Projects seeded successfully')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
