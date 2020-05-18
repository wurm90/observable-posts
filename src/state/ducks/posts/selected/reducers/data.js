import { SelectPostActionTypes } from "../types";
import { createReducer } from "utils/helpers";

const INITIAL_STATE = {};

const selectPostFulfilled = (state, { payload: { data } }) => {
  return {
    ...state,
    ...data,
  };
};

export const data = createReducer(INITIAL_STATE, {
  [SelectPostActionTypes.SELECT_POST_FULFILLED]: selectPostFulfilled,
});
