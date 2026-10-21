import type { Metadata } from 'next'
import { site } from './site'

/**
 * Builds a page's metadata with a canonical URL and matching Open Graph / Twitter tags.
 * Next.js replaces (rather than merges) `openGraph` per page, so every page goes through here.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = '/opengraph-image.png',
}: {
  title: string
  description: string
  path: string
  keywords?: string[]
  /** Social share image; defaults to the site-wide card */
  image?: string
}): Metadata {
  const url = new URL(path, site.url).toString()
  const images = [{ url: image, width: 1200, height: 630, alt: title }]
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: site.name,
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images,
    },
  }
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString()

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export const organizationRef = { '@id': `${site.url}/#organization` }
