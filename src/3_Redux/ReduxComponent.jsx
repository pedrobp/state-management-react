import React from 'react';
import Button from '../Util/Button';
import Input from '../Util/Input';
import { connect } from 'react-redux';
import * as ACTIONS from '../Store/Actions/Actions';

const ReduxComponent = props => {
  return (
    <>
      <div>State Example 1: {props.fromStateBoolean.toString()}</div>
      <Button onClick={() => props.negateAction()} label="Negate State" />

      <div>Counter State: {props.fromStateCounter}</div>
      <Button onClick={() => props.increaseAction()} label="Increase Counter" />

      <div>User Input State: {props.fromStateInput}</div>
      <Input onChange={event => props.inputAction(event.target.value)} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    fromStateBoolean: state.boolean,
    fromStateInput: state.userInput,
    fromStateCounter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputAction: text => dispatch(ACTIONS.userInput(text)),
    increaseAction: () => dispatch(ACTIONS.increase),
    negateAction: () => dispatch(ACTIONS.negate)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
