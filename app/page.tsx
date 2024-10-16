export default function Home() {
  return (
    <main className="py-10 px-8 mx-auto">
      <h1>Sahil Lavingia</h1>

      <h2 className="flex items-center text-xl">
        <a href="/god">God Mode</a>
        <span className="inline-flex items-center rounded-full bg-[#ff6b6b] px-1.5 py-0.5 text-xs font-medium text-white ring-1 ring-inset ring-red-600/10 uppercase ml-3 mt-0.5">
          New
        </span>
      </h2>

      <h2 className="text-xl">
        <a href="/dividends">Paying Freelancers in Equity and Dividends</a>
      </h2>

      <h2 className="text-xl">
        <a
          href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397"
          style={{ fontWeight: 1000 }}
        >
          The Minimalist Entrepreneur
        </a>
        <span className="ml-3 text-sm text-gray-400 font-normal">2021</span>
      </h2>

      <h2 className="text-xl">
        <a href="/work">No Meetings, No Deadlines, No Full-Time Employees</a>
        <span className="ml-3 text-sm text-gray-400 font-normal">2021</span>
      </h2>

      <h2 className="text-xl">
        <a href="/reflecting">
          Reflecting on My Failure to Build a Billion-Dollar Company
        </a>
        <span className="ml-3 text-sm text-gray-400 font-normal">2019</span>
      </h2>

      <h2 className="text-xl">
        <a href="/border">Across the Border</a>
        <span className="ml-3 text-sm text-gray-400 font-normal">2018</span>
      </h2>

      <h2 className="text-xl">
        <a href="/bubble">From Bubble to Bubble</a>
        <span className="ml-3 text-sm text-gray-400 font-normal">2018</span>
      </h2>

      <h2 className="text-xl">
        <a href="https://x.com/shl">x.com/shl</a>
        <span className="ml-3 text-sm text-gray-400 font-normal">2008–</span>
      </h2>

      <a href="https://instagram.com/shlpaints">
        <div className="paintings flex flex-row space-x-4">
          <img
            src="/painting.jpeg"
            className="painting h-[240px] w-auto"
            alt="Digital painting of train station, 2019"
          />
          <img
            src="/rocks.png"
            className="painting h-[240px] w-auto"
            alt="Oil painting of rocks, 2017"
          />
          <img
            src="/bhosle.jpeg"
            className="painting h-[240px] w-auto"
            alt="Oil painting of woman, 2019"
          />
        </div>
      </a>
    </main>
  );
}
