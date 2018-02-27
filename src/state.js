import {createStore, combineReducers} from 'redux'
import * as reducers from './reducers'

console.log(reducers);

const reducer =  combineReducers(reducers);

const store = createStore(reducer, {
    issues: [],
    counter: 0,
});

export default store;