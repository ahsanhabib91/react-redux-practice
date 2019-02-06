import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: "10px" }}>
        <nav className="nav nav-pills nav-fill">
          <Link
            className={`nav-item nav-link ${
              window.location.pathname === "/" ? "active" : ""
            }`}
            to="/"
          >
            Book List
          </Link>
          <Link
            className={`nav-item nav-link ${
              window.location.pathname === "/posts" ? "active" : ""
            }`}
            to="/posts"
          >
            Post List
          </Link>
          <Link
            className={`nav-item nav-link ${
              window.location.pathname === "/book/create" ? "active" : ""
            }`}
            to="/book/create"
          >
            Book Create
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
