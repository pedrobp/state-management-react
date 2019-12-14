import React, { useState } from 'react';
import ContextExample from './APIContext';
import APIComponent from './APIComponent';
import APIClassComponent from './APIClassComponent';

const APIContainer = () => {
  const [textExample, setTextExample] = useState('Initial Value');
  const [numberExample, setNumberExample] = useState(10);

  const changeText = () => {
    setTextExample('Changed Value');
  };

  const increaseNumber = () => {
    setNumberExample(numberExample + 1);
  };

  return (
    <>
      <ContextExample.Provider
        value={{
          textExample,
          numberExample,
          changeText,
          increaseNumber
        }}
      >
        <h3>API Context: Integrated Provider and State Example</h3>
        <APIComponent />
      </ContextExample.Provider>

      <APIClassComponent />
    </>
  );
};

export default APIContainer;
