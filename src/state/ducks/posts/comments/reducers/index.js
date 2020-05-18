import { combineReducers } from "redux";

import { data } from "./data";
import { error } from "./error";
import { loading } from "./loading";

export default combineReducers({ data, error, loading });
