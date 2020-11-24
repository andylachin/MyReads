import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class MyBooks extends Component{
  
  
  
  
  
	render(){
    	return(
        	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
             <BookShelf
          		bookShelf='Currently Reading'
          	/>
          	
            </div>
            <div className="open-search">
              <Link
				to='/search'
			>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default MyBooks