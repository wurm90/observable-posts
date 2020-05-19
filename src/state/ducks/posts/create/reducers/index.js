import { combineReducers } from "redux";

import { error } from "./error";
import { loading } from "./loading";

export default combineReducers({ error, loading });
