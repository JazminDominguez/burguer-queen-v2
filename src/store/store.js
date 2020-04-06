import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import menuReducer from "../reducers/index";
import ticketReducer from "../reducers/ticket-reducer";

const reducer = combineReducers({ ticket: ticketReducer, menu: menuReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
