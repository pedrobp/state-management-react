import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from './Store/Actions/Actions';

const ReduxComponent = props => {
  return (
    <div>
      <div>State Example 1: {props.fromState1.toString()}</div>
      <button onClick={() => props.negateAction()}>Negate State</button>
      <div>Counter State: {props.fromStateCounter}</div>
      <button onClick={() => props.increaseAction()}>Increase Counter</button>
      <div>User Input State: {props.fromStateInput}</div>
      <input onChange={event => props.inputAction(event.target.value)}></input>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fromState1: state.state1,
    fromStateInput: state.userInput,
    fromStateCounter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputAction: text => dispatch(ACTIONS.userInput(text)),
    increaseAction: () => dispatch(ACTIONS.INCREASE),
    negateAction: () => dispatch(ACTIONS.NEGATE)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
