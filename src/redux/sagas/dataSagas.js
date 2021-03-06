import { put, call, takeEvery, all } from 'redux-saga/effects';
import * as types from '../types/data.types';
import { requestDataSuccess, requestDataError } from '../actions/data.actions';
import { galleries } from '../../testData';


function* loadData(action) {
  let { galleryId, page, count } = action.payload;
  try{
    let data = galleries[galleryId].pages[page-1];
    data.images = data.images.splice(0, count);
    if(data.errors){
      yield put(requestDataError(data.errors[0].message));
    }else{
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
