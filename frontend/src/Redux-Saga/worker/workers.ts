import { getEmployees,deleteEmployee,createEmployee,updateCurrentEmployee } from '../../API/employee.tsx'
import { put } from 'redux-saga/effects';
import { EmployeeType} from '../../Global/types.ts'

function* updateEmployees(action: EmployeeType) {
  const data = yield (getEmployees())
  yield put({ type: `${action.type}_READY`, payload: data });
}

function* removeEmployee(action: EmployeeType) {
  const data = yield (deleteEmployee(action.payload.empId))
  yield put({ type: `${action.type}_READY`, payload: action.payload });
  return data;
}
function* addNewUSer(action: EmployeeType) {
  const data = yield (createEmployee(action.payload));
  yield put({ type: `${action.type}_READY`, payload: data });
  return data;
}

function* updateUserData(action: EmployeeType) {
  const data = yield (updateCurrentEmployee(action.payload))
  yield put({ type: `${action.type}_READY`, payload: action.payload });
  return data;
}

export { updateEmployees, removeEmployee,addNewUSer,updateUserData }