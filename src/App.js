import React from 'react'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    query: '',
    showSearchPage: false,
    books: []
  }
  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    
  }

  
  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook
          books = {this.state.books} 
          query = {this.state.query}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
                      <h1>MyReads</h1>
                  </div>
            <ListBooks 
          books = {this.state.books}
          query = {this.state.query} />
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
