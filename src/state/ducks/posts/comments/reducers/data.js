import { ListPostCommentsTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  data: {
    items: [],
  },
};

const clearComments = (state) => ({
  ...state,
  ...INITIAL_STATE.data,
});

const listPostCommentsFulfilled = (state, { payload: { response } }) => {
  return {
    ...state,
    items: response,
  };
};

export const data = createReducer(INITIAL_STATE.data, {
  [ListPostCommentsTypes.LIST_POST_COMMENTS_CLEAR]: clearComments,
  [ListPostCommentsTypes.LIST_POST_COMMENTS_FULFILLED]: listPostCommentsFulfilled,
});
