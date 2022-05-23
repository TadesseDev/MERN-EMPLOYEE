import { takeEvery } from 'redux-saga/effects'
import { incrementAge, decrementAge } from '../worker/workers.tsx'
import GET_LIST_OF_USER from '../pages/App.tsx'
function* actionRunner() {
  yield takeEvery("GET_ALL_EMPLOYEES_FROM_DB", incrementAge);
  yield takeEvery("AGE_DOWN", decrementAge);
}

export default actionRunner;