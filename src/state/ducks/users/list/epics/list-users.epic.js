import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  map,
  switchMap,
  delay,
  catchError,
  withLatestFrom,
  pluck,
  takeUntil,
  filter,
} from "rxjs/operators";
import listActions from "../actions";
import { ListActionTypes } from "../types";
import { of, concat } from "rxjs";
import { API_PATHS } from "utils/constants";

const searchUsers = (apiBase, ids = []) =>
  ids.length ? `${apiBase}${API_PATHS.USERS}?id=${ids.join('&id=')}` : `${apiBase}${API_PATHS.USERS}`;

const listUsersEpic = (action$, state$) =>
  action$.pipe(
    ofType(ListActionTypes.LIST_USERS),
    // withLatestFrom(state$.pipe(pluck("users", "list", "data"))),
    // filter(([action, data]) => {
    //   return data.items.length === 0;
    // }),
    withLatestFrom(state$.pipe(pluck("config", "apiBase"))),
    switchMap(([{ payload }, apiBase]) =>
      concat(
        of(listActions.listUsersLoading()),
        ajax.getJSON(searchUsers(apiBase, payload)).pipe(
          //takeUntil(action$.pipe(ofType(ListActionTypes.LIST_USERS_CANCEL))),
          delay(5000),
          map((response) => listActions.listUsersFulfilled(response)),
          catchError((err) => of(listActions.listUsersFailed("API Error")))
        )
      )
    )
  );

export default listUsersEpic;
