import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchPage extends Component{
  state = {
  	query: '',
    searchedBooks: []
  }

static Proptypes = {
	
}

updateQuery = e => {
  	this.setState({query: e.target.value})
}

handleSearch = e => {
  e.preventDefault()
  const query = this.state.query.trim()
	BooksAPI.search(query).then(res=>{
    	this.setState({searchedBooks: res})
    })
  }
  
changeShelf = shelf => {
	console.log(shelf)
}

	render(){
    const {query, searchedBooks} = this.state
	
      
		return(
        	<div className="search-books">
          
            <div className="search-books-bar">
          		<Link
          			className="close-search"
          			to='/'
          		>Close</Link>
              
              <form className="search-books-input-wrapper"
          		
          	>
                <input 
					type="text" 
					placeholder="Search by title or author" 						
					name="bookTitle" 												
					value={query}	
					onChange={this.updateQuery}
				/>
				<button onClick={this.handleSearch}>Search Books</button>
				
					
              </form>
            </div>
            <div className="search-books-results">
                 <div>
					
					<ol className="books-grid">
					{searchedBooks.map(book=>(
                    	<Book
                     		title={book.title}
							authors={book.authors}
							image={book.imageLinks.thumbnail}
							changed={this.changeShelf}
							key={book.id}
                     	/>
                    ))}
				</ol>
                 </div>
                 
            </div>
          </div>
        )
    }
}

export default SearchPage