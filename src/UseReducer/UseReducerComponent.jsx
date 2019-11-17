import React, { useReducer } from 'react';
import * as ACTION_TYPES from '../Store/Actions/ActionTypes';
import rootReducer, { initialState } from '../Store/Reducers/RootReducer';

const UseReducerComponent = props => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <div>
      <div>State Example 1: {state.state1.toString()}</div>
      <button onClick={() => dispatch({ type: ACTION_TYPES.NEGATE })}>Negate State</button>
      <div>Counter State: {state.counter}</div>
      <button onClick={() => dispatch({ type: ACTION_TYPES.INCREASE })}>Increase Counter</button>
      <div>User Input State: {state.userInput}</div>
      <input onChange={event => dispatch({ type: ACTION_TYPES.USER_INPUT, payload: event.target.value })}></input>
    </div>
  );
};

export default UseReducerComponent;
