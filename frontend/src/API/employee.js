const createURL = `http://localhost:4000/employees/create`;
const getUsersURL = `http://localhost:4000/employees/list`
const createEmployee = (user) => {
  fetch(createURL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }).then(response => console.log(response))
    .catch(error => console.error(`fail to add user :${error}`))
  console.log(JSON.stringify(user));
}

const getEmployees = () => {
  fetch(getUsersURL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`fail to fetch :${error}`));
}
export { createEmployee, getEmployees }