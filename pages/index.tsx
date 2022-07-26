import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'
import { loadAllPosts } from '../lib/api'

import type Post from '../interfaces/post'

import styles from '../styles/Home.module.css'

type Props = {
  posts: Array<Post>
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dan Simmons | /dev/simmonsd</title>
        <meta
          name="description"
          content="Personal blog of Dan Simmons"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section>
        <h1>Recent Posts:</h1>
        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <span>{post.date}</span>
            {' '}
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
        </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: { posts: loadAllPosts(), }
  }
}
