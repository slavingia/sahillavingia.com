"use client";

import Image from "next/image";

interface MDXImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function MDXImage({ src, alt, width, height, className }: MDXImageProps) {
    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                width={width || 800}
                height={height || 600}
                className="w-full h-auto"
            />
        </div>
    );
} 