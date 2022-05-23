import { takeEvery } from 'redux-saga/effects'
import { updateEmployees, removeEmployee, addNewUSer,updateUserData } from '../worker/workers.ts'
import {GET_LIST_OF_USER } from '../ActionCreators/App.ts'
import { DELETE_USER } from '../ActionCreators/DeleteEmployee.ts'
import { ADD_NEW_EMPLOYEE } from '../ActionCreators/AddEmployee.ts'
import {UPDATE_EMPLOYEE} from '../ActionCreators/UpdateEmployee.ts'
function* actionRunner() {
  yield takeEvery(GET_LIST_OF_USER, updateEmployees);
  yield takeEvery(DELETE_USER, removeEmployee);
  yield takeEvery(ADD_NEW_EMPLOYEE, addNewUSer);
  yield takeEvery(UPDATE_EMPLOYEE, updateUserData);
}

export default actionRunner;