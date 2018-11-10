import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component{

    render(){
        const { books, name, updateBookShelf } = this.props
        
        return(

            <div className="bookshelf">
            {/*Assign shelf name, the list of books in that shelf, onChange function from props */}
					  <h2 className="bookshelf-title">{name}</h2>
					  <div className="bookshelf-books">
						<ol className="books-grid">
                        {
                            books.map((book) => 
                            <Book book={book} key={book.id} updateBookShelf={updateBookShelf}/>)
                        }
						</ol>
					  </div>
					</div>
            )
    }
}

export default Shelf