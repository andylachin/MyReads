import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'
import {DebounceInput} from 'react-debounce-input'

class SearchPage extends Component{
  state = {
  	query: '',
    searchedBooks: [],
    defaultShelf: 'None'
  }



updateQuery = e => {
   e.preventDefault()
  const query=e.target.value.trim()
  this.setState({query})
  if(!query){
  	this.setState({searchedBooks: []})
  }else{
  	BooksAPI.search(query).then(res=>{
  	this.setState({searchedBooks: res})
  })
  }
}



  
changeShelf = (book,shelf) => {
	this.props.addBook(book,shelf)
  	this.removeBook(book)
}

removeBook(book){
	console.log(book)
}

	render(){
      const {query,searchedBooks,defaultShelf}=this.state
		return(
        	<div className="search-books">
          	<div className="search-books-bar">
          		<Link
          			className="close-search"
          			to='/'
          		>Close</Link>
            <form className="search-books-input-wrapper">
                <DebounceInput
					debounceTimeout={900}
					type="text" 
					placeholder="Search by title or author" 						
					name="bookTitle" 												
					value={query}	
					onChange={this.updateQuery}
				/>
				
			</form>
            </div>
            <div className="search-books-results">
                 <div>
                     <ol className="books-grid">
					{!searchedBooks.error && 
                    searchedBooks.map(book=>(
                    	<Book
                     		title={book.title}
							authors={book.authors}
							changed={this.changeShelf}
							key={book.id}
							changeShelf={this.changeShelf}
							book={book}
							shelf={defaultShelf}
                     	/>
                    ))
                    }
					
				</ol> 
                 </div>
                 
            </div>
          </div>
        )
    }
}

SearchPage.propTypes = {
	books: PropTypes.array.isRequired,
  	addBook: PropTypes.func.isRequired
}

export default SearchPage