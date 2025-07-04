import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeFavicon } from '@/components/theme-favicon'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Angler Trading PLC',
  description: 'Your trusted partner in import, export, and wholesale trade.',
  keywords: ['import', 'export', 'wholesale', 'trade', 'ethiopia', 'ethiopian', 'import services', 'export services', 'wholesale trade', 'construction materials', 'hardware', 'metals', 'plumbing', 'vehicles', 'petroleum', 'coffee', 'tea'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/icons/light_icon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 