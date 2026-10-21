import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sectors } from '@/lib/site'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-10 border-t border-border pt-8 lg:grid-cols-12">
          <p className="label pt-3 text-foreground lg:col-span-3">Error 404</p>
          <div className="lg:col-span-9">
            <h1 className="display-1">
              This page has <em>gone off course.</em>
            </h1>
            <p className="lead mt-8 max-w-xl">The page you&apos;re looking for doesn&apos;t exist or has moved. These routes are still open:</p>
            <ul className="mt-10 border-t border-border">
              {sectors.map((s) => (
                <li key={s.id} className="border-b border-border">
                  <Link href={`/services/${s.id}`} className="group flex items-center justify-between py-4">
                    <span className="font-serif text-2xl tracking-[-0.01em]">{s.title}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">{s.code}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10">
              <Link href="/">
                Back to the home page <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
