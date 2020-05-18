import { combineReducers } from "redux";
import search from "./search";
import selected from "./selected";

export default combineReducers({
  search,
  selected,
});
