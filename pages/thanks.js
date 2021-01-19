import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Minimalist Entrepreneur</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="twitter:title" content="The Minimalist Entrepreneur" />
        <meta name="twitter:description" content="A four-week cohort-based course" />
        <meta name="twitter:image" content="https://sahillavingia.com/minient.png" />
      </Head>

      <a className="tiny-title" href="/">
        &larr; Sahil Lavingia
      </a>

      <a className="twitter-link" href="https://twitter.com/shl">
        <img src="/twitter.png" className="twitter" /> &rarr;
      </a>

      <main class="centered-main">
        <h2 class="centered item">Thank you for your trust.</h2>
        <p class="centered">Details will be sent to you soon via minimalistentrepreneurcourse@gmail.com</p>
        <p><img src="/thanks.png" /></p>
      </main>
    </Layout>
  )
}
