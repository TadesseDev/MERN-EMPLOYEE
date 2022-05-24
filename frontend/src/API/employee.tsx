import {createURL,  getUsersURL,  deleteURL,  updateUserURL} from '../Global/APIEndPoints';
import {EmployeeType} from '../Global/types'
const createEmployee = async (user: object) => {
  try {
    const response = await fetch(createURL, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return console.error(`fail to add user :${error}`);
  }
}

const getEmployees = async () => {
  try {
    const response = await fetch(getUsersURL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`fail to fetch :${error}`);
    return [];
  }
}

const deleteEmployee = (empId: String) => {
  console.log(empId);
  fetch(deleteURL, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({empId}),
  })
    .then(response => console.log(response));

}

export const updateCurrentEmployee = async (user: EmployeeType) => {
  const empId = user._id;
  const response = await fetch(updateUserURL, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ empId, ...user }),
  });
  console.log(response);
}
export { createEmployee, getEmployees, deleteEmployee }