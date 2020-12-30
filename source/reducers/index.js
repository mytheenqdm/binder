import { combineReducers } from "redux";
import todoreducer from "../slices/slice-one";

export default combineReducers({
  todo: todoreducer,
});
