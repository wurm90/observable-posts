import { ListPostCommentsTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  error: null,
};

const setError = (state, action) => action.error;
const unsetError = (state, action) => null;

export const error = createReducer(INITIAL_STATE.error, {
  [ListPostCommentsTypes.LIST_POST_COMMENTS_LOADING]: unsetError,
  [ListPostCommentsTypes.LIST_POST_COMMENTS_FULFILLED]: unsetError,
  [ListPostCommentsTypes.LIST_POST_COMMENTS_FAILED]: setError,
});
