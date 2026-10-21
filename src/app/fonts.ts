import localFont from 'next/font/local'

// Self-hosted through next/font: the files are preloaded and each family gets a metric-matched
// fallback, so headlines don't shift when the web font arrives.

// Newsreader (OFL), instanced at optical size 56 with weights 300–500 and subset to Latin + typographic
// punctuation using fonttools — every serif use on the site is display-sized, and this cuts 279 KB to 101 KB.
export const newsreader = localFont({
  src: [
    { path: './fonts/newsreader-normal.woff2', weight: '300 500', style: 'normal' },
    { path: './fonts/newsreader-italic.woff2', weight: '300 500', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
})

export const instrumentSans = localFont({
  src: '../../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2',
  weight: '400 700',
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: 'Arial',
})

export const plexMono = localFont({
  src: [
    { path: '../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mono',
  // Metadata labels: if the 15 KB file isn't ready at first paint, keep the system monospace rather than
  // swapping later and re-wrapping label rows (avoids layout shift)
  display: 'optional',
  adjustFontFallback: false,
})
