import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { connectRouter } from "connected-react-router";

import * as reducers from "./ducks";

import SearchPostEpic from "state/ducks/posts/search/epics";
import ListUsersEpic from "state/ducks/users/list/epics";

export const rootEpic = combineEpics(SearchPostEpic, ListUsersEpic);

export default (history) =>
  combineReducers({ ...reducers, router: connectRouter(history) });
