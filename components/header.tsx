import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>/dev/simmonsd</h1>
      <nav>
        <div>
          <Link href="/posts">
            Posts
          </Link>
        </div>
      </nav>
    </header>
  )
}
