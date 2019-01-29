import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {
  render() {
    return <div>PostList</div>;
  }
}

const mapStateToProps = state => {};

export default connect(mapStateToProps)(PostList);
