import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const BookShelves = props =>{
 
      const {title,changeShelf}=props
  
        
     return(
          
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
       			{props.books.map((book)=>{
       				<BookShelf
       					title={title}
						changeShelf={changeShelf}
						shelf={book.shelf}
						key={book.id}
       				/>
       			})}
              <div>
                <Link
          			className="open-search"
                	to='/search'
               >Search Books</Link>
              </div>
            </div>
            <div className="open-search">
              
            </div>
          </div>
          
          
          
          
       
        )
}

export default BookShelves