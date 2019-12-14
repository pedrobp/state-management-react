import React from 'react';
import UDComponent from './TBComponent';

class UDContainer extends React.Component {
  constructor() {
    super();
    this.state = { value: 20 };
  }

  handleChangeState = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  render() {
    return (
      <>
        <h3>Unidirectional Container</h3>
        <UDComponent
          value={this.state.value}
          changeState={this.handleChangeState}
        />
      </>
    );
  }
}

export default UDContainer;
