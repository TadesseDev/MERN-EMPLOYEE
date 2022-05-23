import { takeEvery } from 'redux-saga/effects'
import { incrementAge, decrementAge } from '../worker/workers.ts'

function* actionRunner() {
  yield takeEvery("GET_ALL_EMPLOYEES_FROM_DB", incrementAge);
  yield takeEvery("AGE_DOWN", decrementAge);
}

export default actionRunner;