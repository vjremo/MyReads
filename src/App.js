import React from 'react'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  //Fetches the Books which have shelf assigned
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //Updates the shelf of an book and adds updated book to state, to re-render UI
  updateBookShelf = (book, shelf) =>{
    BooksAPI.update(book, shelf).then(response => {
            book.shelf = shelf
            this.setState(state => ({
                books : state.books.filter(currentBook => currentBook.id !== book.id).concat([book])
            })
            )
        })
    }
  render() {

    return (
      <div>
      {
        /* Use React Route to navigate between search and main page
        Pass the list of books, onChange function for shelf as props 
        for SearchBook and ListBooks components */}
        <Route path ='/search' render = {() =>(
          <SearchBook
          books = {this.state.books}
          updateBookShelf = {this.updateBookShelf}
          />
        )}
        />
        <Route exact path ='/' render = {() => (
          <ListBooks 
          books = {this.state.books}
          updateBookShelf = {this.updateBookShelf}
          />
          )} 
        />
      </div>
    )
  }
}

export default BooksApp
