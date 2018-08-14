import React from 'react';

const estimatedTotal = ({ price }) => {
  return (
    <div className="show-grid">
      <div className='title'>
        <h2>Est. total</h2>
      </div>
      <div className='title__context'>
        <h2>{`$${price}`}</h2>
      </div>
    </div>
  );
}
export default estimatedTotal;