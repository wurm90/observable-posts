import { SelectPostActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  loading: false,
};

const setLoading = () => true;
const unsetLoading = () => false;

export const loading = createReducer(INITIAL_STATE.loading, {
  [SelectPostActionTypes.SELECT_POST_LOADING]: setLoading,
  [SelectPostActionTypes.SELECT_POST_FULFILLED]: unsetLoading,
  [SelectPostActionTypes.SELECT_POST_FAILED]: unsetLoading,
});
