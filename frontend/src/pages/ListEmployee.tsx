import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { deleteUser } from '../Redux-Saga/ActionCreators/UpdateEmployee.ts'
import { Employee } from '../components/ListEmployee.styled.tsx'
import UpdateUser from '../components/UpdateEmployee.tsx'
export default function ListUser({ employees }) {
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState(false);
    const [formData, updateFormData] = useState({
    firstName: '',
    birthDate: '',
    salary: 0,
    sex: '',
  });
  const showUpdateBox = (id: String)=>{ 
    setEditUser(true);
    const newFormData = employees.filter((employee: Object)=> {
      if (employee._id === id)
        return employee;
    })[0];
    updateFormData(newFormData);
    console.log(formData)
  }
  return (
    <div>
      {employees.map(employee => { 
        return <div key={employee._id}>
          <Employee>
            <span>{employee.firstName}</span>
            <span>{employee.birthDate}</span>
            <span>{employee.salary}</span>
            <span>{employee.sex}</span>
            <button onClick={ ()=>dispatch(deleteUser(employee._id))}>Delete Employee</button>
            <button onClick={ ()=>showUpdateBox(employee._id)}>updateUser</button>
          </Employee>
        </div>
      })}
      
      {editUser && <UpdateUser
        formData={formData}
        updateFormData={updateFormData}
        setEditUser={setEditUser} />}
    </div>
  )
}
