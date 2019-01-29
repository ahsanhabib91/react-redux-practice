// Actions -> function, type, paylaod
export const selectBook = book => {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};
