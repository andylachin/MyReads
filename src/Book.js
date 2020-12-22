import React from 'react'

const Book = props => {
  
  
  const changed=(e)=>{
  	e.preventDefault()
    const selectedShelf = e.target.value
    props.changeShelf(props.book,selectedShelf)
  }
  
  const {image,title,authors,shelf}=props
	return(
  <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={shelf} onChange={changed}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors}</div>
                        </div>
                      </li>
  )
}

export default Book