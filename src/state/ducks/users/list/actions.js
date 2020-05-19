import { ListActionTypes } from "./types";

const listUsers = (ids) => ({
  type: ListActionTypes.LIST_USERS,
  payload: ids
});

const cancelUserList = () => ({
  type: ListActionTypes.LIST_USERS_CANCEL,
});


const listUsersFulfilled = (response = {}) => {
  return {
    type: ListActionTypes.LIST_USERS_FULFILLED,
    payload: {
      response,
    },
  };
};

const listUsersLoading = () => ({
  type: ListActionTypes.LIST_USERS_LOADING,
});

const listUsersFailed = (error) => ({
  type: ListActionTypes.LIST_USERS_FAILED,
  error,
});

export default {
  cancelUserList,
  listUsers,
  listUsersFulfilled,
  listUsersLoading,
  listUsersFailed,
};
