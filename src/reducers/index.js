import { combineReducers } from "redux";

const booksReducer = (books = [], action) => {
  return [
    { title: "Book 1", no_of_page: "101" },
    { title: "Book 2", no_of_page: "15" },
    { title: "Book 3", no_of_page: "25" },
    { title: "Book 4", no_of_page: "37" },
    { title: "Book 5", no_of_page: "49" }
  ];
};

const selectedBookReducer = (alreadySelectedBook = null, action) => {
  if (action.type === "BOOK_SELECTED") {
    return action.payload;
  }
  return alreadySelectedBook;
};

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer
});
