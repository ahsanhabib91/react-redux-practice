import React from "react";

class NavBar extends React.Component {
  state = { currentUrl: "" };

  componentDidMount() {
    const url = window.location.href;
    this.setState({ currentUrl: url });
  }

  urlClickHandler = url => {
    this.setState({ currentUrl: url });
  };

  render() {
    const { currentUrl } = this.state;

    return (
      <div style={{ marginBottom: "10px" }}>
        <nav className="nav nav-pills nav-fill">
          <a
            className={`nav-item nav-link ${
              currentUrl === "http://localhost:3000/" ? "active" : ""
            }`}
            href="/"
            onClick={() => this.urlClickHandler("/")}
          >
            Book List
          </a>
          <a
            className={`nav-item nav-link ${
              currentUrl.indexOf("/posts") !== -1 ? "active" : ""
            }`}
            href="/posts"
            onClick={() => this.urlClickHandler("/posts")}
          >
            Post List
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
