import type { MetadataRoute } from 'next'
import { sectors, site } from '@/lib/site'

// Pre-rendered at build time for the static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly') => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  })

  return [
    page('/', 1, 'weekly'),
    page('/services', 0.9, 'monthly'),
    ...sectors.map((s) => page(`/services/${s.id}`, 0.8, 'monthly')),
    page('/about', 0.7, 'monthly'),
    page('/contact', 0.7, 'monthly'),
  ]
}
