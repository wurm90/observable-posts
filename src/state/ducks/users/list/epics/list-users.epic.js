import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  map,
  switchMap,
  delay,
  catchError,
  withLatestFrom,
  pluck,
  filter,
} from "rxjs/operators";
import listActions from "../actions";
import { ListActionTypes } from "../types";
import { of, concat } from "rxjs";
import { API_PATHS } from "utils/constants";

const listUsersEpic = (action$, state$) =>
  action$.pipe(
    ofType(ListActionTypes.LIST_USERS),
    withLatestFrom(state$.pipe(pluck("users", "list", "data"))),
    filter(([action, data]) => {
      return data.items.length === 0;
    }),
    withLatestFrom(state$.pipe(pluck("config", "apiBase"))),
    switchMap(([{ payload }, apiBase]) =>
      concat(
        of(listActions.listUsersLoading()),
        ajax.getJSON(`${apiBase}${API_PATHS.USERS}`).pipe(
          map((response) => listActions.listUsersFulfilled(response)),
          catchError((err) => of(listActions.listUsersFailed("API Error")))
        )
      )
    )
  );

export default listUsersEpic;
