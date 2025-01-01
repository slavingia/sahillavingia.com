import { Tweet } from "react-tweet";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'The Creator-Owner Economy: Gumroad\'s "IPO"',
  twitter: {
    card: "summary_large_image",
    site: "@shl",
    title: "The Creator-Owner Economy: Gumroad's 'IPO'",
    description:
      "Creators deserve to get paid for their work. To date, Gumroad has made it easy by enabling them to sell digital products, online courses, and memberships directly to their audiences. But earning an income isn't the only way to get paid. Owning equity in a business is another.",
    images: ["https://sahillavingia.com/republic.png"],
  },
  openGraph: {
    title: "The Creator-Owner Economy: Gumroad's 'IPO'",
    images: [
      {
        url: "https://sahillavingia.com/republic.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="prose dark:prose-invert mx-auto p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
        <label className="block mt-8 mb-8">
          March 22, 2021 by{" "}
          <Link href="/">
            <u>Sahil Lavingia</u>
          </Link>
        </label>

        <h1>The Creator-Owner Economy: Gumroad's "IPO"</h1>

        <p>Creators deserve to get paid for their work.</p>
        <p>
          To date, <Link href="https://gumroad.com">Gumroad</Link> has made it easy by
          enabling them to sell digital products, online courses, and
          memberships directly to their audiences. But earning an income isn't
          the only way to get paid.
        </p>
        <p>Owning equity in a business is another.</p>
        
        <div className="flex justify-center">
          <Tweet id="1002103670400417792" />
        </div>

        <h2>From income to equity</h2>

        <p>
          The last time I tried to raise money, I failed. After meeting with
          dozens of investors and getting dozens of nos, we gave up on a Series
          B and had to either sell Gumroad, shut down, or get acquired. But in
          spite of <Link href="/reflecting">"failing,"</Link> we were still helping
          creators earn about $2 million a month to pay rent, top off their
          children's college funds, or even just to buy a few cups of coffee.
          Knowing that our platform made a big financial difference for our
          customers impacted my priorities and how I decided to move forward.
        </p>
        <p>
          Instead of selling or shutting down, I chose our creators over our
          employees and our investors. I shrunk the team from 20 to five–and
          later from five to one, in order to keep serving our creators.
        </p>
        <p>
          It was a painful decision, but it was the right one. While it was
          tempting for me and others to shutter Gumroad and start anew, creators
          deserved to get paid–and many were counting on Gumroad for their
          entire income.
        </p>
        <p>
          In the years since I've often thought about how to make the interests
          of Gumroad's creators, employees, and investors align more cleanly.
          Recently I{" "}
          <Link href="/work">hired a few of our top creators part-time</Link> to run
          various parts of Gumroad. Letting them become investors was the next
          logical step.
        </p>
        <h2>Turning creators into owners</h2>
        <p>
          On March 15 2021, the SEC started to allow companies to raise up to
          $5M from the public using Regulation Crowdfunding (Reg CF). Startups
          are also now allowed to "test the waters," making sure there is demand
          before committing to a campaign.
        </p>
        <p>
          Gumroad took advantage of these new rules as soon as it could. Even
          with a cap of $1K per investor, we raised $5M in 12 hours, from 7,303
          investors–including more than 5,800 first-time angel investors and
          hundreds of Gumroad creators.
        </p>
        <p>
          <img
            src="/republic.png"
            style={{ margin: "1rem 0" }}
            alt="Crowdfunding page"
          />
        </p>
        <p>
          Separately, we raised $1M from Naval Ravikant, Jason Fried, and
          others, bringing the total amount raised to $6M. All of this capital
          was raised at the same terms: $100M pre-money valuation, 20% discount.
        </p>
        <p>
          I thought about calling this our Series C–for creators, community,
          crowdfunding, and out of respect for our failed Series B–but I think
          it's more accurate to say that this is our limited version of an
          "IPO."
        </p>
        <p>
          There's only thing missing: post-IPO liquidity. But liquidity is
          coming; an underreported fact of Reg CF is that it allows for
          secondary sales after a one-year lockup period. Gumroad will take
          advantage of that the day it becomes possible.
        </p>
        <h2>The future of fundraising</h2>
        <p>
          I hope to see more startups raise money from their customers and
          communities. And not just startups, but restaurants and coffee shops
          and bookstores and more mature companies, and maybe even venture
          capital firms.
        </p>
        <p>
          Why isn't raising money this way more common? First off, the
          legislation is days old. It'll take some time to get both sides of the
          marketplace–founders and retail investors–warmed up.
        </p>
        <p>There are additional reasons too, but I was able to resolve them:</p>
        <ul>
          <li>
            Reg CF requires a lot of financial transparency,{" "}
            <em>BUT I publish our financials already.</em>
          </li>
          <li>
            Having thousands of investors may create external decision-making
            pressure around things like moderation, deplatforming, and pricing,{" "}
            <em>
              BUT we encourage feedback already, and we're very open about our
              decision-making through our{" "}
              <Link href="https://www.youtube.com/watch?v=I192Z6WaVWQ">
                Open Board Meetings
              </Link>
              .
            </em>
          </li>
          <li>
            Founders often prefer VC brands and experience over what the general
            public has to offer,{" "}
            <em>BUT one can raise from both, like I did.</em>
          </li>
          <li>
            You need to have high confidence you can reach a large audience of
            retail investors,{" "}
            <em>
              BUT with "testing the waters" now allowed, founders can gauge
              demand before committing.
            </em>
          </li>
        </ul>
        <p>
          Other businesses will come up with their own ways to solve these
          problems, because the upside of having your customers as your
          investors is too good to pass up. Gumroad now has hundreds of creators
          as owners who are now doubly incentivized to use the product and to
          spread the word to other creators.
        </p>
        <p>
          This isn't hypothetical. In the UK, where the maximum is higher and
          the required financial disclosures fewer,{" "}
          <Link href="https://docs.google.com/spreadsheets/d/1CZXdI0Giq1AGsPEG2HTg2t6zU5MrSazEvrpSQ0kcib0/edit#gid=0">
            startups have raised 60x the funds through crowdfunding than in the
            US
          </Link>
          .
        </p>
        <p>
          To be clear: quintupling the crowdfunding cap is not going to 5x
          crowdfunding, it is going to 50x crowdfunding. Gumroad did not go from
          raising $1M to raising $5M, but from not raising this way to raising
          this way. Thanks to the rule changes on March 15, 2021, equity
          crowdfunding now has product-market fit.
        </p>
        <p>
          There <em>is</em> one way to make crowdfunding the new default sooner:
          show founders that taking this approach will make their companies more
          valuable.
        </p>
        <p>
          So, to Gumroad's new investors asking "How can I help?" for the very
          first time:
        </p>
        <ul>
          <li>
            <Link href="https://gumroad.com/signup">
              Sign up for Gumroad as a creator
            </Link>
          </li>
          <li>
            <Link href="https://gumroad.com/discover">
              Support Gumroad creators as a customer
            </Link>
          </li>
          <li>
            Tell people that Regulation Crowdfunding exists–start by sharing
            this news
          </li>
          <li>
            Send me and the team feedback via{" "}
            <Link href="https://joinclubhouse.com/club/gumroad">Clubhouse</Link> and{" "}
            <Link href="https://twitter.com/gumroad">Twitter</Link>
          </li>
        </ul>

        <p>
          And if you're a founder, please check out{" "}
          <Link href="https://raise.gumroad.com/">the materials I used</Link> to
          crowdfund this raise, and reach out if you have any questions.
        </p>
      </main>
    </>
  );
}
