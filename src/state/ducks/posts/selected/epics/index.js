import { combineEpics } from "redux-observable";
import selectPostEpic from "./fetch-post.epic";

export default combineEpics(selectPostEpic);
