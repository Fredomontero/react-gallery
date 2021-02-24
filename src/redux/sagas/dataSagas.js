import { put, call, takeEvery, all } from 'redux-saga/effects';
import * as types from '../types/data.types';
import { requestDataSuccess, requestDataError } from '../actions/data.actions';

function* loadData(action) {
  try{
    let response = yield call(fetch, 'https://api.thecatapi.com/v1/images/search?limit=10&page=10');
    let data = yield response.json();
    if(data.errors){
      yield put(requestDataError(data.errors[0].message));
    }else{
      console.log("DATA: ", data);
      yield put(requestDataSuccess(data));
    }
  }catch(error){
    yield put(requestDataError(error));
  }
};

function* dataRequest() {
  yield takeEvery(types.LOAD_DATA_REQUEST, loadData);
};

export default function* dataSagas() {
  yield all([
    call(dataRequest)
  ]);
};
