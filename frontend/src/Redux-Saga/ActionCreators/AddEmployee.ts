import updateReducer from './UpdateEmployee.ts'
export const ADD_NEW_EMPLOYEE = 'ADD_NEW_EMPLOYEE_TO_DB';
export const addNewUser = (user: Object) =>
  ({ type: ADD_NEW_EMPLOYEE, payload: user });

const addUserReducer = (state = [], action: Object) => { 
  switch (action.type) { 
    case `${ADD_NEW_EMPLOYEE}_READY`:
      return [...state,action.payload];
    default:
      return updateReducer(state,action);
  }
}

export default addUserReducer;
