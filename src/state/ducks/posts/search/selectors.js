import { createStructuredSelector } from "reselect";

const getPostsData = state => state.posts.search.data;
const getPostsError = (state) => state.posts.search.error;
const getPostsLoading = (state) => state.posts.search.loading;

export const getPosts = createStructuredSelector({
    posts: getPostsData,
    loading: getPostsLoading,
    error: getPostsLoading
});

export { getPostsData, getPostsError, getPostsLoading };
