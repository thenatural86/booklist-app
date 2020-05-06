import React, { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

export const BookDetails = ({ title, author, id }) => {
  const { dispatch } = useContext(BookContext)
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id })}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  )
}
