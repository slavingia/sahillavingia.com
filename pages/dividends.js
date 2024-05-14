import Head from 'next/head'
import Layout from '../components/layout'
import { Tweet } from 'react-tweet'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Paying People in Equity and Dividends</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="twitter:title" content="Paying People in Equity and Dividends" />
        <meta name="twitter:description" content="How we work at Gumroad" />
        <meta name="twitter:image" content="https://sahillavingia.com/gumroadians.png" />
      </Head>

      <main className="centered-main">
        <label>
          May 28, 2024 by <a href="/">Sahil Lavingia</a>
        </label>

        <h2 className="item">
          Paying People in Equity and Dividends
        </h2>

        <p>Coming soon...</p>

        <Footer />
      </main>
    </Layout>
  )
}
