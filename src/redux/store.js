import { createStore,applyMiddleware } from "redux";
import postReducer from "./reducers/postReducers";
import {thunk} from "redux-thunk"


let store=createStore(postReducer,applyMiddleware(thunk));

export default store;