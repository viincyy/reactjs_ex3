import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
const rootReducers = combineReducers(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { rootReducers }