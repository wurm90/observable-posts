import { combineReducers } from "redux";
import search from "./search";
import selected from "./selected";
import comments from "./comments";
import create from "./create";

export default combineReducers({
  search,
  selected,
  comments,
  create,
});
