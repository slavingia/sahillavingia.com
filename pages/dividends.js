import Head from 'next/head'
import Layout from '../components/layout'
import { Tweet } from 'react-tweet'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Paying Freelancers in Equity and Dividends</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="og:title" content="Paying Freelancers in Equity and Dividends" />
        <meta name="og:description" content="Today, Gumroad pays freelancers around the world $125-$200/hr. Of this hourly rate, everyone chooses how much they’d like to get in equity: between 0 and 80%." />
        <meta name="og:image" content="https://sahillavingia.com/dividends/split.png" />
        <meta name="twitter:title" content="Paying Freelancers in Equity and Dividends" />
        <meta name="twitter:description" content="Today, Gumroad pays freelancers around the world $125-$200/hr. Of this hourly rate, everyone chooses how much they’d like to get in equity: between 0 and 80%." />
        <meta name="twitter:image" content="https://sahillavingia.com/dividends/split.png" />
      </Head>

      <main className="centered-main">
        <label>
          May 21, 2024 by <a href="/">Sahil Lavingia</a>
        </label>

        <h2 className="item">
          Paying Freelancers in Equity and Dividends
        </h2>

        <p>Today, Gumroad pays freelancers around the world $125-$200/hr. Of this hourly rate, everyone chooses how much they’d like to get in equity: between 0 and 80%.</p><p>Equity ownership entitles one to a % of future profits, also known as dividends.</p>
        <p>I think our equity model is cool. My mom thinks it is confusing. Others, like my wife, see anything that is not a direct cash payment as a Ponzi scheme. This is my best attempt at explaining Gumroad’s approach to equity, and the history behind it, so you can decide for yourself.</p>
        <p>It wasn’t always this way; from 2015-2019, everyone at Gumroad was paid cash, no equity. No one wanted any. Gumroad was no longer on its way to becoming <a href="/reflecting">a billion-dollar company</a>, and I was living cheaply in Utah, learning how to paint 30 hours a week. I used any excess profits to grow the team and tackle the growing wall of technical debt.</p>
        <p><img src="/dividends/metrics2019.png" /></p>
        <p>In January 2020, I moved to Portland, Oregon for my wife's job. Then, COVID happened.</p>
        <h2>COVID, Equity Crowdfunding, Creator Economy</h2>
        <p>Due to the global pandemic, more people than ever before were using the Internet to learn new hobbies and monetize their creative skills. As a result, Gumroad grew faster in weeks than it had in years. Investors and journalists termed this trend the “creator economy.”</p>
        <p><img src="/dividends/metrics2020.png" /></p>
        <p>Raising money was tempting, but I’d been down that road before. Still, I felt that we could ship more product features, and let more creators know about them, with a larger team.</p>
        <p>Equity crowdfunding offered an alternative to VC: founders could raise up to $1.07M per year from non-accredited investors all over the world, so long as they published financials online. I was already publishing my financials online, but the cap was too low to seriously consider.</p>
        <p>On March 15, 2021, the SEC increased the annual equity crowdfunding cap from $1.07M to $5M. That same day, Gumroad used equity crowdfunding to raise $5M from 7,387 investors at a $100M valuation.</p>
        <p>I used the money to grow the team from 25 to 45, investing heavily in our content and community efforts, and refreshed the Gumroad brand. We also started working on a new product, <a href="https://flexile.com/">Flexile</a>, to productize the way we worked, with <a href="/work">no meetings, no deadlines, and no full-time employees</a>. At the time, I used a combination of Bill.com, HelloSign, and a bunch of manual processes, to hire and pay everyone; Flexile would automate all of that.</p>
        <p>Less than a year later, the pandemic's effects began to subside. Two years later, Gumroad’s growth plateaued. Then interest rates went up. I pared the team down to get back to cash flow breakeven. Meanwhile, Flexile acquired no customers.</p>
        <p>In 2022, Gumroad lost $1M helping creators earn $185M. That wasn't sustainable.</p>
        <h2>Charging more</h2>
        <p>On January 31, 2023, we increased Gumroad’s pricing to be simpler, higher, and the same for all creators, regardless of income level: 10% flat, exclusive of payment processing fees.</p>
        <p>The ZIRP-fuel haze that peaked during COVID and allowed Gumroad to spend the first decade of its life operating with an incredibly creator-friendly business model was over.</p>
        <p><img src="/dividends/pricing2.png" /></p>
        <p>Spoiler alert: it worked. <em>Thank you</em> to the 55,000 creators who stuck with us!</p>
        <p>Finally, Gumroad was a sustainable business, not looking for an exit. Frankly, I had waited long enough. My wife and I were planning to move to NYC and start a family. It was time for us to start taking a share of Gumroad's profits, as a reward for the years of work put into building the company.</p>
        <h2>Delving into dividends</h2>
        <p>This isn't new: Dividends are the primary way businesses pay their owners.</p>
        <p>According to the IRS, about 200,000 businesses in the US pay dividends of more than $10M to their owners. For reference, there are just 6,000 publicly-listed companies in the US.</p>
        <p>Some people prefer profit-sharing. It’s simpler, but it amounts to a glorified bonus. Because it’s a bonus, it's taxed as income. And what happens when you get fired or laid off, or choose to take a break from work? It's gone.</p>
        <p>Qualified dividends, meanwhile, are taxed at the long-term capital gains rate.</p>
        <p>However, Gumroad’s history made issuing dividends non-trivial. In 2011-2012, we raised Seed and Series A rounds from angels and VCs. As part of owning preferred shares, investors acquire the right to block any dividends to common stockholders.</p>
        <p>I owe a massive <em>thank you</em> to Accel, Max Levchin, SV Angel, First Round, Naval Ravikant, Collab Fund, Tuesday Capital (formerly CrunchFund), and Caffeinated Capital, for allowing us to amend our charter to issue 60% of our net income as dividends every year.</p>
        <Tweet id="1679053002462855169" />
        <p>(I got 60% from The Intelligent Investor, a book recommended by Warren Buffett and published in 1949, back when interest rates were non-zero. From it, I learned that the average dividend payout ratio has decreased from 90% in the 1940s to less than 30% in recent years. When interest rates were high in the 60s and 70s, the average dividend payout ratio was 60%.)</p>
        <p>Once we had permission to issue dividends, we needed a way to functionally do so. In our case, to 7,387 investors. This is a large part of the offering that the NYSE and NASDAQ provide their public, enterprise customers, such as Meta, NVIDIA, and Apple.</p>
        <p>If you’re a private company, options are limited. The portal we used to raise our crowdfunding round had been planning to build this feature for years, but hasn’t yet. Our cap table provider wouldn’t help either. Both an old-school bank and a new-age crypto startup quoted us over $100K for the privilege.</p>
        <p>Fortunately, we had been building Flexile, to solve our own problem of paying remote workers all over the world. Why not add dividends for investors to it? We decided to DIY.</p>
        <p>A few months later, in July 2023, we issued a $1M trial dividend to our cap table, using Flexile. Finally, my wife and I started planning a move to NYC to start a family.</p>
        <p>To align the team, I proposed an equity bonus, tied to the amount billed for the prior calendar year and our last public valuation. For example, someone who earned $198K would have received an additional 100%, or $198K, in Gumroad stock options, tied to the $100M crowdfunding valuation.</p>
        <p>To my surprise, there was more confusion than excitement. We jumped on a rare Zoom call, where I learned there were many problems.</p>
        <h2>Splitting equity hairs</h2>
        <p>First, no one knew how to value the equity they were being given. We had raised $5M at a $100M valuation from over 7,000 people, but that was now two years prior. What would someone pay for it today?</p>
        <p>Second, it wasn’t actually equity, but stock options, which had an exercise price. If someone wanted to exercise their options, that meant they’d have to pay the company to own the stock outright. And if they left, they’d only have 90 days to exercise, before they’d expire forever.</p>
        <p>Third, it was a universal bonus. Some people had kids, lived in an expensive city, or worked very part-time, and would have preferred to trade the option for equity for more cash upfront instead.</p>
        <p>All in all, equity was valuable to me, but not seen as valuable by the median freelancer. So why bother?</p>
        <Tweet id="1002103670400417792" />
        <p>I’ll admit my obsession with giving people equity stems from my own missed opportunity.</p>
        <p>In 2010, I dropped out of college to join Pinterest, accepting an offer of $65K a year + 0.5% of the company’s shares, vested over four years, with an industry-standard one year cliff.</p>
        <p>Six months in, I got a raise to $75K a year + 0.75% of the company.</p>
        <p>Then, a few months before my cliff, I was told the quality of my work was not up to the bar they were looking for and that “today was [my] last day.” I was fired, and all of my equity returned to the employee stock option pool, to be allocated to future full-time employees. Ashamed, I told everyone I “left” Pinterest and started raising money for Gumroad.</p>
        <p>With hindsight, I wasn't a great full-time employee. But I was a good freelancer. Before joining Pinterest full-time, I freelanced for them remotely. But I wanted to earn equity, so I dropped out. Before I did so, I tweeted:</p>
        <Tweet id="27946496473" />
        <p>Thirteen years later, Gumroad was a profitable business, and Flexile was handling our cap table and dividends. Why not add equity to the mix?</p>
        <h2>Equity by the hour</h2>
        <p><img src="/dividends/equitybythehour.png" /></p>
        <p>At the beginning of each year, we grant you a full year’s worth of invoices in unvested stock options. Options vest as invoices are approved, using our last public valuation.</p>
        <p>(In practice, we use the same option pool we set up as part of our Series A.)</p>
        <p>Then, at the end of the year, we issue a cash bonus equivalent to the exercise price of the vested stock options, which can be used to exercise. Upon exercising, you’re entitled to dividends proportional to your equity ownership in the business. Unexercised options expire ten years after leaving.</p>
        <p>Future liquidity is hard to reason about. A bird in the hand is worth more than a bird in the bush, but how much more? That’s different for everyone. So I made <a href="https://docs.google.com/spreadsheets/d/1OvHmIg5MA72oot-jRW-whEBROSmcMXcMRvFqkKfiQFM/edit#gid=805394775">a calculator</a> to help. For example:</p>
        <p>One of our software engineers could have made $308K this year. Instead, they decided to take 50% of their compensation as equity ($154K), saying: “My expenses are low, and I've saved up enough over the last year or two that I don't need the extra cash. I see the options as significantly discounted at their current strike price.”</p>
        <p>Someone who chose 80%: “Living from the 20% is enough for us. I know and trust the team who runs Gumroad, and have been planning to start long-term investing anyway.”</p>
        <p>Someone who chose 1% didn't want to miss out on the fun completely. “It has very little to do with my outlook on Gumroad. I'm just putting all my spare cash into <a href="https://lazytigerhostel.com/">my own business</a> this year.”</p>
        <p>For 2024, the average equity split is 18.3%.</p>
        <p><img src="/dividends/split.png" /></p>
        <p>In this way, since the beginning of 2024, Gumroad has raised $268,988 at the same $100M valuation we used for our 2021 crowdfunding round.</p>
        <p>We also gave a token amount of equity to alumni who worked on Gumroad from 2011-2015, without whom you wouldn’t be reading any of this. <em>Thank you</em>!</p>
        <h2>D'end</h2>
        <p>On May 14, we issued our first annual dividend, of $5.34M, equal to 60% of 2023’s net income. For the first time, our team of remote freelancers were able to participate.</p>
        <p><img src="/dividends/metrics2023.png" /></p>
        <p>If you’d like to follow along, come to <a href="https://us02web.zoom.us/webinar/register/WN_zUIicnMhSe2sMGGwycGyjg#/">our next public board meeting</a>, live from our new office in DUMBO, Brooklyn, New York!</p>
        <Footer />
      </main>
    </Layout>
  )
}
