'use client'

import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '@/lib/DarkModeContext'
import { motion } from 'framer-motion'

export default function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-all duration-200 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5" />
            )}
        </motion.button>
    )
} 