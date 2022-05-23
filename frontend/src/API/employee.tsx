const createURL = `http://localhost:4000/employees/create`;
const getUsersURL = `http://localhost:4000/employees/list`
const deleteURL = `http://localhost:4000/employees/delete`
const updateUserURL=`http://localhost:4000/employees/update`
const createEmployee = (user: object) => {
  fetch(createURL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(response => console.log(response))
    .catch(error => console.error(`fail to add user :${error}`))
  console.log(JSON.stringify(user));
}

const getEmployees = () => {
  return fetch(getUsersURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.error(`fail to fetch :${error}`);
      return [];
    });
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

export const updateCurrentEmployee = (user: Object) => {
  const empId = user._id;
  return fetch(updateUserURL, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({empId,...user}),
  })
    .then(response => { 
      console.log(response);
    });
}
export { createEmployee, getEmployees, deleteEmployee }