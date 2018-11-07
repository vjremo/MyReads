import React from 'react'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  
  render() {

    return (


      <div>
         <Route path='/search' component={SearchBook}/>
        
        <Route exact path='/' component={ListBooks}/>
       
      </div>

    )
  }
}

export default BooksApp
