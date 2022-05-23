import React, { useState} from 'react'
import { createEmployee } from '../API/employee.tsx'
import { Wrapper,UserForm,Inputs} from '../components/styles/main.styled.tsx'
export default function AddUser() {
  const [formData, updateFormData] = useState({
    firstName: '',
    birthDate: '',
    salary: 0,
    sex: '',
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
    <Wrapper>
    <UserForm
      action="http://localhost:4000/employees/create"
      method="POST" className=""
      onSubmit={addEmployee}>
      <label htmlFor="firstName">your name</label>
      <Inputs type="text" name="firstName" id="firstName" 
        onChange={onchange}
        value={ formData.firstName}/>

      <label htmlFor="birthDate">date of birth</label>
      <Inputs type="date" name="birthDate"
        id="birthDate"
        onChange={onchange}
        value={ formData.birthDate} />

        <div>
                <label htmlFor="m">Male</label>
      <input type="radio" name="sex" value="m" id="m"  
        onChange={onchange}/>

      <label htmlFor="f">Female</label>
      <input type="radio" name="sex" value="f" id="f"   
        onChange={onchange}/>
</div>

      <label htmlFor="salary">salary</label>
      <Inputs type="number" name="salary" id="salary" 
        onChange={onchange}
        value={ formData.salary}/>
      <button type="submit">Add Employee</button>
    </UserForm>
    </Wrapper>
  )
}
