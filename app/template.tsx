'use client'

import { motion } from 'framer-motion'
import { useDarkMode } from '@/lib/DarkModeContext'

export default function Template({ children }: { children: React.ReactNode }) {
    const { isDarkMode } = useDarkMode()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={isDarkMode ? 'dark' : ''}
        >
            <div className="bg-white dark:bg-black min-h-screen">
                {children}
            </div>
        </motion.div>
    )
} 