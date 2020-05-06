import React, { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

export const BookDetails = ({ title, author, id }) => {
  // console.log(book)
  const { removeBook } = useContext(BookContext)
  return (
    <li onClick={() => removeBook(id)}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  )
}
