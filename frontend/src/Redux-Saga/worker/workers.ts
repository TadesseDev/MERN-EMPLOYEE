import { getEmployees } from '../../API/employee.tsx'
import { put } from 'redux-saga/effects'
function* incrementAge(action) {
  const data = yield (getEmployees())
  console.log("yield data is", data);
  console.log("passed action is", action);
  yield put({ type: "GET_ALL_EMPLOYEES_FROM_DB_READY", payload: data });
}

function* decrementAge(action) {
  const data = yield (getEmployees())
  console.log("yield data is", data);
  console.log("passed action is", action);
  yield put({ type: "AGE_DOWN_MAKE", payload: data });
}

export { incrementAge, decrementAge }