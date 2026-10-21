"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { lanes } from '@/lib/site'
import { cn } from '@/lib/utils'
import { MAP_HEIGHT, MAP_WIDTH, ethiopiaPath, graticulePath, places, routePaths } from './map-data'

type RouteKey = (typeof lanes)[number]['route']

// Label placement relative to each point: [x offset px, y offset px, text-align]
const LABELS: { key: keyof typeof places; name: string; code: string; dx: number; dy: number; align?: 'right' }[] = [
  { key: 'addis', name: 'Addis Ababa', code: 'Head office', dx: -12, dy: -4, align: 'right' },
  { key: 'djibouti', name: 'Djibouti', code: 'DJ', dx: 10, dy: -14 },
  { key: 'hargeisa', name: 'Somalia', code: 'SO', dx: 10, dy: 2 },
  { key: 'nairobi', name: 'Kenya', code: 'KE', dx: 10, dy: -4 },
  { key: 'karachi', name: 'Pakistan', code: 'PK', dx: 10, dy: -6 },
  { key: 'jebelAli', name: 'UAE', code: 'AE', dx: -10, dy: -24, align: 'right' },
  { key: 'shanghai', name: 'China', code: 'CN', dx: -10, dy: -24, align: 'right' },
]

// Overland lanes are dashed; sea lanes solid
const isRoad = (mode: string) => mode === 'Road'
// Points drawn as small markers: customs gateways and the Moyale border crossing
const GATEWAYS = ['direDawa', 'jijiga', 'moyale'] as const
const DESTINATIONS = ['djibouti', 'hargeisa', 'nairobi', 'karachi', 'jebelAli', 'shanghai'] as const

const pct = (x: number, total: number) => `${(x / total) * 100}%`

export function TradeNetwork() {
  const [active, setActive] = useState<RouteKey | null>(null)

  return (
    <div>
      <figure>
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card" style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}>
          {/* Land, drawn from a cached SVG used as a mask so it can take the theme colour */}
          <div
            aria-hidden
            className="absolute inset-0 bg-foreground/[0.11]"
            style={{
              maskImage: 'url(/images/map/land.svg)',
              WebkitMaskImage: 'url(/images/map/land.svg)',
              maskSize: '100% 100%',
              WebkitMaskSize: '100% 100%',
            }}
          />
          <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="absolute inset-0 h-full w-full" role="img" aria-label="Map of Angler Trading's trade lanes: by road to Djibouti, Somalia and Kenya, and by sea via Djibouti to Pakistan, the UAE and China">
            <path d={graticulePath} fill="none" className="stroke-foreground/[0.07]" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <path d={ethiopiaPath} className="fill-accent/20 stroke-accent/60" strokeWidth={1} vectorEffect="non-scaling-stroke" />

            {lanes.map((lane, i) => {
              const dim = active && active !== lane.route
              return (
                <g key={lane.ref} className="transition-opacity duration-300" opacity={dim ? 0.18 : 1}>
                  <path d={routePaths[lane.route]} fill="none" className="stroke-foreground/25" strokeWidth={1} vectorEffect="non-scaling-stroke" />
                  <motion.path
                    d={routePaths[lane.route]}
                    fill="none"
                    className="stroke-accent"
                    strokeWidth={active === lane.route ? 2.5 : 1.6}
                    strokeDasharray={isRoad(lane.mode) ? '5 4' : undefined}
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    // Sea lanes draw themselves in; road lanes fade in (pathLength would override their dashes)
                    initial={isRoad(lane.mode) ? { opacity: 0 } : { pathLength: 0 }}
                    whileInView={isRoad(lane.mode) ? { opacity: 1 } : { pathLength: 1 }}
                    viewport={{ once: true, margin: '-15%' }}
                    transition={{ duration: 2.2, delay: 0.3 + i * 0.18, ease: [0.45, 0, 0.2, 1] }}
                  />
                </g>
              )
            })}

            {DESTINATIONS.map((k) => (
              <rect key={k} x={places[k][0] - 3.5} y={places[k][1] - 3.5} width={7} height={7} className="fill-background stroke-foreground" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
            ))}
            {GATEWAYS.map((k) => (
              <circle key={k} cx={places[k][0]} cy={places[k][1]} r={2.5} className="fill-foreground" />
            ))}
            <circle cx={places.addis[0]} cy={places.addis[1]} r={11} className="fill-none stroke-accent/50" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            <circle cx={places.addis[0]} cy={places.addis[1]} r={5.5} className="fill-accent" />
          </svg>

          {/* HTML labels keep a constant, legible size at every map width */}
          {LABELS.map((l) => (
            <span
              key={l.key}
              className={cn(
                'pointer-events-none absolute whitespace-nowrap font-mono text-[9px] uppercase leading-tight tracking-[0.08em] sm:text-[11px]',
                l.align === 'right' && '-translate-x-full text-right'
              )}
              style={{ left: `calc(${pct(places[l.key][0], MAP_WIDTH)} + ${l.dx}px)`, top: `calc(${pct(places[l.key][1], MAP_HEIGHT)} + ${l.dy}px)` }}
            >
              <span className={l.key === 'addis' ? 'font-medium text-accent' : 'text-foreground'}>{l.name}</span>
              <span className="hidden text-muted-foreground sm:block">{l.code}</span>
            </span>
          ))}
        </div>

        <figcaption className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-6 border-t border-dashed border-accent" /> Road
          </span>
          <span className="flex items-center gap-2">
            <span className="h-px w-6 bg-accent" /> Sea
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 border border-foreground bg-background" /> Market
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" /> Customs / border
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" /> Head office
          </span>
          <span className="ml-auto hidden normal-case tracking-[0.04em] md:block">Natural Earth projection · routes indicative</span>
        </figcaption>
      </figure>

      <div className="mt-14">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Principal trade lanes</caption>
          <thead>
            <tr className="label border-b border-border">
              <th scope="col" className="w-16 py-3 font-medium sm:w-20">Ref</th>
              <th scope="col" className="py-3 font-medium">Route</th>
              <th scope="col" className="hidden py-3 font-medium md:table-cell">Via</th>
              <th scope="col" className="hidden py-3 font-medium sm:table-cell">Principal cargo</th>
              <th scope="col" className="hidden py-3 text-right font-medium sm:table-cell">Mode</th>
            </tr>
          </thead>
          <tbody>
            {lanes.map((lane) => (
              <tr
                key={lane.ref}
                tabIndex={0}
                onMouseEnter={() => setActive(lane.route)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(lane.route)}
                onBlur={() => setActive(null)}
                className={cn(
                  'cursor-default border-b border-border outline-none transition-colors duration-200',
                  active === lane.route ? 'bg-foreground/[0.04]' : ''
                )}
              >
                <td className="py-5 font-mono text-xs text-muted-foreground">{lane.ref}</td>
                <td className="py-5 font-serif text-lg tracking-[-0.01em] sm:text-xl">
                  {lane.from} <span className="text-muted-foreground">→</span> {lane.to}
                  <span className="mt-1 block font-sans text-sm tracking-normal text-muted-foreground sm:hidden">{lane.cargo}</span>
                </td>
                <td className="hidden py-5 text-sm text-muted-foreground md:table-cell">{lane.via}</td>
                <td className="hidden py-5 text-sm sm:table-cell">{lane.cargo}</td>
                <td className="hidden py-5 text-right font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground sm:table-cell">
                  {lane.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
