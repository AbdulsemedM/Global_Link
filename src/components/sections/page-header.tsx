import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Crumb = { name: string; href: string }

/** Opening block for inner pages: breadcrumb, serif title, intro, and an optional full-width photograph. */
export function PageHeader({
  crumbs,
  label,
  title,
  intro,
  aside,
  image,
  className,
}: {
  crumbs: Crumb[]
  label: string
  title: React.ReactNode
  intro?: React.ReactNode
  /** Rendered under the intro in the right-hand column (buttons, fact sheets) */
  aside?: React.ReactNode
  image?: { src: string; alt: string; caption?: string }
  className?: string
}) {
  return (
    <section className={cn('pb-16 pt-10 md:pb-20 md:pt-14', className)}>
      <div className="container">
        <nav aria-label="Breadcrumb">
          <ol className="label flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="text-foreground">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-foreground">
                    {c.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 grid gap-10 border-t border-foreground pt-8 md:mt-20 lg:grid-cols-12">
          <p className="label pt-3 text-foreground lg:col-span-3">{label}</p>
          <div className="lg:col-span-9">
            <h1 className="display-1">{title}</h1>
            {(intro || aside) && (
              <div className="mt-10 grid gap-8 md:grid-cols-9">
                {intro && <p className="lead md:col-span-6">{intro}</p>}
                {aside && <div className="md:col-span-9">{aside}</div>}
              </div>
            )}
          </div>
        </div>

        {image && (
          <figure className="mt-14 md:mt-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-muted md:aspect-[21/9]">
              <Image src={image.src} alt={image.alt} fill loading="eager" sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover" />
            </div>
            {image.caption && <figcaption className="label mt-4 normal-case tracking-[0.04em]">{image.caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  )
}
