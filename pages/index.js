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

      <main className="centered-main">
        <Header></Header>

        <label>
          Writer
        </label>

        <form action="https://gumroad.com/follow_from_embed_form" className="gumroad-follow-form-embed index-follow-form" method="post">
          <input name="seller_id" type="hidden" value="2614450981218" />
          <input name="email" placeholder="Your email address" type="email" />
          <button data-custom-highlight-color="" type="submit">Subscribe</button>
        </form>

        <h2 className="item index-list-of-writings-title">
          <a href="/ipo">
            The Creator-Owner Economy: Gumroad’s "IPO"
          </a>
          <small>2021</small>
        </h2>

        <h2 className="item index-list-of-writings-title">
          <a href="/work">
            No Meetings, No Deadlines, No Full-Time Employees
          </a>
          <small>2021</small>
        </h2>

        <h2 className="item index-list-of-writings-title">
          <a href="/reflecting">
            Reflecting on My Failure to Build a Billion-Dollar Company
          </a>
          <small>2019</small>
        </h2>

        <h2 className="item index-list-of-writings-title">
          <a href="/border">
            Across the Border
          </a>
          <small>Fiction, 2018</small>
        </h2>

        <h2 className="item index-list-of-writings-title">
          <a href="/bubble">
            From Bubble to Bubble
          </a>
          <small>2018</small>
        </h2>

        <label>
          Painter
        </label>

        <h2 className="item">
          <a href="https://instagram.com/shlpaints">
            <img src="/painting.jpeg" className="painting" />
            <img src="/rocks.png" className="painting" />
            <img src="/bhosle.jpeg" className="painting" />
          </a>
        </h2>
      </main>
    </Layout>
  )
}
