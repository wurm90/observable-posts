import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { connectRouter } from "connected-react-router";

import * as reducers from "./ducks";

import SearchPostEpic from "state/ducks/posts/search/epics";
import ListUsersEpic from "state/ducks/users/list/epics";
import SelectPostEpic from "state/ducks/posts/selected/epics";

export const rootEpic = combineEpics(
  SearchPostEpic,
  ListUsersEpic,
  SelectPostEpic
);

export default (history) =>
  combineReducers({ ...reducers, router: connectRouter(history) });
