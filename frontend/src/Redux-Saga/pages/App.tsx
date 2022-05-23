export const GET_LIST_OF_USER =
  "GET_ALL_EMPLOYEES_FROM_DB";

export const getUsers = () =>
  ({ type: GET_LIST_OF_USER, payload: [] });

const appReducer = (state = [], action: Object) => { 
  switch (action.type) { 
    case GET_LIST_OF_USER:
      return action.payload;
    default:
      return state;
  }
}

export default appReducer