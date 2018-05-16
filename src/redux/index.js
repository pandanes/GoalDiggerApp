import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducer from './modules'

const store = createStore(reducer)

//const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store