import { ofType } from "redux-observable";
import listPostCommentsActions from "../actions";
import { ListPostCommentsTypes } from "../types";
import { ajax } from "rxjs/ajax";
import {
  map,
  switchMap,
  filter,
  catchError,
  withLatestFrom,
  pluck,
} from "rxjs/operators";
import { of, concat } from "rxjs";
import { API_PATHS } from "utils/constants";

const list = (apiBase, term) =>
  `${apiBase}${API_PATHS.COMMENTS}?post_id=${encodeURIComponent(term)}`;

const listPostCommentsEpic = (action$, state$) =>
  action$.pipe(
    ofType(ListPostCommentsTypes.LIST_POST_COMMENTS),
    filter(({ payload }) => payload.trim() !== ""),
    withLatestFrom(state$.pipe(pluck("config", "apiBase"))),
    switchMap(([{ payload }, apiBase]) =>
      concat(
        of(listPostCommentsActions.listCommentsLoading()),
        ajax.getJSON(list(apiBase, payload)).pipe(
          map((response) => listPostCommentsActions.listCommentsFulfilled(response)),
          catchError((err) => of(listPostCommentsActions.listCommentsFailed("API Error")))
        )
      )
    )
  );

export default listPostCommentsEpic;