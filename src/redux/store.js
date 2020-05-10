import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

// middleware: whenever action is fired or dispatch we can catch them or display them.
// stands between action and Root Reducer
// logger loggs messages documenting this process.

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
