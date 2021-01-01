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

	
async componentDidMount(){
	const books = await BooksAPI.getAll()
	this.setState({books})
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
    	<div>
    		<BookShelves
    			changeShelf={this.changeShelf}
				books={this.state.books}
    		/>
		</div>
    	)} />
		<Route path='/search'>
			<SearchPage 
				defaultShelf={}
				books={this.state.books} 
				addBook={this.changeShelf} 
			/>
		</Route>
      </div>
    )
  }
}

export default BooksApp
