import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_CART } from "../redux/constants/shoes";

class Details extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Details information
              </h5>
              <button
                type="button"
                className="close details__close_btn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <img
                    src={this.props.details.image}
                    alt={this.props.details.name}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-6">
                  <h3>{this.props.details.name}</h3>
                  <h5 className="mb-5">
                    <b>${this.props.details.price}</b>
                  </h5>
                  <p>{this.props.details.description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  document.querySelector(".details__close_btn").click();
                  return this.props.addCart(this.props.details);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addCart: (data) => {
      let action = {
        type: ADD_CART,
        data,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
