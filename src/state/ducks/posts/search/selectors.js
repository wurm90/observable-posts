const getPostsData = (state) => state.posts.search.data;
const getPostsError = (state) => state.posts.search.error;
const getPostsLoading = (state) => state.posts.search.loading;

export { getPostsData, getPostsError, getPostsLoading };
