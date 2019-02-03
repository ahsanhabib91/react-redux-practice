import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcPosts, fetchUser } from "../actions";
import UserList from "./UserList";

class PostList extends Component {
  componentDidMount() {
    this.props.fetcPosts();
  }

  selectUserHandler = userId => {
    console.log(userId);
    this.props.fetchUser(userId);
  };

  renderPostList = () => {
    return this.props.posts.map(p => (
      <div key={p.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{p.title}</h5>
          <p className="card-text">{p.body}</p>
          <a
            href="#"
            onClick={() => this.selectUserHandler(p.userId)}
            className="card-link"
          >
            User Detail
          </a>
        </div>
      </div>
    ));
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <h3>PostList</h3>
          <div
            style={{ height: "71vh", overflow: "auto", border: "1px solid" }}
          >
            {this.renderPostList()}
          </div>
        </div>
        <div className="col">
          <UserList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetcPosts, fetchUser }
)(PostList);
