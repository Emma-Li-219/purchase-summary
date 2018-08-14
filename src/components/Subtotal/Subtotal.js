import React from 'react';

const subTotal = ({ price }) => {
  return (
    <div className="show-grid">
      <div className="title">Subtotal</div>
      <div className="title__context">
        <strong>{`$${price}`}</strong>
      </div>
    </div>
  );
}
export default subTotal;