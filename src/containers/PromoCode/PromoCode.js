import React, { Component } from "react";
import { connect } from "react-redux";
import { handleChange } from "../../actions/promoCodeActions";

class PromoCodeDiscount extends Component {
  state = {
    open: false
  };

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    const content = (
        <div className="show-grid">
            <form>
              <label>Promo Code</label>
              <br />
              <input
                type="text"
                placeholder="Enter promo code"
                value={this.props.promoCode}
                onChange={this.handleChange}
              />
              <button
                className="btn-round"
                // type="submit"
                disabled={this.props.isDisabled}
                onClick={this.props.giveDiscount}
              >
                Apply
              </button>
            </form>
      </div>
    );
    return (
      <div>
        <button
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code {this.state.open === false ? `+` : `-`}
        </button>
        {this.state.open ? content : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCodeDiscount);
