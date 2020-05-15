import { ofType } from "redux-observable";
import searchActions from "../actions";
import { SearchActionTypes } from "../types";
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

const searchPostsEpic = (action$, state$) =>
  action$.pipe(
    ofType(SearchActionTypes.SEARCH_POSTS),
    mergeMap(() =>
      ajax
        .getJSON("http://localhost:4444/posts")
        .pipe(map((response) => searchActions.searchPostsFulfilled(response)))
    )
  );

export default searchPostsEpic;
