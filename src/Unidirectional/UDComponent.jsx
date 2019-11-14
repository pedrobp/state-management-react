import React from 'react';

class UDComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: 'Default State'
    };
  }

  handleChangeState = () => {
    this.setState({ state1: 'Changed State' });
  };

  render() {
    return (
      <div>
        <div>{this.state.state1.toString()}</div>
        <button onClick={this.handleChangeState}>Change Component State</button>
        <div style={{paddingTop: 20}}>Parent State: {this.props.value}</div>
        <button onClick={this.props.changeState}>Increase Parent State</button>
      </div>
    );
  }
}

export default UDComponent;
