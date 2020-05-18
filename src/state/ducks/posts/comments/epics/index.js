import { combineEpics } from "redux-observable";
import listPostCommentsEpic from "./fetch-comments.epic";

export default combineEpics(listPostCommentsEpic);