"use client";

import NextImage from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    tooltip?: string;
}

export default function Image({ src, alt, className, tooltip }: ImageProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="w-[95%] mx-auto relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {tooltip && isHovering && (
                <div
                    className="absolute z-50 px-3 duration-300 py-2 bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-md whitespace-nowrap pointer-events-none transition-opacity duration-150 left-1/2 -translate-x-1/2 -top-10"
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
                className={cn("w-full h-auto", className)}
                draggable={false}
            />
        </div>
    );
} 