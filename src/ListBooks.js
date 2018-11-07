import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    constructor(props){
        super(props)
        this.state ={
            books : []
        }
    }
    
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books })
        })
      }
   
    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf name='Currently Reading' books={this.state.books.filter(book => book.shelf ==="currentlyReading")}/>
                        <Shelf name='Want to Read' books={this.state.books.filter(book => book.shelf ==="wantToRead")}/>
                        <Shelf name='Read' books={this.state.books.filter(book => book.shelf ==="read")}/>
                    </div>
                </div>
            </div>
        )
      }
  }
  
export default ListBooks