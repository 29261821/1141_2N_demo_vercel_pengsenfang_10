import { useState } from 'react'

import blogData_10 from '../assets/data/blogData.json'
import Blog_10 from '../components/Blog_10'
import Wrapper from '../assets/wrappers/Blog2_10'

const BlogLocalJsonPage_10 = () => {
  const [name, setName] = useState('pengsenfang')
  const [id, setId] = useState('213410110')
  const [blogs_10, setBlogs_10] = useState(blogData_10)

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local json -- {name},213410110</h2>
        </div>
        <div className='blogs-center'>
          {blogs_10.map((item) => {
            const { id, title, descrip, category, img } = item
            return (
              <Blog_10
                key={id}
                id={id}
                title={title}
                descrip={descrip}
                category={category}
                img={img}
              />
            )
          })}
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogLocalJsonPage_10
