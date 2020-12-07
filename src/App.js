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

changed = (shelf,book) => {
	BooksAPI.update(book,shelf).then(
      ()=>(this.setState((prevstate)=>({
      books: prevstate.books.filter(b =>{
      if (b.id===book.id){
          return(book.shelf=shelf);
      }
     else{
        return (book);
      }
      })
      })
      ) 
   ));
}

  render(){
    return (
      <div className="app">
       <Route exact path='/' render={()=>(
    		<BookShelves
				books={this.state.books}
				changed={this.changed}
      		/>
    	)} />
		<Route path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
