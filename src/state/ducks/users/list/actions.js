import { ListActionTypes } from "./types";

const listUsers = () => ({
  type: ListActionTypes.LIST_USERS,
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
  listUsers,
  listUsersFulfilled,
  listUsersLoading,
  listUsersFailed,
};
