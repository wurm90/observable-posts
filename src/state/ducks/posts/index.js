import { combineReducers } from "redux";
import search from "./search";
import selected from "./selected";
import comments from "./comments";

export default combineReducers({
  search,
  selected,
  comments
});
