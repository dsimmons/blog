import { micromark } from 'micromark'
import { loadAllPosts, loadPost } from '../../lib/api'
import type Post from '../../interfaces/post'

type Props = {
  post: Post,
}

export default function Post({ post }: Props) {
  return (
    <h1>{post.title}</h1>
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
