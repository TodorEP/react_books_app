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

  // clearQuery = () => {
  //   this.setState({ query: '' })
  // }

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

        {/* {showingBooks.length !== books.length && (
          <div className='showing-bookss'>
            <span>Now showing {showingBooks.length} of {books.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )} */}

                    <div class="d-inline text-right" >
                        <div class="col">
                            <button type="button" id="view-1" class="btn btn-default">
                                <i class="fa fa-th-list"></i>
                            </button>
                            <button type="button" id="view-2" class="btn btn-default">
                                <i class="fa fa-th-large"></i>
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
