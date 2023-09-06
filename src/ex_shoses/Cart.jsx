import React, { Component } from "react";
import { connect } from "react-redux";
import { ADJUST_QUANTITY_CART, DELETE_CART } from "../redux/constants/shoes";

class Cart extends Component {
  renderCart = () => {
    return this.props.cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img src={item.image} style={{ width: "100px" }} alt={item.name} />
          </td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <button
              className="btn-danger"
              onClick={() => this.props.adjust(index, -1)}
            >
              -
            </button>
            <strong>{item.soLuong}</strong>
            <button
              className="btn-success"
              onClick={() => this.props.adjust(index, 1)}
            >
              +
            </button>
          </td>
          <td>
            <strong
              style={{ cursor: "pointer" }}
              onClick={() => this.props.deleteCart(index)}
            >
              X
            </strong>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-5">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <>{this.props.cart.length ? this.renderCart() : "Empty cart"}</>
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (index) => {
      let action = {
        type: DELETE_CART,
        data: index,
      };
      dispatch(action);
    },
    adjust: (index, value) => {
      let action = {
        type: ADJUST_QUANTITY_CART,
        index,
        value,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
