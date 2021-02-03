import { combineReducers } from "redux";
import reducerCounter from "./reducerCounter";
import reducerShow from "./reducerShow";
import reducerAddition from './reducerAddition'

const rootReducer = combineReducers({
  reducerCounter: reducerCounter,
  reducerShow: reducerShow,
  reducerAddition:reducerAddition
});

export default rootReducer
