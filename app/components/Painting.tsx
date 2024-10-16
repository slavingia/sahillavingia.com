"use client";

import { useState, useEffect, useRef } from "react";

interface PaintingProps {
  src: string;
  alt: string;
}

export default function Painting({ src, alt }: PaintingProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const moveX = (0.5 - x) * (1200 - rect.width);
    const moveY = (0.5 - y) * (900 - rect.height);

    setMousePosition({ x: moveX, y: moveY });
  };

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setIsZoomed(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setMousePosition({ x: 0, y: 0 });
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ height: "320px" }}
    >
      <img
        src={src}
        className="painting w-full h-full object-cover transition-transform duration-300 origin-center absolute"
        alt={alt}
        style={{
          transform: isZoomed
            ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(3)`
            : "none",
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
}
