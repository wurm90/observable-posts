import { combineReducers } from "redux";
import { BASE_URL } from "utils/constants";

const INITIAL_STATE = BASE_URL;

const apiBase = () => {
  return INITIAL_STATE;
};

export default combineReducers({ apiBase });
