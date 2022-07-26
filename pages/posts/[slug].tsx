import { micromark } from 'micromark'

import Head from 'next/head'
import Layout from '../../components/layout'

import type Post from '../../interfaces/post'

import { loadAllPosts, loadPost } from '../../lib/api'

type Props = {
  post: Post,
}

export default function Post({ post }: Props) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string,
  }
}

export async function getStaticProps({ params }: Params) {
  const post = loadPost(`${params.slug}.md`)
  const content = micromark(post.content)

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: loadAllPosts().map(({ slug }) => ({
      params: { slug }
    })),
    fallback: false,
  }
}
