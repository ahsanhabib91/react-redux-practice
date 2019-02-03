import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import PostList from "./PostList";
import UserList from "./UserList";
import NavBar from "./Navbar";

const App = props => {
  return (
    <div className="container">
      <NavBar />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={BookList} />
          <Route path="/posts" exact component={PostList} />
        </div>
      </BrowserRouter>
      {/* <div className="row">
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
      </div> */}
    </div>
  );
};

export default App;
