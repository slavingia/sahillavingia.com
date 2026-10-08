"use client";

import { useEffect, useState, type HTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import Painting from "./Painting";
import {
  AntiworkGlyph,
  AppIcon,
  StatusGlyphs,
} from "./AppIcons";

const BOOK_URL =
  "https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397";
const INSTAGRAM_URL = "https://instagram.com/shlpaints";

type Essay = {
  title: string;
  year: string;
  href: string;
  isNew?: boolean;
  external?: boolean;
};

const ESSAYS: Essay[] = [
  { title: "DOGE Days", year: "2025", href: "/doge", isNew: true },
  { title: "GOD Mode", year: "2025", href: "/god" },
  {
    title: "Paying Freelancers in Equity and Dividends",
    year: "2024",
    href: "/dividends",
  },
  {
    title: "The Minimalist Entrepreneur",
    year: "2021",
    href: BOOK_URL,
    external: true,
  },
  {
    title: "No Meetings, No Deadlines, No Full-Time Employees",
    year: "2021",
    href: "/work",
  },
  {
    title: "Reflecting on My Failure to Build a Billion-Dollar Company",
    year: "2019",
    href: "/reflecting",
  },
  { title: "Across the Border", year: "2018", href: "/border" },
  { title: "From Bubble to Bubble", year: "2018", href: "/bubble" },
];

const PAINTINGS = [
  { src: "/painting.jpeg", alt: "Digital painting of train station, 2019" },
  { src: "/rocks.png", alt: "Oil painting of rocks, 2017" },
  { src: "/bhosle.jpeg", alt: "Oil painting of woman, 2019" },
];

type SheetName = "notes" | "photos" | null;

export default function HomeScreen() {
  const [now, setNow] = useState<Date | null>(null);
  const [sheet, setSheet] = useState<SheetName>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSheet(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hours = now ? ((now.getHours() + 11) % 12) + 1 : null;
  const minutes = now ? String(now.getMinutes()).padStart(2, "0") : null;
  const time = hours === null ? "" : `${hours}:${minutes}`;

  return (
    <div className="not-prose relative flex min-h-[100dvh] flex-col overflow-hidden antialiased">
      {/* Wallpaper */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#1e3a8a] via-[#5b21b6] to-[#be185d] dark:from-[#050816] dark:via-[#150f38] dark:to-[#2b0b2e]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-24 -top-28 h-[24rem] w-[24rem] rounded-full bg-[#22d3ee] opacity-30 blur-[90px] dark:opacity-20" />
        <div className="absolute -right-24 top-32 h-[22rem] w-[22rem] rounded-full bg-[#f472b6] opacity-40 blur-[90px] dark:opacity-20" />
        <div className="absolute -bottom-32 left-1/4 h-[24rem] w-[24rem] rounded-full bg-[#fbbf24] opacity-30 blur-[100px] dark:opacity-15" />
      </div>

      {/* Status bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-3 text-[13px] font-semibold text-white sm:px-10 sm:pt-4">
        <span>{time}</span>
        <StatusGlyphs />
      </div>

      {/* Home screen */}
      <div className="relative z-10 mx-auto flex w-full max-w-[21rem] flex-1 flex-col px-6 sm:max-w-[24rem] sm:px-8 lg:max-w-[26rem]">
        <div className="flex flex-1 items-start pt-4 sm:items-center sm:pt-0">
          <div className="grid w-full grid-cols-4 gap-x-4 gap-y-7 sm:gap-y-9">
            {/* Widget */}
            <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-[1.7rem] border border-white/15 bg-black/25 p-4 shadow-[0_8px_20px_rgba(0,0,0,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30">
              <div>
                <h1 className="m-0 text-[17px] font-semibold leading-tight text-white sm:text-lg">
                  Sahil Lavingia
                </h1>
                <p className="m-0 mt-1 text-[11px] leading-snug text-white/85 sm:text-xs">
                  <a
                    href="https://www.antiwork.com"
                    className="text-white/90 underline decoration-white/40 underline-offset-2"
                  >
                    Founder
                  </a>
                  <span> · Writer · Painter</span>
                </p>
              </div>
              <div>
                <p className="m-0 text-[9px] font-semibold uppercase tracking-wide text-white/60">
                  Latest
                </p>
                <Link
                  href={ESSAYS[0].href}
                  className="m-0 block text-[12px] font-medium leading-snug text-white no-underline hover:underline"
                >
                  {ESSAYS[0].title}
                </Link>
              </div>
              <p className="m-0 text-[10px] leading-snug text-white/75 sm:text-[11px]">
                {ESSAYS.filter((essay) => !essay.external).length} essays ·{" "}
                {PAINTINGS.length} paintings
              </p>
            </div>

            <AppIcon
              label="Pinterest"
              href="https://www.pinterest.com/slavingia/"
              img="/icons/pinterest.png"
            />
            <AppIcon
              label="IRS"
              href="https://github.com/slavingia/design"
              img="/icons/irs.png"
            />
            <AppIcon
              label="Gumroad"
              href="https://gumroad.com"
              img="/icons/gumroad.png"
            />
            <AppIcon
              label="Antiwork"
              href="https://www.antiwork.com"
              tile="bg-black"
              glyph={<AntiworkGlyph />}
            />
            <AppIcon label="X" href="https://x.com/shl" img="/icons/x.png" />
            <AppIcon
              label="GitHub"
              href="https://github.com/slavingia"
              img="/icons/github.png"
            />
            <AppIcon
              label="Instagram"
              href={INSTAGRAM_URL}
              img="/icons/instagram.png"
            />
          </div>
        </div>

        <div className="pb-2 pt-8 sm:pb-3">
          <div className="mb-3 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
          </div>
          {/* Dock */}
          <div className="grid grid-cols-4 gap-x-4 rounded-[2rem] border border-white/25 bg-white/20 p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
            <AppIcon
              label="Notes"
              hideLabel
              onClick={() => setSheet("notes")}
              img="/icons/notes.png"
            />
            <AppIcon
              label="Photos"
              hideLabel
              onClick={() => setSheet("photos")}
              img="/icons/photos.png"
            />
            <AppIcon
              label="Books"
              hideLabel
              href={BOOK_URL}
              img="/icons/books.png"
            />
            <AppIcon
              label="Calendar"
              hideLabel
              href="/video"
              img="/icons/calendar.png"
            />
          </div>
          {/* iOS home indicator */}
          <div className="mx-auto mt-3 h-[5px] w-[134px] rounded-full bg-white/70" />
        </div>
      </div>

      {/* Notes app — his writing. Kept in the DOM (off-screen) so the essays stay crawlable. */}
      <Sheet
        open={sheet === "notes"}
        onClose={() => setSheet(null)}
        label="Notes"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/95 px-5 py-3.5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95">
          <div>
            <h2 className="m-0 text-lg font-semibold">Notes</h2>
            <p className="m-0 text-xs text-neutral-500">Writing</p>
          </div>
          <button
            type="button"
            onClick={() => setSheet(null)}
            className="text-sm font-medium text-[#ff9500]"
          >
            Done
          </button>
        </div>
        <ul className="m-0 list-none divide-y divide-neutral-200 p-0 dark:divide-neutral-800">
          {ESSAYS.map((essay) => {
            const rowClass =
              "block px-5 py-3.5 no-underline active:bg-neutral-100 dark:active:bg-neutral-800";
            const body = (
              <>
                <p className="m-0 text-[15px] font-medium leading-snug">
                  {essay.title}
                  {essay.isNew ? (
                    <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-wide text-[#ff9500]">
                      New
                    </span>
                  ) : null}
                  {essay.external ? (
                    <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                      Book
                    </span>
                  ) : null}
                </p>
                <p className="m-0 mt-0.5 text-xs text-neutral-500">
                  {essay.year}
                </p>
              </>
            );
            return (
              <li key={essay.href}>
                {essay.external ? (
                  <a href={essay.href} className={rowClass}>
                    {body}
                  </a>
                ) : (
                  <Link href={essay.href} className={rowClass}>
                    {body}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </Sheet>

      {/* Photos app — his paintings. */}
      <Sheet
        open={sheet === "photos"}
        onClose={() => setSheet(null)}
        label="Photos"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-white/95 px-5 py-3.5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/95">
          <div>
            <h2 className="m-0 text-lg font-semibold">Photos</h2>
            <p className="m-0 text-xs text-neutral-500">Paintings</p>
          </div>
          <button
            type="button"
            onClick={() => setSheet(null)}
            className="text-sm font-medium text-[#ff9500]"
          >
            Done
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1 p-1">
          {PAINTINGS.map((painting) => (
            <Painting
              key={painting.src}
              src={painting.src}
              alt={painting.alt}
              height="8rem"
            />
          ))}
        </div>
        <p className="m-0 px-5 py-4 text-xs text-neutral-500">
          Paintings ·{" "}
          <a
            href={INSTAGRAM_URL}
            className="text-[#ff9500] underline underline-offset-2"
          >
            @shlpaints on Instagram
          </a>
        </p>
      </Sheet>
    </div>
  );
}

function Sheet({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  // `inert` keeps the closed sheet out of the tab order without removing its
  // links from the DOM (they stay crawlable).
  const inertProps = (open
    ? {}
    : { inert: "" }) as unknown as HTMLAttributes<HTMLDivElement>;

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      <button
        type="button"
        aria-label={`Close ${label}`}
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-default bg-black/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal={open}
        aria-label={label}
        aria-hidden={!open}
        {...inertProps}
        className={`absolute inset-x-0 bottom-0 mx-auto max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-t-[1.75rem] bg-white text-neutral-900 shadow-2xl transition-transform duration-300 ease-out dark:bg-neutral-900 dark:text-neutral-100 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
