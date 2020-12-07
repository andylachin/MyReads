import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookShelves extends Component{
 
	render(){
      const {changed,books}=this.props
     
      	const currentlyReading = books.filter(book=>book.shelf==='currentlyReading')
     	const wantToRead = books.filter(book=>book.shelf==='wantToRead')
     	const read = books.filter(book=>book.shelf==='read')
        
        
     return(
          
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
          		<BookShelf
          				title={'Currently Reading'}
						booksonShelf={currentlyReading}
						changed={changed}
          			/>
				<BookShelf
          				title={'Want to Read'}
						booksonShelf={wantToRead}
						changed={changed}
          			/>
				<BookShelf
          				title={'Read'}
						booksonShelf={read}
						changed={changed}
          			/>
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
}

export default BookShelves