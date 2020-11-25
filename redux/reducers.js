import * as types from "./types";

let initialState = {
  expression: ""
};

let exp = "";

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    // adds entries to expression
    case types.SET_EXPRESSION:
      return{
        expression: state.expression + action.payload
      };

    // evalutes expression
    case types.EVALUATE_EXPRESSION:
      exp = state.expression;

      // first, verify if expression has at least
      // one entry and does not start with negative signal
      // nor with a number
      if (exp.length > 0 && exp[0] != '-' && isNaN(exp[0])) {
        // if this is true, clear expression, as it cant
        // be evaluated without typing the entire
        // expression again
        exp=""
      }
      // otherwise, verify if expression ends with a number
      // if this is true, try to evaluate it
      else if (!isNaN(exp[exp.length-1])) {
        try{
          // in case of sucess evaluating the expression,
          // overwrite it with its result
          exp = eval(exp).toString();
        } catch (error) {
          // in case of error evaluating the expression,
          // leave the expression as it is right now,
          // because the user may fix it using backspace
          console.error(error);
        }
      }

      return{
        expression: exp
      };

    // deletes last entry in expression
    case types.DELETE_LAST_ENTRY:
      exp = state.expression;

      // first, verify if expression has entries
      // to be deleted
      if(exp.length > 0){
        // if it has, remove the last character
        // of the expression
        exp = exp.substring(0, exp.length - 1);
      }

      return{
        expression: exp
      };

    // clears expression
    case types.CLEAR_EXPRESSION:
      // simply return empty string as expression
      return{
        expression: ""
      };

    default:
      return state;
  }
};

export default calculatorReducer;
