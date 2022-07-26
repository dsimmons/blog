import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/layout'
import { loadAllPosts } from '../lib/api'

import type Post from '../interfaces/post'

import styles from '../styles/Home.module.css'

type Props = {
  posts: Array<Post>
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: { posts: loadAllPosts(), }
  }
}
