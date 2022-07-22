import { micromark } from 'micromark'
import { loadAllPosts, loadPost } from '../../lib/api'

type Props = {}

export default function Post({ post }) {
  return (
    <h1>{post.title}</h1>
  )
}

export async function getStaticProps({ params }) {
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
