
import { postTypes } from "../actionTypes";
import { fetch_post_request } from "../types";

const initalState = {
    pending: false,
    loading: false,
    postsList: [],
    error: null
}

export const PostReducer = (state = initalState, action) => {

    switch (action.type) {
        case postTypes.FETCH_POST:
            console.log('type A');
            return { ...state, loading: true, error: null }
        default:
            return { ...state }
    }
}