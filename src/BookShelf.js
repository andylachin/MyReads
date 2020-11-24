import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class BookShelf extends Component {
  state = {
  	books: []
  }
 
componentDidMount(){
  	BooksAPI.getAll().then(book=>{
    	this.setState({books: book})
      console.log(book)
    })
}

  
render(){
    const {bookShelf} = this.props

	return(
    	<div className="bookshelf">
                  <h2 className="bookshelf-title">{bookShelf}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
						{this.state.books.map(book => 
                         	<Book
                         		title = {book.title}
								image = {book.imageLinks.smallThumbnail}
								key = {book.id}
								author = {book.authors}
                         	/>
                         )}
                    </ol>
                  </div>
                </div>
    )
}
}

export default BookShelf