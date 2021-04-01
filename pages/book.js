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

      <main className="course book">
        <a href="https://amzn.to/3mb3FuD" style={{textAlign: "center", display: "block", margin: "0 auto"}}>
          <img className="title" src="/title.png"  style={{maxWidth: "360px", width: "100%"}}  />
          <img className="subtitle" src="/subtitle.png"  style={{maxWidth: "360px", width: "100%"}}  />
        </a>
        <p style={{
          textAlign: "center"
        }}>
          <a href="https://amzn.to/3mb3FuD" className="retailer-link">Amazon</a>
          <a href="http://links.penguinrandomhouse.com/type/affiliate/isbn/9780593192399/siteID/8001/retailerid/2/trackingcode/PRH614281C130" className="retailer-link">Barnes and Noble</a>
          <a href="http://links.penguinrandomhouse.com/type/affiliate/isbn/9780593192399/siteID/8001/retailerid/29/trackingcode/PRH614281C130" className="retailer-link">Bookshop.org</a>
          <a href="http://links.penguinrandomhouse.com/type/affiliate/isbn/9780593192399/siteID/8001/retailerid/5/trackingcode/PRH614281C130" className="retailer-link">Books A Mllion</a>
          <a href="http://links.penguinrandomhouse.com/type/affiliate/isbn/9780593192405/siteID/8001/retailerid/3/trackingcode/PRH614281C130" className="retailer-link">Apple Books</a>
        </p>
        <img className="yellow" src="/yellow object.png" width="1200" style={{ position: "absolute", top: "-700px", left: "-700px", zIndex: "-1" }} />
        <img className="pink" src="/pink object.png" width="120" style={{ position: "absolute", top: "1062px", right: "-300px", zIndex: "1" }} />
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "1300px",
          transform: "rotate(-57deg)",
          position: "absolute",
          top: "198px",
          left: "470px",
          zIndex: "1"
        }} className="lever"></div>
        <div style={{
          background: "#aaa",
          width: "3px",
          height: "550px",
          position: "absolute",
          top: "653px",
          left: "170px",
          zIndex: "1"
        }} className="stem"></div>
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
        }} className="stand"></div>
        <div style={{
          background: "white",
          width: "3px",
          height: "130px",
          transform: "rotate(90deg)",
          position: "relative",
          top: "488px",
          left: "170px",
          zIndex: "1",
          marginBottom: "60px",
          opacity: "0"
        }}></div>
      </main>
    </Layout>
  )
}
