import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>No Meetings, No Deadlines, No Full-Time Employees</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="twitter:title" content="No Meetings, No Deadlines, No Full-Time Employees" />
        <meta name="twitter:description" content="How we work at Gumroad" />
        <meta name="twitter:image" content="https://sahillavingia.com/gumroadians.png" />
      </Head>

      <a className="tiny-title" href="/">
        &larr; Sahil Lavingia
      </a>

      <main className="centered-main content">
        <label>
          Jan 7, 2021
        </label>

        <h2 className="item">
          No Meetings, No Deadlines, No Full-Time Employees
        </h2>
    
        <p>I started Gumroad in 2011. In 2015, we reached a peak of 23 full-time employees. In 2016, after <a href="/reflecting">failing</a> to raise more money, I ended up back where I began: a one-person company.</p>
        <p>Today, when I’m asked how many people work at Gumroad, I respond with “ten or so.” That’s how I convert the number of people we have into what others expect. But the truth is more complicated:</p>
        <p>If we include everyone who works on Gumroad, it’s 25.</p>
        <p>If we include full-time employees, it’s none. Not even me.</p>
        <p>We have no meetings, and no deadlines either.</p>
        <p>And it’s working: our creators earn over $175 million a year, and we generate $11 million in annualized revenue, growing 85% year-over-year.</p>
        <p><img src="/2020-earnings.png" /></p>
        <p>That said, I don’t expect anyone to copy our way of working wholesale. We got here on accident, not some grand plan.</p>
        <p>However, I do think there are pieces of our story and the way we work that could benefit other companies, their people, and–most importantly–their customers.</p>
        <h2>Freedom at all costs</h2>
        <p>After the layoffs in 2015, even though the team shrunk, Gumroad itself continued to grow.</p>
        <p><img src="/2018-earnings.png" /></p>
        <p>But hiring people full-time and leasing a new office in San Francisco to work out of was untenable. Instead, I found an Indian firm called <a href="https://bigbinary.com/">BigBinary</a> and hired a few engineers as contractors.</p>
        <p>These contractors saved the company. They fixed bugs and maintained the site while I answered support tickets, designed features, and wrote about new initatives.</p>
        <p>Eventually, I hired back the same customer support person we had from before the layoffs, this time via an hourly contracting agreement too.</p>
        <p>Meanwhile, I <a href="/bubble">moved to Utah</a> and attempted to become a full-time creator.</p>
        <p>While Gumroad was no longer on track to become a billion-dollar company, I acquired a new asset: time. I used that time to take classes on writing and painting.</p>
        <p>Because I was burned out and didn’t want to think about working any more than I needed to, I instituted a no-meeting, no-deadline culture.</p>
        <p>For me, it was no longer about growth at all costs, but “freedom at all costs.”</p>
        <p>This way, Gumroad stayed profitable, I could take a much-needed break to explore my hobbies, and the product continued to improve over time.</p>
        <p><img src="/operating.png" /></p>
        <h2>How we work</h2>
        <p>Today, working at Gumroad resembles working on an open source project like Rails. Except it’s neither open source, nor unpaid.</p>
        <p>Instead of having meetings, people “talk” to each other via GitHub, Notion, and (occasionally) Slack, expecting responses within 24 hours. Because there are no standups or “syncs” and some projects can involve expensive feedback loops to collaborate, working this way requires clear and thoughtful communication.</p>
        <p>Everyone writes well, and writes <em>a lot</em>.</p>
        <p>There are no deadlines either. We ship incrementally, and launch things whenever the stuff in development is better than what’s currently in production. The occasional exception does exist, such as a tax deadline, but as a rule, I try not to tell anyone what to do or how fast to do it. When someone new joins the company, they do what everyone else does: go into our Notion queue, pick a task, and get to work, asking for clarification when needed.</p>
        <p>Instead of setting quarterly goals or using OKRs, we move towards a single north star: maximizing how much money creators earn. It’s simple and measurable, allowing anyone in the company to do the math on how much a feature or bug-fix might be worth.</p>
        <p>But we don’t prioritize ruthlessly.</p>
        <p>People can work on what’s fun or rely on their intuition, because as long as we remain profitable and keep shipping, we tend to get to the important stuff eventually. Our <a href="https://www.notion.so/gumroad/Roadmap-ce2ad07c483046e7941227ad7810730d">public roadmap</a> helps Gumroad's creators hold us accountable.</p>
        <p>We ship big things this way too.</p>
        <p>In November 2020, we shipped <a href="https://gumroad.com/gumroad/p/introducing-gumroad-memberships">Gumroad Memberships</a>, a year in the works and now used by hundreds of creators to earn over $1,500,000 per month.</p>
        <p>This is a screenshot from our roadmap to show what it looks like in practice:</p>
        <p><img src="/memberships-roadmap.png" /></p>
        <p>For more, I recorded <a href="https://www.youtube.com/watch?v=2PcIC1DKBU0">an hour-long video</a> about how we ship something as large as Gumroad Memberships.</p>
        <p>Gumroad engineer Helen Hood, who shipped Memberships, says, “it’s one of the biggest product launches of my career, and we shipped it without a single meeting or video call. I've worked at your typical startup, with an open floor plan, lots of whiteboards, standups and sprint planning, beers after work. I’ve also worked on a remote team with little communication and engineers largely siloed on their own projects. The way we work at Gumroad is ideal for me. It lets me maximize my productive hours, and clock out when I've hit my limit.”</p>
        <p>Those are the broad strokes, but we’ve published more specific documentation about <a href="https://jobs.gumroad.com/">the way we work</a>:</p>
        <ul>
          <li>
            <strong>How do we decide what to work on?</strong>
            <p>“At the end of the day there's a lot of emotion that goes into Gumroad, that's not dissimilar from an art project. We sometimes pick what's fun and feels good to work on! We love listening to creators! We don't do tons of data analysis to decide what's worth working on.”</p>
          </li>
          <li>
            <strong>How do we communicate?</strong>
            <p>“Turn off all notifications from your phone!”</p>
          </li>
          <li>
            <strong>What does working at Gumroad feel like?</strong>
            <p>“We ship incrementally, iteratively, and have one massive tentpole launch a year. Every month we see how much creators got paid, then we move on. The journey is the fun part, we're not waiting to arrive at some destination.”</p>
          </li>
          <li>
            <strong>What’s not so good at Gumroad?</strong>
            <p>“There's not a lot of room for growth. We're staying profitable, and not planning to double the team every year. While there will likely be a few leadership roles, there aren't plenty of them and they aren't built into the career path of working at Gumroad.”</p>
          </li>
        </ul>
        <p>Gumroad’s Chris Maximin says, “this way to work is responsible for the highest level of productivity I've ever experienced. The ability to focus on actual work creates a virtuous circle benefiting both the company and the workers: 1) the company does not have to pay expensive engineers to sit around in endless, useless meetings, and 2) the engineers get to do more and learn more, which benefits them in the long term.”</p>
        <p>This isn’t just for engineers.</p>
        <p>Justin Mikolay, a writer at Gumroad, ships each of our <a href="https://gumroad.com/l/BCMDz">Creator Spotlights</a> this way, even though each one requires at least three people–plus the creator.</p>
        <p><em>Everything</em> is handled this way: support, risk, content, growth, product prioritization, board decks, design feedback, and more.</p>

        <h2>Minimum viable culture</h2>
        <p>This way of working isn’t for everyone.</p>
        <p>There are no retreats planned, and no social channels in Slack. There are limited opportunities for growth. And we can’t compete with the comp packages that big tech companies can provide.</p>
        <p>But we can compete–and win–on flexibility.</p>
        <p><a href="https://twitter.com/sidyadav">Sid Yadav</a>, former VP of Product at Teachable, joined Gumroad in 2018.</p>
        <p>In his words, “most entrepreneurs have two options: work a full-time job and hustle nights/weekends, or leave your job and risk everything to start the company. Gumroad provided a third way: I could contract 20-35 hours a week, and for a couple days a week, incubate ideas and work on my next thing.”</p>
        <p>In 2020, Sid left Gumroad to start his own creator economy company, <a href="https://circle.so">Circle</a>, together with former Gumroad coworker <a href="https://community.circle.so/u/45ef416b">Rudy Santino</a>:</p>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I’m starting a new company: <a href="https://t.co/BW40WmGBlF">https://t.co/BW40WmGBlF</a>! I’ll be sharing more about it in the coming weeks, but today I wanted to show gratitude to the life situation that made this possible: contracting for a flexible remote startup — <a href="https://twitter.com/gumroad?ref_src=twsrc%5Etfw">@gumroad</a>. It wouldn’t have happened without it.</p>&mdash; Sid Yadav (@sidyadav) <a href="https://twitter.com/sidyadav/status/1216761573479473152?ref_src=twsrc%5Etfw">January 13, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <p>Working on Gumroad isn't a majority of anyone's identity.</p>
        <p>People work at Gumroad as little as they need to sustain the other parts of their lives they prefer to spend their time and energy on: a creative side-hustle, their family, or anything else.</p>
        <p>Gumroad engineer Nathan Chan says, “I produce more value for my time than at any other company in my career, and I’m able to fully participate in parenting and watching my kiddo grow up.”</p>
        <p>That includes me.</p>
        <p>From 2011 to 2016, building Gumroad was my singular focus in life. But today, it is just a part of my life, like a hobby might be. For example, I paint for fun, and every once in a while, I sell a painting.</p>
        <h2>A company of creators</h2>
        <p>One day, out of the blue, I received an email from <a href="https://twitter.com/dvassallo">Daniel Vassallo</a>. I knew Daniel; he was a creator who had made over $250,000 on Gumroad in less than a year.</p>
        <p>He was already using the product–so he understood what problems Gumroad ought to solve next–and he had some ideas for how he could help out:</p>
        <blockquote>I love Gumroad (and I’m living off it!), I enjoy product scoping and strategy, and I think I can take over your PM tasks. I would only be able to dedicate around 2hrs/day on average, but I’d be available daily. Don’t know if this is the type of commitment you had in mind, but I figured if there’s a place where this arrangement can work, it’s Gumroad :)</blockquote>
        <p>It was a perfect fit. Daniel became our new Head of Product.</p>
        <p>It can be a great deal for Gumroad too. Before Daniel quit his job at Amazon, he was making over $400,000 a year. We pay him $120,000 a year.</p>
        <p>How? He works ten hours a week for us. In his words:</p>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Almost nobody is seeing this trend as an opportunity to work less, rather than to earn more. <a href="https://t.co/U9YBqp1ebn">https://t.co/U9YBqp1ebn</a></p>&mdash; Daniel Vassallo (@dvassallo) <a href="https://twitter.com/dvassallo/status/1334288446697865216?ref_src=twsrc%5Etfw">December 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <h2>Getting paid</h2>
        <p>In practice, we pay everyone hourly based on their role. The range varies from $50 (customer support) to $250 (Head of Product) an hour.</p>
        <p>Recently I standardized our rates world-wide:</p>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">🌍🌎🌏 Excited to announce we&#39;ve deprecated all location-based pay! Gumroad will now pay you the same salary, no matter if you live in San Francisco, Bangalore, Lagos, or anywhere else.</p>&mdash; Sahil (@shl) <a href="https://twitter.com/shl/status/1334201934702493697?ref_src=twsrc%5Etfw">December 2, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <p>This rate is agreed upon during our interview process:</p>
        <ol>
          <li>Apply via a form.</li>
          <li>An unpaid, few-hour challenge, that resembles the high-level work we do at Gumroad. This may include breaking down a large shipment (like Gumroad Memberships) into its atomic parts, planning the schema associated with a new feature, or writing up a Help Center article.</li>
          <li>A paid, few-week trial period, that resembles the day-to-day work we do at Gumroad. This may include fixing bugs, shipping a feature, or answering support tickets.</li>
        </ol>
        <p><em>Note: We'll be hiring for more positions soon! <a href="https://twitter.com/shl">Follow me on Twitter</a> for updates.</em></p>
        <p>Within the company, we keep a document that lists how much everyone is paid, along with their average working hours. This allows the team to have as much information as I do when making compensation decisions.</p>
        <p>There are no perks of any kind, besides the flexibility and the cash.</p>
        <p>To be clear, we don’t provide healthcare. Everyone who works at Gumroad is responsible for  their own healthcare and benefits. Everyone also pays for their own phone, laptop, internet connection, and all the other things they need.</p>
        <p>There is another downside to this system: people have to track their hours. Some people solve this by billing 20 hours a week, even though they may work a bit more or a bit less. Others track it diligently, in 15-minute increments, and send a detailed invoice every week.</p>
        <p>Since Daniel joined as quarter-time Head of Product, we’ve had <a href="https://twitter.com/RandallKanna">Randall Kanna</a> join as quarter-time Head of Community and <a href="https://twitter.com/philip_kiely">Philip Kiely</a> join as quarter-time Head of Marketing. They’re successful Gumroad creators too.</p>
        <p>At some point, it clicked: Creators make money so they can make stuff, instead of the other way around. Why not adopt this framing at Gumroad, too?</p>
        <p>This is what <em>working in the creator economy</em> should feel like.</p>
        <h2>The future of work is not working</h2>
        <p>Recently, I pitched the whole company about going full-time, because it felt wrong to grow any larger without full-time staff.</p>
        <p>Nobody accepted.</p>
        <p>I realized then that I was trying to copy the status quo–to try and fix something that wasn’t broken–so that I could feel better about doing things the “normal” way.</p>
        <p>But the deal we already had in place was better for what our people prioritize: freedom over growth, sustainability over speed, life over work.</p>
        <p><a href="https://gumroad.com/">Gumroad’s homepage</a> is clear about its benefits to creators who use it: “Escape your 9-to-5 job. Take off your suit and tie. End your commute. Get paid for your craft.”</p>
        <p>As cliché as it may be, we are trying to be a company of creators, for creators.</p>
        <p>Meet the Gumroad team: <img src="/gumroadians.png" /></p>
        <p>The internet has enabled new ways of working, but we’re just starting to see them unfold. There are a lot of different ways to make work work. Ours is just one.</p>
        <p><em>If you want to learn more, I expand on this topic in Chapter 7 of <a href="https://minimalistentrepreneur.com/book">The Minimalist Entrepreneur</a>.</em></p>
        <hr />

        <label className="centered">
          Get my infrequent emails (once a quarter-ish) first:
        </label>

        <form action="https://gumroad.com/follow_from_embed_form" className="gumroad-follow-form-embed centered" method="post">
          <input name="seller_id" type="hidden" value="2614450981218" />
          <input name="email" placeholder="Your email address" type="email" />
          <button data-custom-highlight-color="" type="submit">Subscribe</button>
        </form>
      </main>
    </Layout>
  )
}
