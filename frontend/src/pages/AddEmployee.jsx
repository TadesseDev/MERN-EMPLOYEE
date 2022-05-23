import React, { useState} from 'react'
import {createEmployee} from '../API/employee'
export default function AddUser() {
  const [formData, updateFormData] = useState({
    firstName: '',
    birthDate: '',
    sex: '',
    salary: 0
  });

    const onchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    updateFormData(oldState => {
      oldState[name] = value;
      return ({ ...oldState });
    });
    }
  
  const addEmployee = (form) => { 
    form.preventDefault();
    createEmployee(formData)
  }
  return (
    <form
      action="http://localhost:4000/employees/create"
      method="POST" className=""
      onSubmit={addEmployee}>
      <label htmlFor="firstName">your name</label>
      <input type="text" name="firstName" id="firstName" 
        onChange={onchange}
        value={ formData.firstName}/>

      <label htmlFor="birthDate">date of birth</label>
      <input type="date" name="birthDate"
        id="birthDate"
        onChange={onchange}
        value={ formData.birthDate} />

      <label htmlFor="m">Male</label>
      <input type="radio" name="sex" value="m" id="m"  
        onChange={onchange}/>

      <label htmlFor="f">Female</label>
      <input type="radio" name="sex" value="f" id="f"   
        onChange={onchange}/>

      <label htmlFor="salary">salary</label>
      <input type="number" name="salary" id="salary" 
        onChange={onchange}
        value={ formData.salary}/>
      <button type="submit">Add Employee</button>
    </form>
  )
}
