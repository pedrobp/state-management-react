import React from 'react';
import ContextExample from './APIContext';

const APIFunctionalComponent = () => {
  return (
    <ContextExample.Consumer>
      {value => (
        <div>
          <div>{value.textExample}</div>
          <button onClick={() => value.changeText()}>
            Change Context Text Value
          </button>
          <div>{value.numberExample}</div>
          <button onClick={() => value.increaseNumber()}>
            Increase Context Number Value
          </button>
        </div>
      )}
    </ContextExample.Consumer>
  );
};

export default APIFunctionalComponent;
