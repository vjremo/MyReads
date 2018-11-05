import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

class ListBooks extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      query : PropTypes.string.isRequired
    }
   
    render() {
        const { books } = this.props
        const { query } = this.props
        let showingBooks = []
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            
          showingBooks = books.filter((book)=>match.test(book.title))
        } else {
          showingBooks = books
        }

        return (
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className='book-list'>
                                {showingBooks.map((book) => (
                                    <li key={book.title}>
                                    <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                        <select>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
        )
      }
  }
  
export default ListBooks