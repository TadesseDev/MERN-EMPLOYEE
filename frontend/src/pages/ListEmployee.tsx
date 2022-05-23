import React from 'react'
export default function ListUser({ employees}) {
  return (
    <div>
      <button type="submit" >list users</button>
      {employees.map(user => { 
        return <div key={user._id}>
         <h2> {user.firstName}</h2>
        </div>
      })}
    </div>
  )
}
