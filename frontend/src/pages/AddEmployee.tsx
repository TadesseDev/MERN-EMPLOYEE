import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNewUser } from '../Redux-Saga/ActionCreators/AddEmployee'
import { Wrapper,UserForm,Inputs} from '../components/AddEmployee.styled'
export default function AddUser() {
  const dispatch = useDispatch()
  const initialFormData={
    firstName: '',
    birthDate: '',
    salary: 0,
    sex: '',
  }
  const [formData, updateFormData] = useState(initialFormData);

    const onchange = (event: KeyboardEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    updateFormData(oldState => {
      oldState[name] = value;
      return ({ ...oldState });
    });
    }
  
  const addEmployee = (form) => { 
    form.preventDefault();
    dispatch(addNewUser(formData))
 updateFormData(initialFormData );
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
          value={formData.firstName}
          minLength="3"
          maxLength="50"
        required/>

      <label htmlFor="birthDate">date of birth</label>
      <Inputs type="date" name="birthDate"
        id="birthDate"
        onChange={onchange}
          value={formData.birthDate}
        required/>

        <div>
                <label htmlFor="m">Male</label>
      <input type="radio" name="sex" value="m" id="m"  
            onChange={onchange}
          />

      <label htmlFor="f">Female</label>
      <input type="radio" name="sex" value="f" id="f"   
        onChange={onchange}/>
</div>

      <label htmlFor="salary">salary</label>
        <Inputs type="number" name="salary" id="salary"
          min="0"
          max="999999999"
        onChange={onchange}
        value={ formData.salary}/>
      <button type="submit">Add Employee</button>
    </UserForm>
    </Wrapper>
  )
}
