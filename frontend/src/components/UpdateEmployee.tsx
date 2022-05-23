import React from 'react'
import { useDispatch} from 'react-redux'
import {EmployeeEdit} from '../components/ListEmployee.styled.tsx'
import {updateUser} from '../Redux-Saga/ActionCreators/UpdateEmployee.ts'
export default function UpdateUser({ formData, updateFormData,setEditUser}) {

  const dispatch=useDispatch()
  const onchange = (event: KeyboardEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    updateFormData(oldState => {
      oldState[name] = value;
      return ({ ...oldState });
    });
    }
  
  const updateEmployee = (form: MouseEvent) => { 
    form.preventDefault();
    console.log(formData)
    console.log("dispaching acion");
    dispatch(updateUser(formData))
    setEditUser(false);
  }
  return (
    <EmployeeEdit
        action=""
        method=""
        onSubmit={updateEmployee}>
        <input type="text" name="firstName" id="firstName" 
        onChange={onchange}
        value={ formData.firstName}/>
        <input type="date" name="birthDate" 
        onChange={onchange}
        value={ formData.birthDate}/>
        <label htmlFor="f">M</label>
        <input type="radio" name="sex" value="m" id="m"   
        onChange={onchange}/>
        <label htmlFor="f">F</label>
        <input type="radio" name="sex" value="f" id="f"   
        onChange={onchange}/>
        <input type="number" name="salary" id="salary"  
        onChange={onchange}
        value={ formData.salary}/>
        <button type="submit">save</button>
        <button type="button" onClick={ ()=>setEditUser('')}>cancel</button>
      </EmployeeEdit>
  )
}
