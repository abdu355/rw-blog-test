// web/src/pages/HomePage/HomePage.js

import { Link, routes } from '@redwoodjs/router'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <main>Home</main>
      <BlogPostsCell />
    </>
  )
}

export default HomePage