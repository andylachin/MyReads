import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state={
  	books: [],
  }

		

componentDidMount(){
	BooksAPI.getAll().then(books=>{
	this.setState({books})
})
}


changeShelf=(book,shelf)=>{
	BooksAPI.update(book,shelf).then((res)=>{
    	book.shelf=shelf;
      this.setState((prevState)=>({
      	books:prevState.books.filter((b)=>b.id!==book.id).concat(book)
      }))
    })
}

  render(){
    return (
      <div className="app">
       <Route exact path='/' render={()=>(
    		<BookShelves
				changeShelf={this.changeShelf}
				books={this.state.books}
      		/>
    	)} />
		<Route path='/search' render={()=>(
        	<SearchPage
          		books={this.state.books}
				addBook={this.changeShelf}
          	/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
