import { CreatePostActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  loading: false,
};

const setLoading = () => true;
const unsetLoading = () => false;

export const loading = createReducer(INITIAL_STATE.loading, {
  [CreatePostActionTypes.CREATE_POST_LOADING]: setLoading,
  [CreatePostActionTypes.CREATE_POST_FULFILLED]: unsetLoading,
  [CreatePostActionTypes.CREATE_POST_FAILED]: unsetLoading,
});
