import { SET_ISSUE } from "./types";

const currIssueReducer = (state = {}, action) => {
    console.log(action);

    if (action.type === SET_ISSUE) {
        return action.payload;
    }
    return state;
};

export default currIssueReducer;
