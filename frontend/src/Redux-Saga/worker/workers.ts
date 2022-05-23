import { getEmployees,deleteEmployee } from '../../API/employee.tsx'
import { put } from 'redux-saga/effects'
function* updateEmployees(action: Object) {
  const data = yield (getEmployees())
  yield put({ type: `${action.type}_READY`, payload: data });
}

function* removeEmployee(action: Object) {
  const data = yield (deleteEmployee(action.payload.empId))
  console.log("yield data is", data);
  console.log("passed action is", action);
  yield put({ type: `${action.type}_READY`, payload: action.payload });
}

export { updateEmployees, removeEmployee }