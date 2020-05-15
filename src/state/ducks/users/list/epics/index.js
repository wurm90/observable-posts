import { combineEpics } from "redux-observable";
import listUsersEpic from "./list-users.epic";

export default combineEpics(listUsersEpic);
