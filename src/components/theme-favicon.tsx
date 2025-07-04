"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeFavicon() {
  const { theme } = useTheme()

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
    if (favicon) {
      favicon.href = theme === 'dark' ? '/icons/dark_icon.ico' : '/icons/light_icon.ico'
    } else {
      const newFavicon = document.createElement('link')
      newFavicon.rel = 'icon'
      newFavicon.href = theme === 'dark' ? '/icons/dark_icon.ico' : '/icons/light_icon.ico'
      document.head.appendChild(newFavicon)
    }
  }, [theme])

  return null
} 