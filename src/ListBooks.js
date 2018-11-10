import React, { Component } from 'react';
import Shelf from './Shelf'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
 
    static propTypes = {
        books : PropTypes.array.isRequired,
        updateBookShelf : PropTypes.func.isRequired
      }
    
    render() {
        const { books, updateBookShelf } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        { /* Assign updateBookShelf function to each shelf and categorically displays books in respective shelves */}
                        <Shelf name='Currently Reading' updateBookShelf={updateBookShelf} books = {books.filter(book => book.shelf ==="currentlyReading")}/>
                        <Shelf name='Want to Read' updateBookShelf={updateBookShelf} books = {books.filter(book => book.shelf ==="wantToRead")}/>
                        <Shelf name='Read' updateBookShelf={updateBookShelf} books = {books.filter(book => book.shelf ==="read")}/>
                    </div>
                </div>
                <div className='open-search'>
                    <Link to='/search'>Add</Link>
                </div>
            </div>
        )
      }
  }
  
export default ListBooks