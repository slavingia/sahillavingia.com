"use client";

import NextImage from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
    return (
        <div className="w-[95%] mx-auto">
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