import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sahil Lavingia</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <img src="/painting.jpeg" className="background-image" />
      <span className="background-caption"><a href="https://instagram.com/shlpaints">Paintings<span> &rarr;</span></a></span>

      <main>
        <Header></Header>

        <label>
          Founder <span className="amp">&amp;</span> CEO
        </label>

        <h2 className="item gumroad">
          <a href="https://gumroad.com">
            Gumroad
          </a>
          <small>2011–</small>
        </h2>

        <label>
          Writer
        </label>

        <h2 className="item">
          <a href="/reflecting">
            Reflecting on My Failure to Build a Billion-Dollar Company
          </a>
          <small>Feb 2019</small>
        </h2>

        <h2 className="item">
          <a href="/bubble">
            From Bubble to Bubble
          </a>
          <small>Feb 2018</small>
        </h2>

        <label>
          Angel investor
        </label>

        <h2 className="item">
          Movable Ink, Lambda School, Squad, Haus, Figma, Clubhouse, and <a href="https://twitter.com/i/lists/230576934">others</a>.
        </h2>

        <label>
          Monthly newsletter-sender
        </label>

        <form action="https://gumroad.com/follow_from_embed_form" className="gumroad-follow-form-embed" method="post">
          <input name="seller_id" type="hidden" value="2614450981218" />
          <input name="email" placeholder="Your email address" type="email" />
          <button data-custom-highlight-color="" type="submit">Subscribe</button>
        </form>
      </main>
    </Layout>
  )
}
