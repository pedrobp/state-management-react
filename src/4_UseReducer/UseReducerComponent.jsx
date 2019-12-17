import React, { useReducer } from 'react';
import Button from '../Util/Button';
import Input from '../Util/Input';
import * as ACTION_TYPES from '../Store/Actions/ActionTypes';
import rootReducer, { initialState } from '../Store/Reducers/RootReducer';

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <>
      <div>State Example 1: {state.boolean.toString()}</div>
      <Button onClick={() => dispatch({ type: ACTION_TYPES.NEGATE })} label="Negate State" />

      <div>Counter State: {state.counter}</div>
      <Button onClick={() => dispatch({ type: ACTION_TYPES.INCREASE })} label="Increase Counter" />

      <div>User Input State: {state.userInput}</div>
      <Input onChange={event => dispatch({ type: ACTION_TYPES.USER_INPUT, payload: event.target.value })} />
    </>
  );
};

export default UseReducerComponent;
