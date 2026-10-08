import type { ReactNode } from "react";
import Link from "next/link";

// iOS-style app tile: rounded square, soft shadow, ~22% corner radius (Apple's
// icon mask). Real icon artwork sits inside it; only Antiwork has no artwork of
// its own, so it draws its logo mark instead.
export const TILE =
  "relative flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-[22%] shadow-[0_6px_16px_rgba(0,0,0,0.28)] ring-1 ring-black/5 transition-transform duration-150 group-hover:scale-[1.04] group-active:scale-90 sm:h-[68px] sm:w-[68px] lg:h-[72px] lg:w-[72px]";

const ITEM =
  "group flex w-full select-none flex-col items-center gap-1.5 rounded-xl no-underline outline-none focus-visible:ring-2 focus-visible:ring-white/80";

type AppIconProps = {
  label: string;
  /** Real app-icon artwork, e.g. "/icons/pinterest.png". */
  img?: string;
  /** Inline glyph, for the one app with no artwork to download. */
  glyph?: ReactNode;
  /** Extra Tailwind classes for the tile (background for glyph-only tiles). */
  tile?: string;
  href?: string;
  onClick?: () => void;
  /** iOS hides dock labels — keep them for screen readers only. */
  hideLabel?: boolean;
};

export function AppIcon({
  label,
  img,
  glyph,
  tile = "",
  href,
  onClick,
  hideLabel = false,
}: AppIconProps) {
  const content = (
    <>
      <span className={`${TILE} ${tile}`}>
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt=""
            draggable={false}
            className="h-full w-full object-cover"
          />
        ) : (
          glyph
        )}
      </span>
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

/** Antiwork's own logo mark — the two-triangle W, taken from antiwork.com. */
export function AntiworkGlyph() {
  return (
    <svg viewBox="0 0 250 176" className="h-[42%] w-[42%]" aria-hidden="true">
      <polygon points="0,0 62,176 125,0" fill="#fff" />
      <polygon points="125,0 188,176 250,0" fill="#fff" />
    </svg>
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
