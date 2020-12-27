import React from 'react'
import Book from './Book'

const BookShelf = props =>{
  
      const {title,changeShelf,shelf}=props
    	return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                          <ol className="books-grid">
                         	{shelf.map(book=>(
                         		<Book
									title={book.title}
									authors={book.authors}
									shelf={book.shelf}
									key={book.id}
									book={book}
									changeShelf={changeShelf}
                         		/>
                         	))}
						</ol>
                  </div>
                </div>
       ) 
  }

export default BookShelf