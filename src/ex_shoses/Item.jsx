import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_CART, DETAILS } from "../redux/constants/shoes";

class Item extends Component {
  render() {
    let { image, name, shortDescription, price } = this.props.shoes;
    return (
      <div className="card col-4">
        <img
          className="card-img-top"
          style={{ width: "150px", margin: "auto" }}
          src={image}
          alt={name}
        />
        <div className="card-body">
          <h4
            className="card-title"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "16px",
              margin: 0,
            }}
          >
            {name}
          </h4>
          <p
            className="card-text"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "14px",
            }}
          >
            {shortDescription}
          </p>
          <p className="card-text font-weight-bold">${price}</p>
          <button
            className="btn btn-primary"
            onClick={() => this.props.addCart(this.props.shoes)}
          >
            Add
          </button>
          <button
            className="btn btn-info ml-3"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => this.props.details(this.props.shoes)}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addCart: (data) => {
      let action = {
        type: ADD_CART,
        data,
      };

      dispatch(action);
    },
    details: (item) => {
      let action = {
        type: DETAILS,
        item,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
