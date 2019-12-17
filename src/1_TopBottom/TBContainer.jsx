import React from 'react';
import TBComponent from './TBComponent';

class TBContainer extends React.Component {
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
        <h3>Top-Bottom Example Container</h3>
        <TBComponent
          value={this.state.value}
          changeState={this.handleChangeState}
        />
      </>
    );
  }
}

export default TBContainer;
