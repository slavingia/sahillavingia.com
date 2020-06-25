import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sahil Lavingia</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <h1 className="title">
          Sahil Lavingia
        </h1>

        <a href="https://twitter.com/shl">
          <img src="/twitter.png" className="twitter" />
        </a>

        <a href="mailto:sahil@hey.com" className="email">
          sahil@hey.com
        </a>

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
          <a href="https://marker.medium.com/reflecting-on-my-failure-to-build-a-billion-dollar-company-b0c31d7db0e7">
            Reflecting on My Failure to Build a Billion-Dollar Company
          </a>
        </h2>

        <h2 className="item">
          <a href="https://medium.com/@shl/from-bubble-to-bubble-21d86195e178">
            From Bubble to Bubble
          </a>
        </h2>

        <label>
          Angel investor in startups including
        </label>

        <h2 className="item">
        HelloSign, Movable Ink, Lambda School, Squad, Haus, Figma, and Clubhouse.
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

      <style jsx global>{`
        html,
        body,
        input,
        button {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
        }

        .amp {
          font-family: Baskerville, Georgia, serif;
          font-style: italic;
        }
      `}</style>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }

        main {
          padding: 0 0 3rem 3rem;
          flex: 1;
          width: 100%;
          max-width: 800px;
        }

        a {
          color: inherit;
        }

        .twitter {
          width: 32px;
          height: 32px;
          position: relative;
          display: inline-block;
          top: 6px;
          margin-left: 18px;
        }

        .email {
          margin-left: 18px;
          position: relative;
          top: -5px;
        }

        .title {
          margin: 0;
          padding: 1rem;
          line-height: 1.15;
          font-size: 2rem;
          color: white;
          background: black;
          display: inline-block;
        }

        label {
          line-height: 1.5;
          font-size: 1.5rem;
          display: block;
          color: #aaa;
          margin-top: 3rem;
        }

        .item,
        input,
        button {
          font-size: 3rem;
          line-height: 1;
          color: black;
          margin-top: 2rem;
        }

        label + .item {
          margin-top: 0.5rem;
        }

        input,
        button {
          margin-top: 1rem;
          margin-right: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 2rem;
          outline: none;
          border: none;
          display: inline-block;
          border-radius: 4px;
          height: 56px;
        }

        input {
          border: 1px solid #aaa;
        }

        button {
          background: black;
          color: white;
          border: none;
        }

        button:hover {
          cursor: pointer;
        }

        @media (max-width: 600px) {
          main {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
