import React from 'react';
import Popup from 'reactjs-popup';

export default () => (
  <Popup trigger={<button className='button'> Open Modal </button>} modal nested>
    {(close) => (
      <div className='modal'>
        <button className='close' onClick={close}>
          &times;
        </button>
        <div className='header'> Modal Title </div>
        <div className='content'></div>
      </div>
    )}
  </Popup>
);
