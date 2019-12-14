import * as ACTION_TYPES from '../Actions/ActionTypes';

export const initialState = {
  boolean: false,
  counter: 0,
  userInput: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPES.INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };

    case ACTION_TYPES.NEGATE:
      return {
        ...state,
        boolean: !state.boolean
      };

    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        userInput: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
