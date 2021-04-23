import Link from 'next/link'

export default function Header({ children }) {
  return (
    <div>
      <a href="/">
        <h1 className="title" style={{fontWeight: "bold"}}>
          Sahil Lavingia
        </h1>
      </a>
    </div>
  )
}