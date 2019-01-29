import React from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";

class BookList extends React.Component {
  state = {
    currentActive: null
  };

  selectBookHandler = (book, id) => {
    this.setState({ currentActive: id });
    this.props.selectBook(book);
  };

  renderListOfBooks = () => {
    const bookId = this.props.selectedBook
      ? this.props.selectedBook.title
      : null;

    return this.props.books.map((book, i) => (
      <li
        key={book.title}
        className={`list-group-item ${
          // this.state.currentActive === i ? "active" : "" // using STATE
          book.title === bookId ? "active" : "" // // using REDUX
        }`}
        onClick={() => this.selectBookHandler(book, i)}
      >
        {book.title} - {book.no_of_page}
      </li>
    ));
  };

  render() {
    return (
      <div>
        <ul>{this.renderListOfBooks()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { books: state.books, selectedBook: state.selectedBook };
};

export default connect(
  mapStateToProps,
  { selectBook }
)(BookList);
