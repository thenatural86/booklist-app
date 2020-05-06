- Build context first
- Store book data in BookContext
  - import react, createContext, useState
  - export const BookContext
  - create BookContextProvider
  - take in props
  - useState() to store book data inside of state. An array of objects with multiple properties
  - the data is called books and setBooks which is the function to change the state
  - two functions
    - add and remove a book from the data

# booklist-app

-useReducer()

1. reducer function that contains the state manipulation logic. it interacts with state and changes the data
2. action object that describes the type of change to make inside the reducer function
3. dispatch function that sends the action to the reducer

- call the dispatch
- pass in the action that goes to the reducer
- reducer makes changes to state

- action object, takes in the type of change to make and can take a second argument of a payload
- then gets sent to reducer via a dispatch function --> dispatch({type: "ADD_BOOK, book:{}})
- reducer takes in action and state we are manipulating as parameters --> reducer(state, action)
  - check the action type
  - update the state object
  - return the state
    - Provider value
