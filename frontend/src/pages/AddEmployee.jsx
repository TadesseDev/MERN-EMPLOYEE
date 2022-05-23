import React from 'react'

export default function AddUser() {
  return (
    <form action="http://localhost:4000/employees/create" method="POST" className="">
      <label htmlFor="firstName">your name</label>
      <input type="text" name="firstName" id="firstName" />

      <label htmlFor="birthDate">date of birth</label>
      <input type="date" name="birthDate" id="birthDate" />

      <label htmlFor="m">Male</label>
      <input type="radio" name="sex" value="m" id="m" />

      <label htmlFor="f">Female</label>
      <input type="radio" name="sex" value="f" id="f" />

      <label htmlFor="salary">salary</label>
      <input type="number" name="salary" id="salary" />
      <button type="submit">Add Employee</button>
    </form>
  )
}
