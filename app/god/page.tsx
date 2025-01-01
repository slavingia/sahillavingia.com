import Footer from "../footer";
import { Metadata } from "next";
import Link from "next/link";
import Power from "./Power";

export const metadata: Metadata = {
  title: "GOD Mode",
  openGraph: {
    title: "GOD Mode",
    description:
      "A term for a cheat code in video games that makes a player invincible, and how it applies to startup founders.",
    images: ["https://sahillavingia.com/god-mode.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shl",
    title: "GOD Mode",
    description:
      "A term for a cheat code in video games that makes a player invincible, and how it applies to startup founders.",
    images: ["https://sahillavingia.com/god-mode.png"],
  },
};

export default function Home() {
  return (
    <main className="prose dark:prose-invert mx-auto dark:bg-black p-4 sm:p-8 flex-1 w-full max-w-3xl relative z-10">
      <label className="block mt-8 mb-8">
        October 17, 2024 by{" "}
        <Link href="/">
          <u>Sahil Lavingia</u>
        </Link>
      </label>

      <h1>GOD Mode</h1>

      <p>
         A few weeks ago, Paul Graham published{" "}
         <a href="https://www.paulgraham.com/foundermode.html">Founder Mode</a>,
         about a management style practiced by Brian Chesky at Airbnb that was at
         least partially inspired by Steve Jobs.
       </p>

       <p>
         As Paul states in Founder Mode, "It seems to be working. Airbnb's free
         cash flow margin is now among the best in Silicon Valley."
       </p>

       <p>
         So, what is founder mode? The article rang true to me, but was
         purposefully unspecific.
       </p>

       <p>
         This is my attempt at proposing something more truthful by being more
         specific: GOD mode.
       </p>
       
      <h2>Growth, Optimization, Destruction</h2>

      <p>Every startup focuses on growth at its outset.</p>

      <p>They often raise money in order to focus exclusively on that.</p>

      <p>
        Eventually, the growth tapers out and the founders start focusing on
        optimization.
      </p>

      <p>
        That's what Paul refers to in his essay as "manager mode," which is
        already commonly taught in business school and practiced in all kinds of
        businesses around the world. Therefore, optimization isn't enough to
        build the singular businesses investors like Paul are hoping to invest
        in.
      </p>

      <p>The third point of GOD mode defines founder mode: destruction.</p>

      <p>
        Destruction is akin to invasive surgery, and similar to surgery, it's
        only possible with a god-like omniscience about the entire system.
      </p>

      <p>Hence, GOD mode.</p>

      <p>
        (This also means that GOD mode is only possible within the rare
        businesses where a single person can have complete omniscience about
        their business; companies like Gumroad and Airbnb.)
      </p>

      <p>
        In Hinduism, for example, the universe is created, preserved, and
        destroyed in a cycle of repeated events by three different gods:
      </p>

      <ul>
        <li>
          <strong>Creation:</strong> Brahma is the creator of the universe,
          having made it from himself.
        </li>
        <li>
          <strong>Preservation:</strong> Vishnu preserves the world and humans.
        </li>
        <li>
          <strong>Destruction:</strong> Shiva is the destroyer of the universe,
          and is responsible for the cyclical resurrection.
        </li>
      </ul>

      <p>
        Christianity innovates on this concept by combining all three gods into
        a single Godhead, with total omniscience.
      </p>

      <h2>Solo Founder Mode</h2>

      <p>
        In 2023, Gumroad doubled "our" pricing to 10% flat. But really,{" "}
        <em>I</em> did.
      </p>

      <p>
        No one else would have made the same decision, as it put the entire
        company at risk. But from my perspective, the entire company was already
        dead, and I needed to do something aggressive to save it.
      </p>

      <p>
        Before doing so, I asked my team, top customers, and many of our
        investors whether it was a good idea. No one thought so. It turns out,
        no one agreed with me that increasing our pricing so drastically and
        dramatically–and directly, I went with an email blast titled "simpler,
        higher pricing"–was a good idea, but I believed it was the right thing
        to do, and did it anyway.
      </p>

      <p>
        (Why ask them then? Because they could have changed my mind. While I
        didn't have to follow their advice, it was important to make sure I
        wasn't missing something. I've disbanded many dramatic ideas due to
        feedback.)
      </p>

      <p>I was able to do this because:</p>

      <ul>
        <li>I'm a solo founder. I didn't have to convince anyone</li>
        <li>
          No one was going to stop me; everyone had a remote job they wanted to
          keep
        </li>
        <li>I could do it myself; I'm technical</li>
      </ul>

      <p>
        None of this comes off as super likable. And it's not fun to be
        disliked. It paints "founder mode" vs "manager mode" as something more
        like "dictatorship" vs "democracy."
      </p>

      <p>
        But when your company is on the brink, you'll do what's necessary to
        save it. If that requires becoming a benevolent dictator, like Lee Yuan
        Yew had to do to resurrect Singapore, it becomes worth it.
      </p>

      <p>And actions like that do seem to require dictators.</p>

      <p>
        For example, it's interesting to me that Paul doesn't use the term
        "cofounder" anywhere in the article, even though most founders–including
        Brian Chesky–are actually cofounders.
      </p>

      <p>
        From my experience, I don't think founder mode can be practiced by equal
        cofounders.
      </p>

      <p>Yet, this goes against Y Combinator's most dogmatic advice:</p>

      <p>Have co-founders, and–ideally–make yourselves equals.</p>

      <h2>Why, YC, why?</h2>
      
      <p>
        YC states in{" "}
        <a href="https://www.youtube.com/watch?v=prKi3-rUPHc&t=27s">
          this video
        </a>{" "}
        that there are three main reasons to have a co-founder when starting a
        company:
      </p>

      <ol>
        <li>Productivity increases</li>
        <li>Emotional and moral support</li>
        <li>
          Statistics. In their own words: "While iconic companies are often
          associated with a single famous figure, it's important to remember
          that at their earliest stages, even companies like Apple, Facebook,
          Google, and Microsoft all began with co-founders."
        </li>
      </ol>

      <p>
        In the same video, YC states that "when deciding on equity allocation
        between co-founders, the default starting point should typically be a
        50/50 split. This equal division is ideal for early-stage startups where
        both founders are expected to contribute equally and need to be equally
        motivated…Even if one founder has made initial progress, giving a
        potential great co-founder an equal 50% share can be the best decision
        to ensure their full commitment and motivation throughout the startup
        journey."
      </p>

      <p>
        This advice is wrong. I believe that the best companies–like Apple,
        Facebook, Google, and Microsoft–are founded by a single person, who has
        enough "rizz" to convince others that they are co-founders without
        actually making them equals.
      </p>

      <p>If this advice is wrong, why does YC advocate so strongly for it?</p>

      <p>
        One reason may be that having cofounders requires you to have convinced
        at least one other person to join you on your journey. This acts as a
        filter so that YC doesn't have to review as many applications. It also
        requires non-technical founders–most would-be applicants–to invest the
        time in finding a technical co-founder, spreading the gospel of YC on
        their behalf.
      </p>

      <p>
        But I don't think that's the core motivation. I think the core
        motivation, as Nassim Taleb explains in{" "}
        <a href="https://medium.com/incerto/the-most-intolerant-wins-the-dictatorship-of-the-small-minority-3f1f83ce4e15">
          The Most Intolerant Wins: The Dictatorship of the Small Minority
        </a>
        , is because having co-founders with an equal split gives YC all of the
        power. And which institution–or founder–doesn't like power?
      </p>

      <p>
        If you own 49% of a company and your enemy owns 49% of the company, who
        has all the power? Whoever owns the remaining 2%. They get to choose the
        leader, and kick out the other.
      </p>

      <Power />

      <p>
        Founder Mode, though, cannot be implemented in such a scenario. It
        requires one person with almost dictatorial control instilled in them by
        the board to make hard, disagreeable decisions in pursuit of
        "truth"–product-market fit, or free cash flow. Founders who exhibit
        founder mode too early or too late tend to get fired.
      </p>

      <p>
        Or maybe, it is because YC itself is a partnership no longer led by its
        founder, and so can't enact founder mode itself. Its founder can only
        point the way and wait for them to change. Maybe, YC will change these
        cofounder guidelines soon.
      </p>

      <p>
        Or maybe, YC is right and I'm wrong. Having equal cofounders is the best
        way to start and run a business. Maybe not for the founders, but for the
        world.
      </p>

      <h2>Default Dead or Default Alive?</h2>


      <p>Dictators are not always benevolent.</p>

      <p>
        Recently, WordPress founder Matt Mullenweg banned millions of customers
        from accessing WordPress resources due to a dispute with one of the
        largest-WordPress hosting sites, WP Engine. As part of{" "}
        <a href="https://ma.tt/2024/10/alignment/">Automattic Alignment</a>, 159
        people, or 8.4% of the company, left the company.
      </p>

      <p>
        It's ugly when someone like Matt Mullenwag uses his dictator status to
        change WordPress against the best wishes of its users, but maybe it's
        also necessary.
      </p>

      <p>The company may even lose, but society eventually wins.</p>

      <p>
        Perhaps founder mode, even when misapplied, allows one human's
        selfishness to continue the process of creative destruction that leads
        to the best tools for civilization at the best possible prices.
      </p>

      <p>
        (Or maybe Matt's right, and we'll all realize that several years from
        now. He knows stuff the rest of us don't.)
      </p>

      <p>
        In any case, I believe that this dictatorial way of running businesses
        will get much more popular as software eats the world, AI eats software,
        and founders use all of these advancements to scale their skills.
      </p>

      <p>
        I can speak from experience. I started Gumroad as a solo founder in
        2011, raised two rounds of venture in 2011 and 2012, and–after failing
        to raise a third round–laid everyone except myself off in 2015.
      </p>

      <p>
        As part of a failed attempt to sell the business in 2017, I put together
        a one-pager with what manual tasks remained:
      </p>

      <div className="border-4 border-gray-300 dark:border-neutral-800 rounded-lg p-4 py-0">
        <img
          src="/gumroad-tasks.png"
          alt="Gumroad tasks"
          className="w-full h-auto darkImage"
        />
      </div>

      <p>
        Before I had to make these hard decisions, I thought I needed certain
        people. It wasn't until I was forced to make these decisions that I
        realized that I didn't really–I could do it all myself. It wasn't fun,
        but it was possible–and it led to a much healthier business–albeit a
        much less healthier me.
      </p>

      <p>I think Brian and Airbnb is on a similar path.</p>

      <p>
        Airbnb is a public company and what matters most now is Free Cash Flow.
        I think they'll get there the same way Gumroad did: by replacing every
        manual process with an automated one, by pushing all marginal costs to
        the customer, and having almost no employees.
      </p>

      <p>
        Today, humans are necessary for stellar customer service, crisis
        management, regulatory compliance and negotiations, property
        inspections, and more. But it won't be long until AI can do all of the
        above.
      </p>

      <p>
        If software eats the world, and AI eats software, what remains for
        non-founders to do?
      </p>

      <p>
        Many people love their 9-5, and aren't going to advocate for them being
        eliminated, even if that's the right thing for the business or the
        world.
      </p>

      <p>
        Most people don't want to be founders, and even most founders don't want
        to do it solo.
      </p>

      <p>So, where do we go from here?</p>

      <p>
        Personally, I don't think it's the founders' job to figure that out;
        it's the government's. Social welfare programs should continue to expand
        as they always have in the face of more and more automation.
      </p>

      <p>
        For <em>my</em> part, I've changed the name of Gumroad's parent company
        from Gumroad to Antiwork, to make it clear what <em>my</em> focus is:
        eliminating the unfun parts of work, which is almost all of it.
      </p>

      <p>
        I've also started prototyping our first hardware product, something I
        can't have omniscience about.
      </p>

      <p>We'll see how it goes.</p>
      <Footer />
    </main>
  );
}
