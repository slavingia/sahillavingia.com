"use client";

import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDarkMode } from "@/lib/DarkModeContext";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    tooltip?: string;
    invertInDark?: boolean;
}

export default function Image({
    src,
    alt,
    className,
    tooltip,
    invertInDark = false
}: ImageProps) {
    const [isHovering, setIsHovering] = useState(false);
    const { isDarkMode } = useDarkMode();

    const shouldInvert = isDarkMode && invertInDark;

    return (
        <div
            className="w-[95%] mx-auto relative"
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
            <NextImage
                src={src}
                alt={alt}
                width={800}
                height={800}
                className={cn(
                    "w-full h-auto transition-all",
                    shouldInvert && "filter invert hue-rotate-180",
                    className
                )}
                draggable={false}
            />
        </div>
    );
} 