import { postTypes } from "../actionTypes";
import { FETCH_POST_REQUEST, FETCH_POST_REQUEST_FAILURE, FETCH_POST_REQUEST_SUCCESS } from "../types";

export const fetchPostsRequest = (): FETCH_POST_REQUEST => {
    return {
        type: postTypes.FETCH_POST_REQUEST,
    };
};
export const fetchPostsSuccess = (): FETCH_POST_REQUEST => {
    return {
        type: postTypes.FETCH_POST_SUCCESS,
    };
};
export const fetchPostsFailure = (): FETCH_POST_REQUEST => {
    return {
        type: postTypes.FETCH_POST_FAILURE,
    };
};