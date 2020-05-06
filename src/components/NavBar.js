import React, { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

const NavBar = (props) => {
  const { books } = useContext(BookContext)

  console.log(books)
  return (
    <div className="navbar">
      <h1>Philip's Reading List</h1>
      <p>You have {books.length} books in your list.</p>
    </div>
  )
}

export default NavBar
