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

        <div className="mobile-single-column" style={{
          display: "flex"
        }}>
          <div style={{
            flex: 4
          }}>
            <label>
              Book
            </label>

            <a href="https://minimalistentrepreneur.com/book">
              <img src="/book.png" className="book-cover" />
            </a>
          </div>
          <div style={{
            flex: 8
          }}>
            <label>
              Essays
            </label>

            <h2 className="item index-list-of-writings-title">
              <a href="/reflecting">
                Reflecting on My Failure to Build a Billion-Dollar Company
              </a>
              <small>2019</small>
            </h2>

            <h2 className="item index-list-of-writings-title">
              <a href="/work">
                No Meetings, No Deadlines, No Full-Time Employees
              </a>
              <small>2021</small>
            </h2>

            <h2 className="item index-list-of-writings-title">
              <a href="/bubble">
                From Bubble to Bubble
              </a>
              <small>2018</small>
            </h2>

            <h2 className="item index-list-of-writings-title">
              <a href="/border">
                Across the Border
              </a>
              <small>Sci-fi, 2018</small>
            </h2>
          </div>
        </div>

        <h2 className="fund">
          <label>
            Fund
          </label>

          Investing $10 million a year into early-stage startups. <a href="https://shl.vc/lp">Co-invest with me?</a>
        </h2>

        <h2 className="paintings">
          <label>
            Paintings
          </label>

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
