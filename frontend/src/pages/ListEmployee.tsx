import React from 'react';
import { deleteEmployee} from '../API/employee.tsx'
export default function ListUser({ employees}) {
  return (
    <div>
      <button type="submit" >list users</button>
      {employees.map(employee => { 
        return <div key={employee._id}>
          <h2>
            <span>{employee.firstName}</span>
            <span>{employee.birthDate}</span>
            <span>{employee.salary}</span>
            <span>{employee.sex}</span>
            <button onClick={ ()=>deleteEmployee(employee._id)}>Delete Employee</button>
          </h2>
        </div>
      })}
    </div>
  )
}
