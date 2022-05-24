import { getEmployees,deleteEmployee,createEmployee,updateCurrentEmployee } from '../../API/employee.tsx'
import { put } from 'redux-saga/effects'
function* updateEmployees(action: Object) {
  const data = yield (getEmployees())
  yield put({ type: `${action.type}_READY`, payload: data });
}

function* removeEmployee(action: Object) {
  const data = yield (deleteEmployee(action.payload.empId))
  yield put({ type: `${action.type}_READY`, payload: action.payload });
}
function* addNewUSer(action: Object) {
  const data = yield (createEmployee(action.payload));
  yield put({ type: `${action.type}_READY`, payload: data });
}

function* updateUserData(action: Object) {
  console.log('updating user');
  const data = yield (updateCurrentEmployee(action.payload))
  yield put({ type: `${action.type}_READY`, payload: action.payload });
}

export { updateEmployees, removeEmployee,addNewUSer,updateUserData }