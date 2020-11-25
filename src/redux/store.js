import { createStore} from 'redux';
import calculatorReducer from './reducers'

// sets up store with calculator reducers
function configureStore(){
    return createStore(calculatorReducer);
}

export default configureStore;
