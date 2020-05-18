import { ofType } from "redux-observable";
import searchActions from "../actions";
import { listActions } from "state/ducks/users/list";
import { SearchActionTypes } from "../types";
import { ajax } from "rxjs/ajax";
import {
  switchMap,
  debounceTime,
  delay,
  filter,
  catchError,
  withLatestFrom,
  pluck,
  mergeMap
} from "rxjs/operators";
import { of, concat } from "rxjs";
import { API_PATHS } from "utils/constants";

const search = (apiBase, term) =>
  `${apiBase}${API_PATHS.POSTS}?title_like=${encodeURIComponent(term)}`;

const searchPostsEpic = (action$, state$) =>
  action$.pipe(
    ofType(SearchActionTypes.SEARCH_POSTS),
    debounceTime(750),
    filter(({ payload }) => payload.trim() !== ""),
    withLatestFrom(state$.pipe(pluck("config", "apiBase")), state$.pipe(pluck("users", "list"))),
    switchMap(([{ payload }, apiBase, userList = { data: { items: [] } } ]) =>
      concat(
        of(searchActions.searchPostsLoading()),
        ajax.getJSON(search(apiBase, payload)).pipe(
          delay(1000),
          mergeMap((posts) => {
            const actionsToDispatch = [];

            // Cancel any previous user request
            if (userList.loading) {
              actionsToDispatch.push(listActions.cancelUserList())
            }

            const usersIdSet = new Set(userList.data.items.map(({id}) => id));
            // Check if author is already present in the store
            const authorIds = posts.reduce(
              (accum, { created_by }) => usersIdSet.has(created_by) ? accum : accum.concat(created_by),
              []
            );
        
            if (authorIds.length) {
              actionsToDispatch.push(listActions.listUsers(authorIds));
            }

            actionsToDispatch.push(searchActions.searchPostsFulfilled(posts));
            return of(...actionsToDispatch);
          }),
          catchError((err) => {
            console.error(err);
            return of(searchActions.searchPostsFailed("API Error"))
          })
        )
      )
    )
  );

export default searchPostsEpic;
