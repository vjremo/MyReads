import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import ListBooks from './ListBooks'
class SearchBook extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired    
    }
   state ={ 
       query : ''
   }
   updateQuery = (query) => {
    this.setState({ query: query.trim() })
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
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {        
                  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                
                <input type="text" 
                value = {this.state.query} 
                placeholder="Search by title or author"
                onChange={(event) => this.updateQuery(event.target.value)}/>
                <div className="list-books">
                  <ListBooks 
                      books = {showingBooks} 
                      query = {this.state.query}/>
                </div>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
      }
  }
  
export default SearchBook