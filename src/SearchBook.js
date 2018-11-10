import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {
   
  constructor(props) {
    super(props)
    this.state = {
      results : [],
      query : ''
    }
  }

  static propTypes = {
    books : PropTypes.array.isRequired,
    updateBookShelf : PropTypes.func.isRequired
  }

  //Updates the query from input and invokes search function
   updateQuery = (event) => {
    this.setState({ query: event.target.value },this.submitSearch)
  }

  /*Referred tutorial of Ryan Waite for below sections 
  Link: https://www.youtube.com/watch?v=acJHkd6K5kI&t=4158s */ 
  submitSearch(){
    const { query } = this.state
    const {  books } = this.props

    if(query ===''||query === undefined){
      return this.setState({results : [] })
    }

    /* NOTE: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms. */
    //Trims the query input and initiates search
    if(query.trim()){
      BooksAPI.search(query).then(response => {
        if(response.error){
          this.setState({results : []})
        }else{
          //Iterate through books and assign shelf value for the books in Main page (ListBooks)
          response.forEach(book =>{
            const foundBook = books.find(({ id }) => id === book.id);
            book.shelf = foundBook ? foundBook.shelf : 'none';
          })
          //Sort books by title
          if(response.length !== 0) {
            response.sort(sortBy('title'))
          }
          /*Returns books which match the query-search terms as listed here :
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
          */
          return this.setState({results : response})
        }
      })
    }
  }

    render() {
      const { updateBookShelf }=this.props

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" 
                value={this.state.query} 
                placeholder="Search by title or author"
                onChange={this.updateQuery}/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                /*Display the books returned in search response*/
                this.state.results.map((book) =><Book book={book} key={book.id} updateBookShelf={updateBookShelf}/>)
              }
              </ol>
            </div>
          </div>
        )
      }
  }
  
export default SearchBook