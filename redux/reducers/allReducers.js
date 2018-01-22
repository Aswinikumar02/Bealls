import poReducer from './poReducer.js'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    poReducer:poReducer
});

export default allReducers;
