import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class List extends Component {
  renderShoese = () => {
    return this.props.shoeses.map((shoes, index) => {
      return <Item shoes={shoes} key={index} />;
    });
  };
  render() {
    return <div className="col-7 row gap-1">{this.renderShoese()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoeses: state.shoesReducer.shoeses,
  };
};

export default connect(mapStateToProps)(List);
