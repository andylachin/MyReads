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
    const {books}=this.state
    return (
      <div className="app">
       <Route exact path='/' render={()=>(
    	<div>
				<h1>Hello, these are our books!</h1>
    		<BookShelves
    			changeShelf={this.changeShelf}
				books={books}
    		/>
		</div>
    	)} />
		<Route path='/search'>
			<SearchPage 
				book={this.state.books.map(book=>book)}
				books={this.state.books} 
				addBook={this.changeShelf} 
				shelf={'read'}
			/>
		</Route>
      </div>
    )
  }
}

export default BooksApp
