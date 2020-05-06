import React, { createContext, useState } from "react"
import uuid from "uuid/dist/v1"

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "midnights children", author: "salmon rushdie", id: 1 },
    { title: "game of thrones", author: "george r.r. martin", id: 2 },
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  console.log(books)
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
