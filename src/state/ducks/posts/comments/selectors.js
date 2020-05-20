import { createStructuredSelector } from "reselect";

const getPostCommentsData = (state) => state.posts.comments.data;
const getPostCommentsError = (state) => state.posts.comments.error;
const getPostCommentsLoading = (state) => state.posts.comments.loading;

export const getPostComments = createStructuredSelector({
  comments: getPostCommentsData,
  loading: getPostCommentsLoading,
  error: getPostCommentsError,
});