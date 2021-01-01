import React from 'react'
import Book from './Book'

const BookShelf = props =>{
  
  
      const {books,shelfTitle,changeShelf,shelf}=props
    	return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                          <ol className="books-grid">
							{books.map(book=>(
                             	<Book
                             		title={book.title}
									authors={book.authors}
									shelf={book.shelf}
									book={book}
									changeShelf={changeShelf}
									key={book.id}
                             	/>
                             ))}
						</ol>
                  </div>
                </div>
       ) 
  }

export default BookShelf