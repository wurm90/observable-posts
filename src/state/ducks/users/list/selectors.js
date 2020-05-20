import { createSelector } from 'reselect'
import { createCachedSelector } from "re-reselect";

const getListData = (state) => state.users.list.data.items;
const getListError = (state) => state.users.list.error;
const getListLoading = (state) => state.users.list.loading;
const getUserIdFromProps = (state, props) => props.userId;


export const getUserById = createCachedSelector(
    // inputSelectors
    [getListData, getUserIdFromProps],
    // resultFunction
    (users, userId) => users.find(({ id }) => id === userId)
    // Cache key "authorId"
)(getUserIdFromProps);

export const getUserListData = createSelector(getListData, (data) => data);
export const getUserListError = createSelector(getListError, error => error);
export const getUserListLoading = createSelector(getListLoading, loading => loading);