import { combineReducers } from "redux";
import issuesReducer from "./issuesReducer";
import currIssueReducer from "./currIssueReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
    issues: issuesReducer,
    currIssue: currIssueReducer,
    comments: commentsReducer,
});
