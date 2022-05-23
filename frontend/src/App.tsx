import React, { useState,useEffect} from 'react'
import AddUser from './pages/AddEmployee.tsx'
import ListUser from './pages/ListEmployee.tsx';
import { getEmployees } from './API/employee.tsx';
function App() {
  const [employees, updateEmployees] = useState([]);

  useEffect(() => { 
    const user = getEmployees();
    user.then( data=>updateEmployees(data))
  },[]);

  return (
    <div className="App">
      <AddUser />
      <ListUser employees={ employees}/>
    </div>
  );
}

export default App;
