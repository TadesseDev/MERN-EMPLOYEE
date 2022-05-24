const createURL = `https://employee-management-addissoft.herokuapp.com/employees/create`;
const getUsersURL = `https://employee-management-addissoft.herokuapp.com/employees/list`
const deleteURL = `https://employee-management-addissoft.herokuapp.com/employees/delete`
const updateUserURL=`https://employee-management-addissoft.herokuapp.com/employees/update`
const createEmployee = (user: object) => {
  return fetch(createURL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(response => response.json())
    .then(data => data)
    .catch(error => console.error(`fail to add user :${error}`));
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