import Link from 'next/link'

export default function Header({ children }) {
  return (
    <div>
      <h1 className="title">
        Sahil Lavingia
      </h1>

      <a href="https://twitter.com/shl">
        <img src="/twitter.png" className="twitter" />
      </a>

      <a href="mailto:sahil@hey.com" className="email">
        sahil@hey.com
      </a>
    </div>
  )
}