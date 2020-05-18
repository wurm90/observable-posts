import { SelectPostActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  error: null,
};

const setError = (state, action) => action.error;
const unsetError = (state, action) => null;

export const error = createReducer(INITIAL_STATE.error, {
  [SelectPostActionTypes.SELECT_POST_LOADING]: unsetError,
  [SelectPostActionTypes.SELECT_POST_FULFILLED]: unsetError,
  [SelectPostActionTypes.SELECT_POST_FAILED]: setError,
});
