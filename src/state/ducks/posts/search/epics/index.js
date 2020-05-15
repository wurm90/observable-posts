import { combineEpics } from "redux-observable";
import searchPostsEpic from "./search-posts.epic";

export default combineEpics(searchPostsEpic);
