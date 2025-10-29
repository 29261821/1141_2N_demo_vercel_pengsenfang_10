import Wrapper from '../assets/wrappers/BookList_10'
import books_data from '../assets/data/booklist_data2.js'

console.log(books_data)

const BookListPage_10 = () => {
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data.map((book) => {
          return (
            <article className='book'>
              <img src={book.img} />
              <div className='bookinfo'>
                <h1>{book.title}</h1>
                <h4>{book.author}</h4>
              </div>
            </article>
          )
        })}
      </section>
    </Wrapper>
  )
}

export default BookListPage_10
