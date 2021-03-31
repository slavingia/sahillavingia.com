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
        <meta name="twitter:image" content="https://sahillavingia.com/title.png" />
      </Head>

      <main class="centered-main">
        <h2 class="centered item">Thank you!</h2>
        <p class="centered">Details will be sent to you soon via minimalistentrepreneurcourse@gmail.com</p>
        <p><img src="/thanks.png" /></p>
      </main>
    </Layout>
  )
}
