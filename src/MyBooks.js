import React, { Component } from 'react'

import Book from './Book'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'


class MyBooks extends Component{
  state={
    books: []
  }
  
 

componentDidMount(){
	BooksAPI.getAll().then(book=>{
	this.setState({books:book})
})
}

changed=e=>{
  e.preventDefault()
	console.log(e.target.value)
}
  
	render(){
    	return(
      
          )
    }
}

export default MyBooks