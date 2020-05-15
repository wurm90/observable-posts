import { ofType } from "redux-observable";
import searchActions from "../actions";
import { SearchActionTypes } from "../types";
import { ajax } from "rxjs/ajax";
import { map, switchMap, debounceTime } from "rxjs/operators";
import { of, concat } from "rxjs";

const API = "http://localhost:4444/posts";
const search = (term) => `${API}?title_like=${encodeURIComponent(term)}`;

const searchPostsEpic = (action$, state$) =>
  action$.pipe(
    ofType(SearchActionTypes.SEARCH_POSTS),
    debounceTime(500),
    switchMap(({payload}) =>
      concat(
        of(searchActions.searchPostsLoading()),
        ajax
          .getJSON(search(payload))
          .pipe(map((response) => searchActions.searchPostsFulfilled(response)))
      )
    )
  );

export default searchPostsEpic;
