import React, { useContext, useState } from 'react';

const Frame = ({ title, image, setImage, isPiece, send, current }) => {
  console.log(current.value);
  return (
    <div class='frame'>
      <h1>{title}</h1>
      {image && (
        <div>
          <img class='input-img' alt='not found' src={URL.createObjectURL(image)} />
          <br />
        </div>
      )}
      <br />

      <br />

      <input
        type='file'
        name='myImage'
        disabled={current.matches('upload_puzzle') && isPiece ? true : false}
        onChange={(event) => {
          setImage(event.target.files[0]);
          if (isPiece) {
            console.log('uploaded the piece');
          } else {
            send('picture_is_loaded');
          }
        }}
      />
    </div>
  );
};

export default Frame;
