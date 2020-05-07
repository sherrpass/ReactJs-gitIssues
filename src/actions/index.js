import axios from "axios";
import gitIssues from "../apis/gitIssues";
import {
    FETCH_ISSUES,
    SET_ISSUE,
    FETCH_COMMENTS,
    CLEAR_ISSUES,
} from "../reducers/types";
import history from "../history";
import { PAGES_TO_LOAD, ISSUES_PER_PAGE } from "../config";

export const getIssues = (query, pageNum) => async (dispatch) => {
    try {
        const response = await gitIssues("/search/issues", {
            params: {
                q: query,
                per_page: PAGES_TO_LOAD * ISSUES_PER_PAGE,
                page: Math.ceil(pageNum / PAGES_TO_LOAD),
            },
        });
        if (pageNum <= 0) {
            history.push(`/search/${query}/1`);
        }
        dispatch({ type: FETCH_ISSUES, payload: response.data.items });
    } catch (e) {
        alert(e);
    }
};

export const getComments = (url) => async (dispatch) => {
    console.log("reached comments");

    const response = await axios.get(url);
    console.log(response.data);

    dispatch({ type: FETCH_COMMENTS, payload: response.data });
    history.push("/result");
};

export const setIssue = (issue) => (dispatch) => {
    console.log(issue);

    dispatch(getComments(issue.comments_url));
    dispatch({ type: SET_ISSUE, payload: issue });
};

export const clearIssues = () => {
    return { type: CLEAR_ISSUES, payload: [] };
};
