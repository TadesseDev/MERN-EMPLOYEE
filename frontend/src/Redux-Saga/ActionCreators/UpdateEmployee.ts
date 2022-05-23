
export const UPDATE_EMPLOYEE = "UPDATe_USER_DETAIL";
export const updateUser = (employee: Object) =>
  ({ type: UPDATE_EMPLOYEE, payload: employee });

const updateReducer = (state = [], action: Object) => { 
  console.log("dispaching user detail",action.payload)
  switch (action.type) { 
    case `${UPDATE_EMPLOYEE}_READY`:
      return [...state.map(emp => { 
        if (emp._id === action.payload._id) { 
          console.log('match found');
          return action.payload
        }
        return emp
      })];
    default:
      return state;
  }
}

export default updateReducer;