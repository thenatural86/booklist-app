import React, { useContext, useState } from "react"
import { BookContext } from "../contexts/BookContext"

export const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD_BOOK", book: { title, author } })
    setTitle("")
    setAuthor("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        required
      />
      <input
        value={author}
        type="text"
        placeholder="author"
        onChange={(e) => {
          setAuthor(e.target.value)
        }}
        required
      />
      <input value="add book" type="submit" />
    </form>
  )
}
