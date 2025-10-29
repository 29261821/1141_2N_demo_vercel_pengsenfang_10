import { useState, useEffect } from 'react'

//import blogData_10 from '../assets/data/blogData.json'
import Blog_10 from '../components/Blog_10'
import Wrapper from '../assets/wrappers/Blog2_10'

//const api_url = 'http://localhost:5000/api/blog_10'

import { supabase } from '../db/clientSupabase.js'

const BlogSupaPage_10 = () => {
  const [name, setName] = useState('pengsenfang')
  const [id, setId] = useState('213410110')
  const [blogs_10, setBlogs_10] = useState([])

  const fetchBlogFromSupaServer = async () => {
    try {
      let { data, error } = await supabase.from('blog_10').select('*')
      //const response = await fetch(api_url)
      //const data = await response.json()
      console.log('blogs', data)
      setBlogs_10(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchBlogFromSupaServer()
  }, [])

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from Node Server-- {name},213410110</h2>
        </div>
        <div className='blogs-center'>
          {blogs_10.map((item) => {
            const { id, title, descript, category, img } = item
            return (
              <Blog_10
                key={id}
                id={id}
                title={title}
                descrip={descript}
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

export default BlogSupaPage_10
