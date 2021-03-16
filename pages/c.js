import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Creator-Owner Economy: Gumroad’s Series C</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="twitter:title" content="The Creator-Owner Economy" />
        <meta name="twitter:description" content="Gumroad’s Series C" />
        <meta name="twitter:image" content="https://sahillavingia.com/c.png" />
      </Head>

      <a className="tiny-title" href="/">
        &larr; Sahil Lavingia
      </a>

      <a className="twitter-link" href="https://twitter.com/shl">
        <img src="/twitter.png" className="twitter" /> &rarr;
      </a>

      <main className="centered-main content">
        <label>
          March 16, 2021
        </label>

        <h2 className="item">
          <strong>The Creator-Owner Economy: Gumroad’s Series C</strong>
        </h2>

        <p>Creators deserve to get paid for their work.</p>
        <p>To date, <a href="https://gumroad.com">Gumroad</a> has made it easy by enabling creators to sell digital products, online courses, and memberships directly to their audience. But earning an income isn't the only way to get paid.</p>
        <p>Owning equity in a business is another.</p>
        <h2>Turning creators into owners</h2>
        <p>In 2011, I raised a $1.1M Seed from Silicon Valley folks like Max Levchin, Chris Sacca, and First Round. In 2012 I raised a $7M Series A led by Kleiner Perkins.</p>
        <p>I’ve also failed to raise money. In 2015, after meeting with 150 investors and getting 150 nos, we wrote off a Series B and had to either sell, shut down, or get acquired. I <a href="/reflecting">wrote about this decision</a>, saying:</p>
        <blockquote>I was accountable to our creators, our employees, and our investors.</blockquote>
        <p>Ultimately, I chose our creators over our employees and our investors, deciding not to sell the company, instead shrinking the team from 20 to five in order to keep serving our creators.</p>
        <p>It was a painful decision, and in the years since I’ve thought about how to make interests align more cleanly. For example, I’ve recently started to <a href="/work">hire some of our top creators</a>.</p>
        <p>Another way Gumroad helps creators is by letting them “own” their audiences, instead of “renting” their audiences from social media platforms.</p>
        <p>A logical extension: owning part of Gumroad too.</p>
        <h2>The future of fundraising</h2>
        <p>On March 15, 2021 the SEC allowed startups to raise up to $5M using Regulation Crowdfunding. We hit that limit in just about 12 hours, raising the money from over 7,500 different individuals–including many of our creators.</p>
        <p><img src="/republic.png" style={{margin: "1rem 0"}} /></p>
        <p>Including $1M from Naval Ravikant, Jason Fried, and others, the total amount raised is $6M. We raised this capital at a $100M pre-money valuation.</p>
        <p>I hope to see more startups raise money from their customers and communities. <strong>Why isn’t it more common?</strong> First off, the legislation is a day old. So it’ll take some time to get people (both founders and retail investors) educated.</p>
        <p>There are other reasons too:</p>
        <ul>
          <li>It requires a lot of financial transparency–<em>I publish our financials already</em></li>
          <li>Having thousands of investors may create external pressure around decision-making around things like moderation, deplatforming, and pricing–<em>We’re very open about our decision-making already with our Open Board Meetings, encouraging feedback</em></li>
          <li>The brand and experience of VCs are often preferred by founders over the general public when selling customers, employees, etc–<em>I’ve raised money from VCs before, and can get the help I need (I’m kind of one myself!)</em></li>
          <li>Could only raise $1.07M–<em>You can raise up to $5M now</em></li>
          <li>You need to have high confidence you can reach a large audience of retail investors–<em>With “testing the waters” now allowed, founders can gauge demand before commiting</em></li>
        </ul>
        <p>More businesses will embrace this method to fundraise, because the upside of having your customers as your owners is too great. Customer-owners will help make your product better, use the product more, and help the company grow faster.</p>
        <p>There is one way to make this happen sooner: show founders that taking this approach will make their companies more valuable.</p>
        <p>So, to my 7,756 new investors asking "How can I help?" for the very first time:</p>
        <ul>
          <li><a href="https://gumroad.com/signup">Sign up for Gumroad as a creator</a></li>
          <li><a href="https://gumroad.com/discover">Support Gumroad creators as a customer</a></li>
          <li>Send me and the team feedback–via our new <a href="https://joinclubhouse.com/club/gumroad">Clubhouse club</a> and elsewhere</li>
          <li>Tell people Gumroad exists–Start by sharing this news!</li>
        </ul>

        <p>And if you're a founder, please check out <a href="https://raise.gumroad.com/">the materials I used</a> to crowdfund this raise, and reach out if you have any questions.</p>

        <hr />

        <label className="centered">
          Join 20,000 people receiving updates on the Gumroad journey:
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
