import React from 'react';
import Button from '../Util/Button';

class TBComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Default State'
    };
  }

  handleChangeState = () => {
    this.setState({ value: 'Changed State' });
  };

  render() {
    return (
      <>
        <div>{this.state.value.toString()}</div>
        <Button onClick={this.handleChangeState} label="Change Local State" />
        
        <div>Parent State: {this.props.value}</div>
        <Button onClick={this.props.changeState} label="Increase Parent State" />
      </>
    );
  }
}

export default TBComponent;
