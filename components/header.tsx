import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          /dev/simmonsd
        </Link>
      </h1>
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
