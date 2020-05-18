import { ListPostCommentsTypes } from "./types";

const listComments = (id) => ({
  type: ListPostCommentsTypes.LIST_POST_COMMENTS,
  payload: id,
});

const listCommentsFulfilled = (response = {}) => {
  return {
    type: ListPostCommentsTypes.LIST_POST_COMMENTS_FULFILLED,
    payload: {
      response,
    },
  };
};

const listCommentsLoading = () => ({
  type: ListPostCommentsTypes.LIST_POST_COMMENTS_LOADING,
});

const listCommentsFailed = (error) => ({
  type: ListPostCommentsTypes.LIST_POST_COMMENTS_FAILED,
  error,
});

export default {
  listComments,
  listCommentsFulfilled,
  listCommentsLoading,
  listCommentsFailed,
};
