import { ListActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  loading: false,
};

const setLoading = () => true;
const unsetLoading = () => false;

export const loading = createReducer(INITIAL_STATE.loading, {
  [ListActionTypes.LIST_USERS_LOADING]: setLoading,
  [ListActionTypes.LIST_USERS_FULFILLED]: unsetLoading,
  [ListActionTypes.LIST_USERS_FAILED]: unsetLoading,
  [ListActionTypes.LIST_USERS_CANCEL]: unsetLoading
});
