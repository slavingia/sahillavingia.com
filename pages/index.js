import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sahil Lavingia</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header></Header>

        <label>
          Founder <span className="amp">&amp;</span> CEO
        </label>

        <h2 className="item gumroad">
          <a href="https://gumroad.com">
            Gumroad
          </a>
        </h2>

        <label>
          Writer
        </label>

        <h2 className="item">
          <a href="/reflecting">
            Reflecting on My Failure to Build a Billion-Dollar Company
          </a>
        </h2>

        <h2 className="item">
          <a href="/bubble">
            From Bubble to Bubble
          </a>
        </h2>

        <label>
          Angel investor
        </label>

        <h2 className="item">
          Movable Ink, Lambda School, Squad, Haus, Figma, and Clubhouse, among <a href="https://twitter.com/i/lists/230576934">others</a>.
        </h2>

        <label>
          Monthly newsletter-sender
        </label>

        <form action="https://gumroad.com/follow_from_embed_form" className="gumroad-follow-form-embed" method="post">
          <input name="seller_id" type="hidden" value="2614450981218" />
          <input name="email" placeholder="Your email address" type="email" />
          <button data-custom-highlight-color="" type="submit">Subscribe</button>
        </form>

        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </main>
    </Layout>
  )
}
