import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import axios from 'axios';
import { useAppContext } from './Context';
import matched_image from './assets/correct.png';

const CustomPopup = () => {
  const { puzzleImage, pieceImage, setPuzzleImage, setPieceImage, send, current } = useAppContext();

  const [makeCall, setMakeCall] = React.useState(false);

  const openModal = async () => {
    console.log('FJKDLFJDKLJFKLDJ:FJ');
    send('waiting_for_response');
    setMakeCall(true);
    axios.get('/').then((res) => console.log(res));
  };

  useEffect(async () => {
    if (makeCall) {
      axios
        .post('/riddler', {
          puzzleImage: puzzleImage,
          pieceImage: pieceImage,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <Popup trigger={<button className='button'>Open Modal </button>} modal nested>
      {(close) => (
        <div className='modal'>
          <button className='close' onClick={close}>
            &times;
          </button>
          <div className='header'> Modal Title </div>
          <div className='content'>
            <img src={matched_image} width='600' />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default CustomPopup;
