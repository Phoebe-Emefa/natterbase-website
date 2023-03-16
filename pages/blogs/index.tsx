import AllBlogs from '@/src/components/Blogs/AllBlogs'
import FeaturedBlogs from '@/src/components/Blogs/FeaturedBlogs'
import Layout from '@/src/components/Layout'
import React from 'react'

const Blogs = () => {
  return (
    <Layout hasHeader={true}>
      <FeaturedBlogs />
      <AllBlogs />
    </Layout>
  )
}

export default Blogs