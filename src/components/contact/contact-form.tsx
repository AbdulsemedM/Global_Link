"use client"

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { sectors, site } from '@/lib/site'
import { cn } from '@/lib/utils'

type Fields = { name: string; company: string; email: string; phone: string; sector: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (f.phone && !/^[+\d\s()-]{7,}$/.test(f.phone)) e.phone = 'Please enter a valid phone number.'
  if (f.message.trim().length < 20) e.message = 'Tell us a little more (at least 20 characters).'
  return e
}

function composeEmail(f: Fields) {
  const sector = sectors.find((s) => s.id === f.sector)?.title ?? 'General'
  const subject = `${sector} inquiry — ${f.name}${f.company ? ` (${f.company})` : ''}`
  const body = [
    f.message.trim(),
    '',
    '—',
    `Name: ${f.name}`,
    f.company && `Company: ${f.company}`,
    `Email: ${f.email}`,
    f.phone && `Phone: ${f.phone}`,
    `Sector: ${sector}`,
  ]
    .filter(Boolean)
    .join('\n')
  return { subject, body, href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` }
}

export function ContactForm() {
  const params = useSearchParams()
  const preset = params.get('sector')
  const [fields, setFields] = useState<Fields>({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: sectors.some((s) => s.id === preset) ? preset! : '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState<ReturnType<typeof composeEmail> | null>(null)
  const [copied, setCopied] = useState(false)

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid}`)?.focus()
      return
    }
    const email = composeEmail(fields)
    window.location.href = email.href
    setSent(email)
  }

  const copy = async () => {
    if (!sent) return
    try {
      await navigator.clipboard.writeText(`To: ${site.email}\nSubject: ${sent.subject}\n\n${sent.body}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the email address is still shown for manual sending.
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border-t border-border pt-8"
            role="status"
          >
            <p className="label text-foreground">Inquiry prepared</p>
            <h2 className="display-3 mt-6">Your inquiry is ready.</h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              We&apos;ve opened your email app with your message addressed to{' '}
              <a href={`mailto:${site.email}`} className="text-foreground underline underline-offset-4">
                {site.email}
              </a>
              . Press send and a trade specialist will reply within one business day.
            </p>
            <p className="label mt-10">Email app didn&apos;t open?</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button type="button" size="md" onClick={copy}>
                {copied ? 'Copied to clipboard' : 'Copy message'}
              </Button>
              <Button asChild size="md" variant="outline">
                <a href={sent.href}>Try again</a>
              </Button>
              <Button type="button" size="md" variant="outline" onClick={() => setSent(null)}>
                Edit inquiry
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate>
            <div className="grid gap-x-8 sm:grid-cols-2">
              <Field id="name" label="Full name" error={errors.name} required>
                <input id="field-name" autoComplete="name" value={fields.name} onChange={update('name')} className={inputClass(errors.name)} {...aria('name', errors.name)} />
              </Field>
              <Field id="company" label="Company" hint="Optional">
                <input id="field-company" autoComplete="organization" value={fields.company} onChange={update('company')} className={inputClass()} />
              </Field>
              <Field id="email" label="Work email" error={errors.email} required>
                <input id="field-email" type="email" autoComplete="email" inputMode="email" value={fields.email} onChange={update('email')} className={inputClass(errors.email)} {...aria('email', errors.email)} />
              </Field>
              <Field id="phone" label="Phone" hint="Optional" error={errors.phone}>
                <input id="field-phone" type="tel" autoComplete="tel" inputMode="tel" value={fields.phone} onChange={update('phone')} className={inputClass(errors.phone)} {...aria('phone', errors.phone)} />
              </Field>
            </div>

            <fieldset className="mt-10">
              <legend className="label text-foreground">Subject of inquiry</legend>
              <div className="mt-4 grid grid-cols-1 border-l border-t border-border sm:grid-cols-2">
                {[...sectors.map((s) => ({ id: s.id, title: s.title, code: s.code })), { id: 'other', title: 'Something else', code: '—' }].map((s) => (
                  <label key={s.id} className="cursor-pointer border-b border-r border-border">
                    <input type="radio" name="sector" value={s.id} checked={fields.sector === s.id} onChange={update('sector')} className="peer sr-only" />
                    <span className="flex items-center justify-between gap-4 px-4 py-3 text-[15px] transition-colors hover:bg-foreground/[0.03] peer-checked:bg-brand-500 peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:-outline-offset-2 peer-focus-visible:outline-ring">
                      {s.title}
                      <span className="font-mono text-[10px] tracking-[0.1em] opacity-60">{s.code}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-10">
              <Field id="message" label="Message" error={errors.message} required>
                <textarea
                  id="field-message"
                  rows={5}
                  value={fields.message}
                  onChange={update('message')}
                  placeholder="Product or category, quantity, specifications, delivery location and timeline."
                  className={cn(inputClass(errors.message), 'h-auto resize-y py-3 leading-relaxed')}
                  {...aria('message', errors.message)}
                />
              </Field>
            </div>

            <div className="mt-10 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                Sending opens your email app with the inquiry addressed to {site.email}.
              </p>
              <Button type="submit">
                Send inquiry <ArrowRight />
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function aria(id: string, error?: string) {
  return {
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `error-${id}` : undefined,
  } as const
}

function inputClass(error?: string) {
  return cn(
    'h-12 w-full rounded-none border-0 border-b bg-transparent px-0 text-[17px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus-visible:outline-none',
    error ? 'border-red-600 dark:border-red-400' : 'border-input'
  )
}

function Field({
  id,
  label,
  hint,
  error,
  required,
  children,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="pt-6">
      <label htmlFor={`field-${id}`} className="label flex items-baseline justify-between text-foreground">
        <span>
          {label}
          {required && <span className="text-muted-foreground"> *</span>}
        </span>
        {hint && <span className="normal-case tracking-normal text-muted-foreground">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`error-${id}`} className="mt-2 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
