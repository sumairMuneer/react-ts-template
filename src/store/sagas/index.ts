import { call, put, takeEvery } from 'redux-saga/effects';
import { ILoadDataAction } from '../actions';
import { fetchDataSuccess, fetchDataFailure } from '../actions/actionCreators';
import { fetchData } from '../services';

function* loadDataSaga(action: ILoadDataAction): any {
  try {
    const data = yield call(fetchData);
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchLoadData() {
  yield takeEvery('LOAD_DATA_REQUEST', loadDataSaga);
}