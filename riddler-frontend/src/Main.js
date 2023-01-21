import React from 'react';
import { AppProvider, useAppContext } from './Context';
import Frame from './Frame';

const Main = () => {
  const { puzzleImage, pieceImage, setPuzzleImage, setPieceImage, send, current } = useAppContext();

  return (
    <>
      <h1>Riddler</h1>
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
    </>
  );
};

export default Main;
