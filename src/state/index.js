import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import { connectRouter } from "connected-react-router";

import * as reducers from "./ducks";

import SearchPostEpic from "state/ducks/posts/search/epics";
import ListUsersEpic from "state/ducks/users/list/epics";
import SelectPostEpic from "state/ducks/posts/selected/epics";
import ListPostCommentsEpic from "state/ducks/posts/comments/epics";

export const rootEpic = combineEpics(
  SearchPostEpic,
  ListUsersEpic,
  SelectPostEpic,
  ListPostCommentsEpic
);

export default (history) =>
  combineReducers({ ...reducers, router: connectRouter(history) });
