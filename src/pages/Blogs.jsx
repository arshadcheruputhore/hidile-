import React from 'react'
import FeaturedPosts_Blogs from '../components/FeaturedPosts_Blogs'
import BlogCards_Blogs from '../components/BlogCards_Blogs'

function Blogs() {
  return (
    <div className='px-3 sm:px-8 md:px-14 lg:px-32 py-8 sm:py-14 lg:py-18'>
      <FeaturedPosts_Blogs />

      <BlogCards_Blogs />
    </div>
  )
}

export default Blogs