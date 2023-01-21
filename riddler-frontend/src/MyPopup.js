import React from 'react';

const MyPopup = () => {
  return (
    <div className='modal'>
      <button className='close' onClick={() => console.log('FJDKLFJDK')}>
        &times;
      </button>
      <div className='header'> Modal Title </div>
      <div className='content'></div>
    </div>
  );
};

export default MyPopup;
