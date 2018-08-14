import React from 'react';

const taxesFees = ({taxes,zipCode}) => {
    return (
      <div className="show-grid">
        <div className='title'>Est. taxes & fees <p>(Based on {zipCode})</p></div>
        <div className='title__context'>
          <strong>{`$${taxes}`}</strong>
        </div>
      </div>
    );
}
export default taxesFees;