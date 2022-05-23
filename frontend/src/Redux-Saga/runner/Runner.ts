import { takeEvery } from 'redux-saga/effects'
import { updateEmployees, removeEmployee } from '../worker/workers.ts'
import {GET_LIST_OF_USER } from '../ActionCreators/App.ts'
import {DELETE_USER } from '../ActionCreators/UpdateEmployee.ts'
function* actionRunner() {
  yield takeEvery(GET_LIST_OF_USER, updateEmployees);
  yield takeEvery(DELETE_USER, removeEmployee);
}

export default actionRunner;