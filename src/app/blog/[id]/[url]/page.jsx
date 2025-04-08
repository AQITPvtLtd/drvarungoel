import React from 'react'
import BlogDetailed from './BlogDetailed'

const page = ({ params }) => {
  const { id, url } = params;
  return (
    <div>
      <BlogDetailed id={id} url={url} />
    </div>
  )
}

export default page