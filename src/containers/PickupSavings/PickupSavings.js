import React, { Component } from 'react';

var styles = {
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
};

class PickupSavings extends Component {
  state = {
    totalSavings: 3.85
  }
  render() {
    const tooltip = (
      <div className="tooltip title">
        Pickup savings
        <span className='tooltiptext'>
          Picking up your order in the store helps cut costs, and we pass the
          savings on to you.
        </span>
      </div>
    );
    return (
      <div className="show-grid">
        <div className='title'>
            {tooltip}
        </div>
        <div className='title__context' style={styles.totalSavings}>{`$${this.props.price}`}</div>
      </div>
    );
  }
}

export default PickupSavings;
