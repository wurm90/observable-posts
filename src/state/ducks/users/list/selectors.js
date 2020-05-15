const getListData = (state) => state.users.list.data;
const getListError = (state) => state.users.list.error;
const getListLoading = (state) => state.users.list.loading;

export { getListData, getListError, getListLoading };
