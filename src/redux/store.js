import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import JokesReducer from "./JokesReducer";

let reducers = combineReducers({JokesReducer});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;