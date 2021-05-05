import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import sortBy from 'sort-by'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className='list-books'>
        <div className='list-books-top'>
          <input
            className='search-books'
            type='text'
            placeholder='Search books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
                    <div class="d-inline text-right" >
                        <div class="col">
                            <button type="button" className="btn-view-1">
                            
                            </button>
                            <button type="button" class="btn-view-2">
                              
                          </button>
                        </div>                            
                    </div> 




        <ol className='book-list'>
          {showingBooks.map((book) => (
            <li key={book.id} className='book-list-item'>
             <div style={{ width: 128, height: 190, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail && (book.imageLinks.thumbnail)})` }}></div>

            
              
              <div className='book-details'>
                <h4>{book.title}</h4>
                <label>Description:</label>
                <p>{book.description}</p> 
                <p>Author: {book.authors[0]} </p>
                <span> Published on: {book.publishedDate}</span>           
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBooks
