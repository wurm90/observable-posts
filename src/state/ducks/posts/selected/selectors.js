const getSelectedPostData = (state) => state.posts.selected.data;
const getSelectedPostError = (state) => state.posts.selected.error;
const getSelectedPostLoading = (state) => state.posts.selected.loading;

export { getSelectedPostData, getSelectedPostError, getSelectedPostLoading };
