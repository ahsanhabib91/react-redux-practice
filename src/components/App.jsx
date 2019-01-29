import React from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

const App = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BookList />
        </div>
        <div className="col">
          <BookDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
