import { ListActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {
  data: {
    items: [],
  },
};

const listUsersFulfilled = ({ items, ...rest }, { payload: { response } }) => {
  return {
    ...rest,
    items: items.concat(response)
  };
};

export const data = createReducer(INITIAL_STATE.data, {
  [ListActionTypes.LIST_USERS_FULFILLED]: listUsersFulfilled,
});
