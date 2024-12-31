'use client'

import { createContext, useContext, useEffect } from 'react'

const DarkModeContext = createContext<{ isDarkMode: boolean }>({ isDarkMode: false })

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Add dark mode class if system prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }

    // Listen for system dark mode changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <DarkModeContext.Provider value={{ isDarkMode: false }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext) 