import { SearchActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  loading: false,
};

const setLoading = () => true;
const unsetLoading = () => false;

export const loading = createReducer(INITIAL_STATE.loading, {
  [SearchActionTypes.SEARCH_POSTS_LOADING]: setLoading,
  [SearchActionTypes.SEARCH_POSTS_FULFILLED]: unsetLoading,
  [SearchActionTypes.SEARCH_POSTS_FAILED]: unsetLoading,
});
