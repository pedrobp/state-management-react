import * as ACTION_TYPES from './ActionTypes';

export const INCREASE = {
  type: ACTION_TYPES.INCREASE
};

export const NEGATE = {
  type: ACTION_TYPES.NEGATE
};

export const userInput = text => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload: text
  };
};
