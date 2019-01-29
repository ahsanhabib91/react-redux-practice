import React from "react";
import { connect } from "react-redux";

const BookDetail = props => {
  if (!props.book) {
    return <div>Kindly select a Book for detail information</div>;
  }
  const { title, no_of_page } = props.book;
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Book Detail: </h5>
          <h6 className="card-subtitle mb-2 text-muted">Book Title: {title}</h6>
          <h6 className="card-subtitle mb-2 text-muted">
            NO. of Pages: {no_of_page}
          </h6>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { book: state.selectedBook };
};

export default connect(mapStateToProps)(BookDetail);
