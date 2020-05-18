import { SelectPostActionTypes } from "./types";

const selectPost = (id) => ({
  type: SelectPostActionTypes.SELECT_POST,
  payload: id,
});

const selectPostFulfilled = (data = {}) => {
  return {
    type: SelectPostActionTypes.SELECT_POST_FULFILLED,
    payload: {
      data,
    },
  };
};

const selectPostLoading = () => ({
  type: SelectPostActionTypes.SELECT_POST_LOADING,
});

const selectPostFailed = (error) => ({
  type: SelectPostActionTypes.SELECT_POST_FAILED,
  error,
});

export default {
  selectPost,
  selectPostFulfilled,
  selectPostLoading,
  selectPostFailed,
};
