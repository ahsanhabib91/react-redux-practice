import React from "react";
import { connect } from "react-redux";

// Add a loader in future
const UserList = ({ user }) => {
  let userDetail;
  if (!user) {
    userDetail = <div>No User Available !!!</div>;
  } else {
    userDetail = (
      <div className="card border-dark mb-3">
        <div className="card-header">{user.name}</div>
        <div className="card-body text-dark">
          <h5 className="card-title">{user.username}</h5>
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3>User Detail</h3>
      {userDetail}
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.selectedUser };
};

export default connect(mapStateToProps)(UserList);
