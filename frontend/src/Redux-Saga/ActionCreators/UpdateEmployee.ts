import addUserReducer from './AddEmployee.ts'
export const DELETE_USER = "DELETE_USER_FROM_DATABASE";
export const deleteUser = (empId) =>
  ({ type: DELETE_USER, payload: { empId } });

const deleteReducer = (state = [], action: Object) => { 
  switch (action.type) { 
    case `${DELETE_USER}_READY`:
      return [...state.filter(emp => emp._id!==action.payload.empId)];
    default:
      return addUserReducer(state,action);
  }
}

export default deleteReducer;