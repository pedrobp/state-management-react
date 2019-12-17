import React from 'react';
import ContextExample from './APIContext';

class APIClassComponent extends React.Component {
  render() {
    return (
      <>
        <h3>API Context: No Provider Example</h3>
        
        <ContextExample.Consumer>
          {value => (
            <>
              <div>Text Value: {value.textValue}</div>
              <div>Number Value: {value.numberValue}</div>
            </>
          )}
        </ContextExample.Consumer>
      </>
    );
  }
}

export default APIClassComponent;
