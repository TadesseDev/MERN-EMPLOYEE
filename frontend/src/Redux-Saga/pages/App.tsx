export const GET_LIST_OF_USER =
  "GET_ALL_EMPLOYEES_FROM_DB";

export const getUsers = () =>
  ({ type: GET_LIST_OF_USER, payload: [] });

const appReducer = (state = [], action: Object) => { 
  console.log("running action",action);
  switch (action.type) { 
    case `${GET_LIST_OF_USER}_READY`:
      return action.payload;
    default:
      return state;
  }
}

export default appReducer