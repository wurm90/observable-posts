import { CreatePostActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  error: null,
};

const setError = (state, action) => action.error;
const unsetError = (state, action) => null;

export const error = createReducer(INITIAL_STATE.error, {
  [CreatePostActionTypes.CREATE_POST_LOADING]: unsetError,
  [CreatePostActionTypes.CREATE_POST_FULFILLED]: unsetError,
  [CreatePostActionTypes.CREATE_POST_FAILED]: setError,
});
