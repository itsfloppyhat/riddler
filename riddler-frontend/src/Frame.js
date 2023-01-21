import React, { useContext, useState } from 'react';

const Frame = ({ title, image, setImage, isPiece, send, current }) => {
  console.log(current.value);

  const encodeFile = async (file) => {
    const base64 = await convertBase64(file);
    console.log(base64);
    return base64;
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div class='frame'>
      <h1>{title}</h1>
      {image && (
        <div>
          <img class='input-img' alt='not found' src={URL.createObjectURL(image)} />
        </div>
      )}

      <input
        type='file'
        name='myImage'
        disabled={current.matches('upload_puzzle') && isPiece ? true : false}
        onChange={(event) => {
          const encodedFile = encodeFile(event.target.files[0]);
          setImage(event.target.files[0]);
          if (isPiece) {
            send('piece_is_loaded');
          } else {
            send('picture_is_loaded');
          }
        }}
      />
    </div>
  );
};

export default Frame;
