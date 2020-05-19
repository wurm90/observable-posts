import { CreatePostActionTypes } from "./types";

const createPost = (data) => ({
  type: CreatePostActionTypes.CREATE_POST,
  payload: data,
});

const createPostFulfilled = () => ({
  type: CreatePostActionTypes.CREATE_POST_FULFILLED,
});

const createPostFailed = (error) => ({
  type: CreatePostActionTypes.CREATE_POST_FAILED,
  error,
});

const createPostLoading = () => ({
  type: CreatePostActionTypes.CREATE_POST_LOADING,
});

export default {
  createPost,
  createPostFulfilled,
  createPostFailed,
  createPostLoading,
};
