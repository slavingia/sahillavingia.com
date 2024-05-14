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

        <h2 className="item index-list-of-writings-title">
          <a href="https://www.amazon.com/Minimalist-Entrepreneur-Great-Founders-More/dp/0593192397">
            The Minimalist Entrepreneur
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
          <small>2018</small>
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

        <a href="https://instagram.com/shlpaints">
          <h2 className="paintings">
            <img src="/painting.jpeg" className="painting" alt="Digital painting of train station, 2019" />
            <img src="/rocks.png" className="painting" alt="Oil painting of rocks, 2017" />
            <img src="/bhosle.jpeg" className="painting" alt="Oil painting of woman, 2019" />
          </h2>
        </a>
      </main>
    </Layout>
  )
}
