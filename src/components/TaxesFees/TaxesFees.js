import React from 'react';

const taxesFees = ({taxes}) => {
    return (
      <div className="show-grid">
        <div className='title'>Est. taxes & fees <p>(Based on 94085)</p></div>
        <div className='title__context'>
          <strong>{`$${taxes}`}</strong>
        </div>
      </div>
    );
}
export default taxesFees;