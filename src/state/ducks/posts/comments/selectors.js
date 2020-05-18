const getPostCommentsData = (state) => state.posts.comments.data;
const getPostCommentsError = (state) => state.posts.comments.error;
const getPostCommentsLoading = (state) => state.posts.comments.loading;

export { getPostCommentsData, getPostCommentsError, getPostCommentsLoading };