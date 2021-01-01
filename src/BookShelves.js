import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const BookShelves = props =>{
 
  
      const SHELVES = [
  		{
    		title: 'Currently Reading',
    		id: 'currentlyReading'
  		},
  		{
    		title: 'Want To Read',
    		id: 'wantToRead'
  		},
  		{
    		title: 'Read',
    		id: 'read'
  		}
];	  
      
      const {books,changeShelf}=props
     return(
          
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
       			{SHELVES.map((shelf)=>{
       				return <BookShelf
       					shelf={shelf}
       					books={books.filter((book)=>book.shelf===shelf.id)}
       					shelfTitle={shelf.title}
       					changeShelf={changeShelf}
       					key={shelf.id}
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