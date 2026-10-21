"use client"

import { useEffect, useState } from 'react'

const TIME_ZONE = 'Africa/Addis_Ababa'

// Office hours in East Africa Time: weekday → [open hour, close hour]; missing days are closed
const HOURS: Record<number, [number, number]> = { 1: [9, 18], 2: [9, 18], 3: [9, 18], 4: [9, 18], 5: [9, 18], 6: [9, 13] }

function addisNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  const hour = Number(get('hour'))
  const hours = HOURS[day]
  return { time: `${get('hour')}:${get('minute')}`, open: !!hours && hour >= hours[0] && hour < hours[1] }
}

/** Current time at the Addis Ababa office, with an open/closed indicator. Renders after mount to avoid hydration mismatches. */
export function LocalTime({ showStatus = true, className }: { showStatus?: boolean; className?: string }) {
  const [now, setNow] = useState<ReturnType<typeof addisNow> | null>(null)

  useEffect(() => {
    setNow(addisNow())
    const id = setInterval(() => setNow(addisNow()), 20_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={className}>
      <span className="tabular-nums">{now?.time ?? '--:--'}</span> EAT
      {showStatus && now && (
        <span className="ml-3 inline-flex items-center gap-1.5">
          <span className={now.open ? 'h-1.5 w-1.5 rounded-full bg-brand-500' : 'h-1.5 w-1.5 rounded-full bg-current opacity-40'} />
          {now.open ? 'Office open' : 'Office closed'}
        </span>
      )}
    </span>
  )
}
