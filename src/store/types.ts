import { postTypes } from "./actionTypes";



export interface FETCH_POST_REQUEST {
    type: typeof postTypes.FETCH_POST_REQUEST
}

export interface FETCH_POST_REQUEST_SUCCESS {
    type: typeof postTypes.FETCH_POST_SUCCESS
}

export interface FETCH_POST_REQUEST_FAILURE {
    type: typeof postTypes.FETCH_POST_FAILURE
}

