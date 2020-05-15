import { SearchActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  data: {
    items: [],
  },
};

const clearPosts = (state) => ({
  ...state,
  ...INITIAL_STATE.data,
});

const searchPostsFulfilled = (state, { payload: { response } }) => {
  return {
    ...state,
    items: response,
  };
};

export const data = createReducer(INITIAL_STATE.data, {
  [SearchActionTypes.SEARCH_POSTS_CLEAR]: clearPosts,
  [SearchActionTypes.SEARCH_POSTS_FULFILLED]: searchPostsFulfilled,
});
