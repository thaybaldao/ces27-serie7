# Calculator React App

This project was developed as an assignment for CES-26 course of Instituto Tecnológico de Aeronáutica.
It is a React App for a calculator that uses Redux to deal with its states.
Besides the four basic arithmetic operations, this calculator also supports floating point operations and contains clear and backspace buttons.

![Calculator](calculator.png)

## Project Structure
    ├── src                       # dynamic files
      ├── components              # redux files to deal with calculator states
        ├── root
          ├── Root.js             # implements calculator interface
          ├── styles.js           # styles for calculator interface
      ├── redux                   # redux files to deal with calculator states
        ├── actions.js
        ├── reducers.js
        ├── store.js
        ├── types.js
     ├── App.js                 # integrates react and redux

## Redux actions implemented

- `SET_EXPRESSION`: adds entries to the arithmetic expression.
- `EVALUATE_EXPRESSION`: calculates the result of the arithmetic expression.
- `DELETE_LAST_ENTRY`: deletes the last entry of the arithmetic expression.
- `CLEAR_EXPRESSION`: clears the arithmetic expression.

The implementation of these actions deals with some possible errors of usage by the user.

## Running the project

### `expo start`
### `w`

Runs the app in the development mode.\
Open [http://localhost:19006/](http://localhost:19006/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
