import Meta from './meta'
import Header from './header'
import Footer from './footer'

type Props = {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
