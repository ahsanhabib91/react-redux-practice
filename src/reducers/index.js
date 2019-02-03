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

const postsReducer = (posts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }
  return posts;
};

const selectedUserReducer = (selectedUser = null, action) => {
  if (action.type === "FETCH_USER") {
    return action.payload;
  }
  return selectedUser;
};

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer,
  posts: postsReducer,
  selectedUser: selectedUserReducer
});

/**
 * Reducers -> function() => (previousStateDataOfItself, action) {}
 * return -> cannot return undefined
 * should not do any I/O operation inside reducer
 * Do not mute state -> don't do state.push, state[0], state.pop() and so on
 * Other Actiono Creators can be called inside an Action Creator. Just need
 * to make sure to dispatch each Action Creator instead of just call/invoking them.
 * For ref -> stephen-grider-blog-app -> actions/index.js -> fetchPostsAndUsers(), fetchPosts(), fetchUser(id)
 * calling action creators in action creators -> Stephen Grider Lecture 186
 */
