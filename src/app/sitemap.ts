import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://rishav.srvtechservices.com'

  let projectUrls: any[] = []

  try {
    const projects = await prisma.project.findMany({
      select: { slug: true, updatedAt: true }
    })

    type ProjectSummary = {
      slug: string;
      updatedAt: Date;
    }

    projectUrls = projects.map((p: ProjectSummary) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: p.updatedAt,
    }))
  } catch (error) {
    console.error('Error fetching projects for sitemap:', error)
    // Continue with static URLs if DB fails
  }

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...projectUrls,
  ]
}
