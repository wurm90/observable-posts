import { ListPostCommentsTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  loading: false,
};

const setLoading = () => true;
const unsetLoading = () => false;

export const loading = createReducer(INITIAL_STATE.loading, {
  [ListPostCommentsTypes.LIST_POST_COMMENTS_LOADING]: setLoading,
  [ListPostCommentsTypes.LIST_POST_COMMENTS_FULFILLED]: unsetLoading,
  [ListPostCommentsTypes.LIST_POST_COMMENTS_FAILED]: unsetLoading,
});
