import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  HashRouter,
  MemoryRouter
} from "react-router-dom";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import PostList from "./PostList";
import UserList from "./UserList";
import NavBar from "./Navbar";
import history from "../history";

const App = props => {
  return (
    <div className="container">
      <BrowserRouter>
        {/* <HashRouter> */}
        {/* <MemoryRouter> */}
        <div>
          <NavBar />
          <Switch>
            {/* Switch tag is taking 1(first occurance) router at a time among the multiple router with same path="/provided_url" */}
            <Route path="/" exact component={BookList} />
            <Route path="/posts" exact component={PostList} />
          </Switch>
        </div>
        {/* </MemoryRouter> */}
        {/* </HashRouter> */}
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

/**
 * {BrowserRouter} cretes {history object} internally. {history object} extract the url pathname(url_after_root_url or window.location.pathname)
 * and communicate with {BrowserRouter}. Then {BrowserRouter} load component based on the path="" of Route Component and the pathname
 * <Switch></Switch> tag is taking 1(first occurance) router at a time among the multiple router with same path="/provided_url"
 * {HashRouter} -> http://localhost:3000/#/provided_url -> requested url will always be Request_URL: http://localhost:3000/
 */
