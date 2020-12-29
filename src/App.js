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

	  SHELVES = [
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
    		{this.SHELVES.map((shelf)=>{
  				<BookShelves
    				title={shelf.title}
					changeShelf={this.changeShelf}
					key={shelf.id}
    			/>
  			})}
		</div>
    	)} />
		<Route path='/search'>
			<SearchPage books={this.state.books} addBook={this.changeShelf} />
		</Route>
      </div>
    )
  }
}

export default BooksApp
