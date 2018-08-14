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
            src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
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
              <strong className="price-strike">{`$${this.props.price}`}</strong>
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
