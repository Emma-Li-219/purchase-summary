import React, { Component } from "react";

export default class ItemDetails extends Component {
  state = {
      open: false
  }

  render() {
    const content = (
      <div>
        <div className="title">
          <img
            src={this.props.imgURL}
            alt="thumbnail"
          />
        </div>
        <div className="title">
          <p>
            Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
          </p>
          <div className="show-grid">
            <div className="title">
              <strong>{`$${this.props.price}`}</strong>
              <br />
              <strong className="price-strike">{`$${this.props.oldprice}`}</strong>
            </div>
            <div className="title__context">
              <strong>Qty: 1</strong>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <button
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{" "}
          {this.state.open === false ? `+` : `-`}
        </button>
        {this.state.open === true ? content : null}
      </div>
    );
  }
}
