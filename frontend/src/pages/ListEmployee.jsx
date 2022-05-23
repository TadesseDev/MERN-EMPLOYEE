import React from 'react'
import {getEmployees} from '../API/employee'
export default function ListUser() {
  return (
    <div>
      <button type="submit"
        onClick={getEmployees}>list users</button>
    </div>
  )
}
