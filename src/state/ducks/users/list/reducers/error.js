import { ListActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  error: null,
};

const setError = (state, action) => action.error;
const unsetError = (state, action) => null;

export const error = createReducer(INITIAL_STATE.error, {
  [ListActionTypes.LIST_USERS_LOADING]: unsetError,
  [ListActionTypes.LIST_USERS_FULFILLED]: unsetError,
  [ListActionTypes.LIST_USERS_FAILED]: setError,
});
