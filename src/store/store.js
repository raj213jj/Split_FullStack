import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import groupReducer from './groupReducer';
import expenseReducer from './expenseReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    groups: groupReducer,
    expenses: expenseReducer,
});

const store = createStore(rootReducer);

export default store;