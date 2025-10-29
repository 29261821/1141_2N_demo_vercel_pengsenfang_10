import { useState } from 'react'

import blogData_10 from '../assets/data/blogData.json'
import Blog_10 from '../components/Blog2_10'
import Wrapper from '../assets/wrappers/Blog2_10'
import Alert_10 from '../components/Alert_10'

const BlogLocalJsonPage2_10 = () => {
  const [name, setName] = useState('pengsenfang')
  const [id, setId] = useState('213410110')
  const [blogs_10, setBlogs_10] = useState(blogData_10)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const removeItem = (id) => {
    showAlert(true, 'big removed', 'danger')
    setBlogs_10(blogs_10.filter((blog) => blog.id !== id))
  }
  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger')
    setBlogs_10([])
  }
  const LoadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success')
    setBlogs_10([])
    setBlogs_10(blogData_10)
  }

  return (
    <Wrapper>
      {alert.show && <Alert_10 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local json2 -- {name},213410110</h2>
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
                removeItem={removeItem}
              />
            )
          })}
        </div>
        <div className='flex justify-center items-center gap-8 mt-8'>
          <button
            type='button'
            className='text-red-700 bg-red-200 capitalize px-4 py-2 text-base rounded'
            onClick={clearAllBlogs}
          >
            {' '}
            Clear All Blogs
          </button>
          <button
            type='button'
            className='text-blue-700 bg-blue-200 capitalize px-4 py-2 text-base rounded'
            onClick={LoadAllBlogs}
          >
            {' '}
            Load All Blogs
          </button>
        </div>
      </section>
    </Wrapper>
  )
}

export default BlogLocalJsonPage2_10
