import { ofType } from "redux-observable";
import createPostActions from "../actions";
import { CreatePostActionTypes } from "../types";
import { ajax } from "rxjs/ajax";
import {
  switchMap,
  catchError,
  withLatestFrom,
  pluck,
  map,
} from "rxjs/operators";
import { of, concat } from "rxjs";
import { API_PATHS } from "utils/constants";

const createPostUrl = (apiBase) => `${apiBase}${API_PATHS.POSTS}`;

const createPostEpic = (action$, state$) =>
  action$.pipe(
    ofType(CreatePostActionTypes.CREATE_POST),
    withLatestFrom(state$.pipe(pluck("config", "apiBase"))),
    switchMap(([{ payload }, apiBase]) =>
      concat(
        of(createPostActions.createPostLoading()),
        ajax({
          url: createPostUrl(apiBase),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
        }).pipe(
          map(() => createPostActions.createPostFulfilled()),
          catchError((err) =>
            of(createPostActions.createPostFailed("API Error"))
          )
        )
      )
    )
  );

export default createPostEpic;
