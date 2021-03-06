import {applyMiddleware, combineReducers, createStore} from 'redux'
import * as reducers from './client/reducers'
import promiseMiddleware from './client/middleware/promises'
import logger from 'redux-logger'

const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, logger)(createStore);

const store = createStoreWithMiddleware(reducer, {
    issues: [],
    user: [],
});

export default store;