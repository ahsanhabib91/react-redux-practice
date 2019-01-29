import React from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import PostList from "./PostList";
import UserList from "./UserList";

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
      <div className="row">
        <div className="col">
          <PostList />
        </div>
        <div className="col">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default App;
