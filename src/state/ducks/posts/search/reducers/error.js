import { SearchActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  error: null,
};

const setError = (state, action) => action.error;
const unsetError = (state, action) => null;

export const error = createReducer(INITIAL_STATE.error, {
  [SearchActionTypes.SEARCH_POSTS_LOADING]: unsetError,
  [SearchActionTypes.SEARCH_POSTS_FULFILLED]: unsetError,
  [SearchActionTypes.SEARCH_POSTS_FAILED]: setError,
});
