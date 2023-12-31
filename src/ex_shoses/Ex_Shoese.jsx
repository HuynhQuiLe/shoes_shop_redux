import React, { Component } from "react";
import Cart from "./Cart";
import List from "./List";
import Details from "./Details";

export default class Ex_Shoese extends Component {
  render() {
    return (
      <div className="container-fluid py-5">
        <h1 className="text-center text-info mb-5">SHOES SHOP</h1>
        <div className="row">
          <Cart />
          <List />
        </div>
        <Details />
      </div>
    );
  }
}
