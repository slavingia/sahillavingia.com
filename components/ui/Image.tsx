"use client";

import { useState } from 'react'
import NextImage from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useDarkMode } from "@/lib/DarkModeContext"
import { cn } from "@/lib/utils"

interface ImageProps {
    src: string
    alt: string
    className?: string
    tooltip?: string
    invertInDark?: boolean
}

export default function Image({ src, alt, className, tooltip, invertInDark = false }: ImageProps) {
    const [isZoomed, setIsZoomed] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { isDarkMode } = useDarkMode()

    const shouldInvert = isDarkMode && invertInDark

    return (
        <div
            className="w-full relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {tooltip && isHovering && (
                <div
                    className="absolute z-50 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm rounded-md whitespace-nowrap pointer-events-none transition-opacity duration-150 left-1/2 -translate-x-1/2 -top-10"
                    style={{
                        opacity: isHovering ? 1 : 0
                    }}
                >
                    {tooltip}
                </div>
            )}

            <div className="relative">
                {isLoading && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-neutral-800 rounded-lg" />
                )}
                <NextImage
                    src={src}
                    alt={alt}
                    width={1200}
                    height={630}
                    draggable={false}
                    className={cn(
                        "w-full h-auto transition-all cursor-zoom-in rounded-lg",
                        shouldInvert && "filter invert hue-rotate-180",
                        isLoading ? "opacity-0" : "opacity-100",
                        className
                    )}
                    onClick={() => setIsZoomed(true)}
                    onLoad={() => setIsLoading(false)}
                    priority={true}
                />
            </div>

            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsZoomed(false)}
                        className="fixed inset-0 bg-black/90 z-50 cursor-zoom-out flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative w-full max-w-7xl"
                        >
                            <NextImage
                                src={src}
                                alt={alt}
                                width={1920}
                                height={1080}
                                className={cn(
                                    "w-full h-auto object-contain",
                                    shouldInvert && "filter invert hue-rotate-180"
                                )}
                                quality={100}
                                priority={true}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
} 