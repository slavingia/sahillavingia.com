import Link from "next/link";
import { Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="py-6 sm:py-10 px-4 sm:px-8 mx-auto max-w-4xl">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold">Sahil Lavingia</h1>
        <a href="https://x.com/shl" className="text-2xl text-[#1DA1F2]">
          <Twitter size={24} fill="currentColor" strokeWidth={0} />
        </a>
      </header>

      <div className="space-y-4 sm:space-y-6">
        <h2 className="flex items-center text-lg sm:text-xl">
          <Link href="/god">God Mode</Link>
          <span className="inline-flex items-center rounded-full bg-[#ff6b6b] px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10 uppercase ml-3 mt-0.5">
            New
          </span>
        </h2>

        <h2 className="text-lg sm:text-xl">
          <Link href="/dividends">
            Paying Freelancers in Equity and Dividends
          </Link>
          <span className="ml-3 text-sm text-gray-400 font-normal">2024</span>
        </h2>

        <h2 className="text-lg sm:text-xl">
          <a
            href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397"
            style={{ fontWeight: 1000 }}
          >
            The Minimalist Entrepreneur
          </a>
          <span className="ml-3 text-sm text-gray-400 font-normal">2021</span>
        </h2>

        <h2 className="text-lg sm:text-xl">
          <Link href="/work">
            No Meetings, No Deadlines, No Full-Time Employees
          </Link>
          <span className="ml-3 text-sm text-gray-400 font-normal">2021</span>
        </h2>

        <h2 className="text-lg sm:text-xl">
          <Link href="/reflecting">
            Reflecting on My Failure to Build a Billion-Dollar Company
          </Link>
          <span className="ml-3 text-sm text-gray-400 font-normal">2019</span>
        </h2>

        <h2 className="text-lg sm:text-xl">
          <Link href="/border">Across the Border</Link>
          <span className="ml-3 text-sm text-gray-400 font-normal">2018</span>
        </h2>

        <h2 className="text-lg sm:text-xl">
          <Link href="/bubble">From Bubble to Bubble</Link>
          <span className="ml-3 text-sm text-gray-400 font-normal">2018</span>
        </h2>
      </div>

      <a href="https://instagram.com/shlpaints" className="mt-8 block">
        <div className="paintings grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src="/painting.jpeg"
            className="painting w-full h-[240px] object-cover"
            alt="Digital painting of train station, 2019"
          />
          <img
            src="/rocks.png"
            className="painting w-full h-[240px] object-cover"
            alt="Oil painting of rocks, 2017"
          />
          <img
            src="/bhosle.jpeg"
            className="painting w-full h-[240px] object-cover"
            alt="Oil painting of woman, 2019"
          />
        </div>
      </a>
    </main>
  );
}
