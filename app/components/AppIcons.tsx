import type { ReactNode } from "react";
import Link from "next/link";

// iOS-style app tile: rounded square with a soft shadow, ~22% corner radius.
export const TILE =
  "relative flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[22%] shadow-[0_6px_16px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform duration-150 group-hover:scale-[1.04] group-active:scale-90 sm:h-[68px] sm:w-[68px] lg:h-[72px] lg:w-[72px]";

const ITEM =
  "group flex w-full select-none flex-col items-center gap-1.5 rounded-xl no-underline outline-none focus-visible:ring-2 focus-visible:ring-white/80";

type AppIconProps = {
  label: string;
  glyph: ReactNode;
  /** Tailwind background classes for the tile (e.g. "bg-[#e60023]"). */
  tile: string;
  href?: string;
  onClick?: () => void;
  /** iOS hides dock labels — keep them for screen readers only. */
  hideLabel?: boolean;
};

export function AppIcon({
  label,
  glyph,
  tile,
  href,
  onClick,
  hideLabel = false,
}: AppIconProps) {
  const content = (
    <>
      <span className={`${TILE} ${tile}`}>{glyph}</span>
      <span
        className={
          hideLabel
            ? "sr-only"
            : "max-w-full truncate text-[11px] font-medium text-white no-underline drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] sm:text-xs"
        }
      >
        {label}
      </span>
    </>
  );

  if (href) {
    return href.startsWith("/") ? (
      <Link href={href} className={ITEM} aria-label={label}>
        {content}
      </Link>
    ) : (
      <a href={href} className={ITEM} aria-label={label}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={ITEM} aria-label={label}>
      {content}
    </button>
  );
}

export function PinterestGlyph() {
  return (
    <span className="font-serif text-[36px] font-bold italic leading-none text-white sm:text-[42px]">
      P
    </span>
  );
}

export function IrsGlyph() {
  return (
    <span className="text-[19px] font-bold leading-none tracking-tight text-[#12356b] sm:text-[22px]">
      IRS
    </span>
  );
}

export function NotesGlyph() {
  return (
    <span className="absolute inset-0 bg-white">
      <span className="absolute inset-x-0 top-0 h-[30%] bg-[#ffd60a]" />
      <span className="absolute left-[14%] right-[14%] top-[48%] h-[3px] rounded-full bg-neutral-300" />
      <span className="absolute left-[14%] right-[14%] top-[64%] h-[3px] rounded-full bg-neutral-300" />
      <span className="absolute left-[14%] right-[42%] top-[80%] h-[3px] rounded-full bg-neutral-300" />
    </span>
  );
}

export function PhotosGlyph() {
  const petals = [
    "#ff3b30",
    "#ff9500",
    "#ffcc00",
    "#34c759",
    "#00c7be",
    "#007aff",
    "#5856d6",
    "#ff2d55",
  ];
  return (
    <svg viewBox="0 0 100 100" className="h-[66%] w-[66%]" aria-hidden="true">
      {petals.map((color, i) => (
        <ellipse
          key={color}
          cx="50"
          cy="27"
          rx="11"
          ry="22"
          fill={color}
          opacity="0.85"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function BooksGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" aria-hidden="true">
      <path
        d="M12 6.4C9.9 5 7.6 4.3 4 4.3v13.4c3.6 0 5.9.7 8 2.1 2.1-1.4 4.4-2.1 8-2.1V4.3c-3.6 0-5.9.7-8 2.1Z"
        fill="#fff"
      />
      <path
        d="M12 6.4v13.4"
        stroke="#ff9500"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[48%] w-[48%]" aria-hidden="true">
      <path
        fill="#fff"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"
      />
    </svg>
  );
}

export function GumroadGlyph() {
  return (
    <span className="text-[36px] font-black leading-none text-black sm:text-[42px]">
      g
    </span>
  );
}

export function AntiworkGlyph() {
  return (
    <span className="text-[26px] font-black leading-none tracking-tighter text-white sm:text-[30px]">
      A
    </span>
  );
}

export function GitHubGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[56%] w-[56%]" aria-hidden="true">
      <path
        fill="#111"
        d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"
      />
    </svg>
  );
}

export function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[58%] w-[58%]"
      fill="none"
      stroke="#fff"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.8" r="1.15" fill="#fff" stroke="none" />
    </svg>
  );
}

export function CalendarGlyph({ now }: { now: Date | null }) {
  const weekday = now
    ? now.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
    : "";
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center bg-white">
      <span className="text-[9px] font-semibold tracking-wide text-[#ff3b30] sm:text-[10px]">
        {weekday}
      </span>
      <span className="text-[24px] font-light leading-none text-neutral-900 sm:text-[28px]">
        {now ? now.getDate() : ""}
      </span>
    </span>
  );
}

/** Decorative iOS status-bar glyphs (signal, wifi, battery). */
export function StatusGlyphs() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <svg viewBox="0 0 18 12" className="h-[11px] w-[17px]" fill="#fff">
        <rect x="0" y="8" width="3" height="4" rx="1" />
        <rect x="4.5" y="6" width="3" height="6" rx="1" />
        <rect x="9" y="3.5" width="3" height="8.5" rx="1" />
        <rect x="13.5" y="1" width="3" height="11" rx="1" />
      </svg>
      <svg
        viewBox="0 0 16 12"
        className="h-[11px] w-[15px]"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M1 4.2A10.5 10.5 0 0 1 15 4.2" />
        <path d="M3.6 7A6.8 6.8 0 0 1 12.4 7" />
        <path d="M6.2 9.7a3.1 3.1 0 0 1 3.6 0" />
      </svg>
      <svg viewBox="0 0 26 12" className="h-[11px] w-[24px]" aria-hidden="true">
        <rect
          x="0.5"
          y="0.5"
          width="21"
          height="11"
          rx="3.5"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.5"
        />
        <rect x="2" y="2" width="15" height="8" rx="2" fill="#fff" />
        <path d="M23.5 4.2v3.6a2 2 0 0 0 0-3.6Z" fill="#fff" fillOpacity="0.5" />
      </svg>
    </span>
  );
}
