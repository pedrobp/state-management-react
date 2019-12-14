import React from 'react';
import ContextExample from './APIContext';
import Button from '../Util/Button';

const APIFunctionalComponent = () => {
  return (
    <ContextExample.Consumer>
      {value => (
        <>
          <div>Context Text Value: {value.textExample}</div>
          <Button onClick={() => value.changeText()} label="Change Context Text Value" />

          <div>Context Number Value: {value.numberExample}</div>
          <Button onClick={() => value.increaseNumber()} label="Increase Context Number Value"/>
        </>
      )}
    </ContextExample.Consumer>
  );
};

export default APIFunctionalComponent;
