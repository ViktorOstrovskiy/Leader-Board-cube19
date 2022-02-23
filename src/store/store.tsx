import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import inteceptor from "../axios/inteceptors";
import reducer from "./form-service/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userValues: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

inteceptor.setupInterceptors(store);
