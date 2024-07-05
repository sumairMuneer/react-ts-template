import { combineReducers } from 'redux';
// import userReducer from './userReducer';

export interface IAppState {
//   user: IUserState;
}

// const rootReducer = combineReducers<IAppState>({
// //   user: userReducer,
// });

const rootReducer= combineReducers({

})

export type RootState=  ReturnType<typeof rootReducer>

export default rootReducer;