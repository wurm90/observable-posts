import { ofType } from "redux-observable";
import selectPostActions from "../actions";
import { SelectPostActionTypes } from "../types";
import { ajax } from "rxjs/ajax";
import {
  map,
  switchMap,
  delay,
  filter,
  catchError,
  withLatestFrom,
  pluck,
} from "rxjs/operators";
import { of, concat } from "rxjs";
import { API_PATHS } from "utils/constants";

const buildUrl = (apiBase, postId) => `${apiBase}${API_PATHS.POSTS}/${postId}`;

const selectPostEpic = (action$, state$) =>
  action$.pipe(
    ofType(SelectPostActionTypes.SELECT_POST),
    filter(({ payload }) => payload.trim() !== ""),
    withLatestFrom(state$.pipe(pluck("config", "apiBase"))),
    switchMap(([{ payload }, apiBase]) =>
      concat(
        of(selectPostActions.selectPostLoading()),
        ajax.getJSON(buildUrl(apiBase, payload)).pipe(
          delay(1000),
          map((response) => selectPostActions.selectPostFulfilled(response)),
          catchError((err) =>
            of(selectPostActions.selectPostFailed("API Error"))
          )
        )
      )
    )
  );

export default selectPostEpic;
