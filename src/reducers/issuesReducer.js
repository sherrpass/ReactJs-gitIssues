import { FETCH_ISSUES, CLEAR_ISSUES } from "./types";

const issuesReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ISSUES:
            return action.payload;
        case CLEAR_ISSUES:
            return action.payload;
        default:
            return state;
    }
};

export default issuesReducer;
