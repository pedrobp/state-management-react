import React from 'react';
import ContextExample from './APIContext';

class APIClassComponent extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: 20 }}>
        <h3>API Context: No Provider Example</h3>
        <ContextExample.Consumer>
          {value => (
            <div>
              <div>Text Value: {value.textValue}</div>
              <div>Number Value: {value.numberValue}</div>
            </div>
          )}
        </ContextExample.Consumer>
      </div>
    );
  }
}

export default APIClassComponent;
