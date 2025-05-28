import Link from "next/link";
import Painting from "./components/Painting";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center dark:bg-black">
      <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-4xl w-full">
        <header className="mb-6 sm:mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold dark:text-white">
              Sahil Lavingia
            </h1>
            <div className="flex space-x-4 text-sm text-gray-600 dark:text-neutral-400">
              <a
                href="https://www.antiwork.com"
                className="no-underline dark:text-neutral-300"
              >
                Founder
              </a>
              <span>Writer</span>
              <span>Painter</span>
            </div>
          </div>
          <a
            href="https://x.com/shl"
            className="no-underline text-2xl dark:text-white"
          >
            𝕏
          </a>
        </header>

        <div className="space-y-4 sm:space-y-6">
          <h2 className="flex items-center text-lg sm:text-xl ">
            <Link href="/doge">DOGE Days</Link>
            <span className="inline-flex items-center rounded-full bg-[#ff6b6b] dark:bg-neutral-800 px-2 py-0.5 text-xs font-medium text-white dark:text-neutral-300 ring-1 ring-inset ring-red-600/10 dark:ring-neutral-600  uppercase ml-3 mt-0.5">
              New
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/god">GOD Mode</Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2025
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/dividends">
              Paying Freelancers in Equity and Dividends
            </Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2024
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <a
              href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397"
              style={{ fontWeight: 1000 }}
            >
              The Minimalist Entrepreneur
            </a>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2021
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/work">
              No Meetings, No Deadlines, No Full-Time Employees
            </Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2021
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/reflecting">
              Reflecting on My Failure to Build a Billion-Dollar Company
            </Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2019
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/border">Across the Border</Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2018
            </span>
          </h2>

          <h2 className="text-lg sm:text-xl">
            <Link href="/bubble">From Bubble to Bubble</Link>
            <span className="ml-3 text-sm text-gray-400 date font-normal">
              2018
            </span>
          </h2>
        </div>

        <a href="https://instagram.com/shlpaints" className="mt-8 block">
          <div className="paintings grid grid-cols-1 md:grid-cols-3 gap-4">
            <Painting
              src="/painting.jpeg"
              alt="Digital painting of train station, 2019"
            />
            <Painting src="/rocks.png" alt="Oil painting of rocks, 2017" />
            <Painting src="/bhosle.jpeg" alt="Oil painting of woman, 2019" />
          </div>
        </a>
      </main>
    </div>
  );
}
