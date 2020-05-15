import { ofType } from "redux-observable";
import searchActions from "../actions";
import { SearchActionTypes } from "../types";
import { ajax } from "rxjs/ajax";
import {
  map,
  switchMap,
  debounceTime,
  delay,
  filter,
  catchError,
  withLatestFrom,
  pluck,
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
    withLatestFrom(state$.pipe(pluck("config", "apiBase"))),
    switchMap(([{ payload }, apiBase]) =>
      concat(
        of(searchActions.searchPostsLoading()),
        ajax.getJSON(search(apiBase, payload)).pipe(
          delay(1000),
          map((response) => searchActions.searchPostsFulfilled(response)),
          catchError((err) => of(searchActions.searchPostsFailed("API Error")))
        )
      )
    )
  );

export default searchPostsEpic;
