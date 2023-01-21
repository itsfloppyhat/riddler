import React, { createContext, useContext, useEffect, useState } from 'react';

import { useMachine } from '@xstate/react';
import promiseMachine from './XState/XState.js';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [puzzleImage, setPuzzleImage] = useState(null);
  const [pieceImage, setPieceImage] = useState(null);
  const [current, send] = useMachine(promiseMachine);

  return (
    <AppContext.Provider value={{ puzzleImage, pieceImage, setPuzzleImage, setPieceImage, current, send }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
