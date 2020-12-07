import React from 'react'
import Book from './Book'

const BookShelf = props =>{
  
      const {title,changed,booksonShelf}=props
    	return(
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                          <ol className="books-grid">
                         	{booksonShelf.map(book=>(
                         		<Book
                         			image={book.imageLinks.thumbnail}
									title={book.title}
									authors={book.authors}
									shelf={book.shelf}
									key={book.id}
									changed={changed}
                         		/>
                         	))}
						</ol>
                  </div>
                </div>
       ) 
  }

export default BookShelf