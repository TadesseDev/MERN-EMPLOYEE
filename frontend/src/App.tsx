import React, { useState, useEffect } from 'react'
import AddUser from './pages/AddEmployee.tsx'
import ListUser from './pages/ListEmployee.tsx';
import { getEmployees } from './API/employee.tsx';
import {useDispatch,useSelector} from 'react-redux'
import {getUsers} from './Redux-Saga/pages/App.ts'
function App() {
  // const [employees, updateEmployees] = useState([]);
  const dispatch = useDispatch();
  const employees = useSelector((store: Object) => store.employees);
  useEffect(() => { 
    dispatch(getUsers());
    // const user = getEmployees();
    // user.then( data=>updateEmployees(data))
  },[]);

  return (
    <div>
      <AddUser />
      <ListUser employees={ employees}/>
    </div>
  );
}

export default App;
