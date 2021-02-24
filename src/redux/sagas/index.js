import { all, call } from 'redux-saga/effects';
import dataSagas from './dataSagas';

export default function* rootSaga() {
  yield all([
    call(dataSagas)
  ]);
};