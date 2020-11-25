import * as types from './types';

export const set = (key) => {
  return {
    type: types.SET_EXPRESSION,
    payload: key
  }
}

export const evaluate = () => {
  return {
    type: types.EVALUATE_EXPRESSION
  }
}

export const deleteLastEntry = () => {
  return {
    type: types.DELETE_LAST_ENTRY
  }
}

export const clear = () => {
  return {
    type: types.CLEAR_EXPRESSION
  }
}
