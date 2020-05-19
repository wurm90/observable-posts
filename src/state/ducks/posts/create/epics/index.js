import { combineEpics } from "redux-observable";
import createPostEpic from "./create-post.epic";

export default combineEpics(createPostEpic);
