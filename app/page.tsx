'use client'

import Link from "next/link";
import Painting from "../components/Painting";
import ExternalLink from "@/components/ui/ExternalLink";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center bg-white dark:bg-black">
      <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-4xl w-full">
        <header className="mb-6 sm:mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Sahil Lavingia</h1>
            <div className="flex mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <ExternalLink href="https://www.antiwork.com" className="no-underline text-gray-700 dark:text-gray-300">
                Founder
              </ExternalLink>
              <span>Writer</span>
              <span>Painter</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://x.com/shl" target="_blank" className="no-underline text-2xl dark:text-white">
              𝕏
            </a>
            <DarkModeToggle />
          </div>
        </header>

        <div className="space-y-4 sm:space-y-6 pt-10">
          <h2 className="flex items-center text-lg sm:text-xl">
            <Link href="/god" prefetch={true} className="dark:text-neutral-200 hover:text-gray-700 dark:hover:text-neutral-100 underline font-medium">
              God Mode
            </Link>
            <span className="inline-flex items-center rounded-full bg-green-500 dark:bg-neutral-600 px-3 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10 uppercase ml-3 mt-0.5">
              New
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/dividends" prefetch={true} className="dark:text-neutral-200 hover:text-gray-700 dark:hover:text-neutral-100 underline font-medium">
              Paying Freelancers in Equity and Dividends
            </Link>
            <span className="ml-3 text-sm text-gray-400 dark:text-gray-500 font-normal">2024</span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <ExternalLink
              href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397"
              className="font-medium underline dark:text-neutral-200 dark:hover:text-neutral-100"
            >
              The Minimalist Entrepreneur
            </ExternalLink>
            <span className="ml-3 text-sm text-gray-400 dark:text-gray-500 font-normal">2021</span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/work" prefetch={true} className="dark:text-neutral-200 hover:text-gray-700 dark:hover:text-neutral-100 underline font-medium">
              No Meetings, No Deadlines, No Full-Time Employees
            </Link>
            <span className="ml-3 text-sm text-gray-400 dark:text-gray-500 font-normal">2021</span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/reflecting" prefetch={true} className="dark:text-neutral-200 hover:text-gray-700 dark:hover:text-neutral-100 underline font-medium">
              Reflecting on My Failure to Build a Billion-Dollar Company
            </Link>
            <span className="ml-3 text-sm text-gray-400 dark:text-gray-500 font-normal">2019</span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/border" prefetch={true} className="dark:text-neutral-200 hover:text-gray-700 dark:hover:text-neutral-100 underline font-medium">
              Across the Border
            </Link>
            <span className="ml-3 text-sm text-gray-400 dark:text-neutral-200 font-normal">2018</span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/bubble" prefetch={true} className="dark:text-neutral-200 hover:text-gray-700 dark:hover:text-neutral-100 underline font-medium">
              From Bubble to Bubble
            </Link>
            <span className="ml-3 text-sm text-gray-400 dark:text-neutral-200 font-normal">2018</span>
          </h2>
        </div>

        <a href="https://instagram.com/shlpaints" className="mt-8 block">
          <div className="paintings grid grid-cols-1 md:grid-cols-3 gap-4">
            <Painting src="/paintings/painting.webp" alt="Digital painting of train station, 2019" />
            <Painting src="/paintings/rocks.webp" alt="Oil painting of rocks, 2017" />
            <Painting src="/paintings/bhosle.webp" alt="Oil painting of woman, 2019" />
            <Painting src="/paintings/shamisen.webp" alt="Oil painting of woman, 2019" />
            <Painting src="/paintings/head.webp" alt="Oil painting of woman, 2019" />
            <Painting src="/paintings/four.webp" alt="Oil painting of woman, 2019" />
          </div>
        </a>
      </main>
    </div>
  );
}
