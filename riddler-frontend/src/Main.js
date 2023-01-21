import React, { useEffect } from 'react';
import { AppProvider, useAppContext } from './Context';
import Frame from './Frame';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CustomPopup from './CustomPopup';
import MyPopup from './MyPopup';
import axios from 'axios';

const Main = () => {
  const { puzzleImage, pieceImage, setPuzzleImage, setPieceImage, send, current } = useAppContext();

  return (
    <>
      <h1>Riddler</h1>
      <p>Please only upload .png file type images</p>
      <div class='container'>
        <Frame
          title='Upload puzzle'
          image={puzzleImage}
          setImage={setPuzzleImage}
          send={send}
          current={current}
        />
        <Frame
          title='Upload piece'
          image={pieceImage}
          setImage={setPieceImage}
          isPiece={true}
          send={send}
          current={current}
        />
      </div>
      {current.matches('upload_to_backend') && <CustomPopup />}
    </>
  );
};

export default Main;
