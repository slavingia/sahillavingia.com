'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useDarkMode } from '@/lib/DarkModeContext'

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const { isDarkMode } = useDarkMode()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] dark:h-[5px] bg-gray-700 dark:bg-neutral-300 z-50"
            style={{
                scaleX: scrollYProgress,
                transformOrigin: "0%"
            }}
        />
    )
} 