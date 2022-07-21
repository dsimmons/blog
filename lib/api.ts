import fs from 'fs'
import matter from 'gray-matter'

const postsDir = `${process.cwd()}/_posts`

function loadPost(fileName: string) {
  const slug = fileName.replace(/\.md$/, '')
  const payload = fs.readFileSync(`${postsDir}/${fileName}`, 'utf8')
  const { data, content } = matter(payload)

  return {
    ...data,
    slug,
    content
  }
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir)
  return postFiles
    .map(loadPost)
    .sort((post1, post2) => post1.date > post2.date ? -1 : 1)
}
