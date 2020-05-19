import { ofType } from "redux-observable";
import { listActions } from "state/ducks/users/list";
import listPostCommentsActions from "../actions";
import { ListPostCommentsTypes } from "../types";
import { ajax } from "rxjs/ajax";
import {
  mergeMap,
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
    withLatestFrom(
      state$.pipe(pluck("config", "apiBase")),
      state$.pipe(pluck("users", "list", "data", "items"))
    ),
    switchMap(([{ payload }, apiBase, userList]) =>
      concat(
        of(listPostCommentsActions.listCommentsLoading()),
        ajax.getJSON(list(apiBase, payload)).pipe(
          mergeMap((comments) => {
            const actionsToDispatch = [];

            const usersIdSet = new Set(userList.map(({ id }) => id));
            // Check if author is already present in the store
            const authorIds = comments.reduce(
              (accum, { comment_by }) =>
                usersIdSet.has(comment_by) ? accum : accum.concat(comment_by),
              []
            );

            if (authorIds.length) {
              actionsToDispatch.push(listActions.listUsers(authorIds));
            }
            actionsToDispatch.push(
              listPostCommentsActions.listCommentsFulfilled(comments)
            );
            return of(...actionsToDispatch);
          }),
          catchError((err) =>
            of(listPostCommentsActions.listCommentsFailed("API Error"))
          )
        )
      )
    )
  );

export default listPostCommentsEpic;