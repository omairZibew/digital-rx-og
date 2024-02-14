import { combineReducers } from 'redux';
import { authReducer } from './authSlice';
import { counterReducer } from "./counterSlice";


const rootreducer = combineReducers({
    auth:authReducer,
    counter: counterReducer,
});

export default rootreducer;