import { combineReducers } from "redux-immutable";
import { reducer as bodyReducer } from "../body/store";

export default combineReducers({
  body: bodyReducer
});
