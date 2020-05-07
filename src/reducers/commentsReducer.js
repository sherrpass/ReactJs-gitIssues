import { FETCH_COMMENTS } from "./types";

const commentsReducer = (state = [], action) => {
    console.log(action);

    if (action.type === FETCH_COMMENTS) {
        return action.payload;
    }
    return state;
};

export default commentsReducer;
