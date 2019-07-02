import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import categoryReducer from './categoryReducer';
import errorReducer from './errorReducer';


export default combineReducers({
    expense: expenseReducer,
    category: categoryReducer,
    error: errorReducer
});