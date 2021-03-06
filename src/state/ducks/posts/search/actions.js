import { SearchActionTypes } from "./types";

const clearSearchedPosts = () => ({
  type: SearchActionTypes.SEARCH_POSTS_CLEAR,
});

const searchPosts = (input) => ({
  type: SearchActionTypes.SEARCH_POSTS,
  payload: input
});

const searchPostsFulfilled = (response = {}) => {
  return {
    type: SearchActionTypes.SEARCH_POSTS_FULFILLED,
    payload: {
      response,
    },
  };
};

const searchPostsLoading = () => ({
  type: SearchActionTypes.SEARCH_POSTS_LOADING,
});

const searchPostsFailed = (error) => ({
  type: SearchActionTypes.SEARCH_POSTS_FAILED,
  error,
});

export default {
  clearSearchedPosts,
  searchPosts,
  searchPostsFulfilled,
  searchPostsLoading,
  searchPostsFailed,
};
