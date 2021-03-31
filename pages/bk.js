import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Minimalist Entrepreneur</title>
        <link rel="icon" href="/pink object.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shl" />
        <meta name="twitter:title" content="The Minimalist Entrepreneur" />
        <meta name="twitter:description" content="How Great Founders Do More With Less" />
        <meta name="twitter:image" content="https://sahillavingia.com/HJjDU2wx.png" />
      </Head>

      <a className="tiny-title" href="/">
        &larr;
      </a>

      <main class="course">
        <img src="/title.png" width="400" />
        <img src="/subtitle.png" width="400" />
        <p style={{
          textAlign: "center"
        }}>
          <a href="https://www.amazon.com/dp/B08V52DP47/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1" style={{background: "#d4287f", color: "white", padding: "12px 25px", borderRadius: "99px", fontSize: 18, textDecoration: "none", margin: "0px auto 0", display: "inline-block", zIndex: "1"}}>Pre-order now</a>
        </p>
        <img src="/yellow object.png" width="1200" style={{ position: "absolute", top: "-700px", left: "-700px", zIndex: "-1" }} />
        <img src="/pink object.png" width="120" style={{ position: "absolute", top: "1062px", right: "-300px", zIndex: "1" }} />
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "1300px",
          transform: "rotate(-57deg)",
          position: "absolute",
          top: "198px",
          left: "470px",
          zIndex: "1"
        }}></div>
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "550px",
          position: "absolute",
          top: "653px",
          left: "170px",
          zIndex: "1"
        }}></div>
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "130px",
          transform: "rotate(90deg)",
          position: "absolute",
          top: "1138px",
          left: "170px",
          zIndex: "1",
          marginBottom: "60px"
        }}></div>
        <div style={{
          background: "white",
          width: "3px",
          height: "130px",
          transform: "rotate(90deg)",
          position: "relative",
          top: "488px",
          left: "170px",
          zIndex: "1",
          marginBottom: "60px"
        }}></div>
      </main>
    </Layout>
  )
}
